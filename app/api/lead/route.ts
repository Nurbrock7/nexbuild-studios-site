import { NextResponse } from "next/server";
import type { LeadInput, LeadResponse } from "@/lib/types";
import { qualifyLead, type Qualification } from "@/lib/qualify";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";

// Mongoose and the Anthropic SDK need the Node runtime, not Edge.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/lead — the Lead Concierge pipeline.
 *
 * validate → qualify (Claude, best-effort) → persist (MongoDB, best-effort)
 * → acknowledge. Qualification and persistence must never fail the
 * submission: capture first, enrich second. Comms (Resend auto-reply +
 * owner notification + Cal.com link) land in Phase 4.
 */
export async function POST(req: Request): Promise<NextResponse<LeadResponse>> {
  const startedAt = Date.now();

  let body: Partial<LeadInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: a filled hidden field means a bot. Accept silently, then drop it
  // so the bot gets no signal that it was blocked.
  if (body.company_website && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const service = (body.service ?? "").trim();
  const budget = (body.budget ?? "").trim();

  const fields: string[] = [];
  if (!name) fields.push("name");
  if (!EMAIL_RE.test(email)) fields.push("email");
  if (!message) fields.push("message");

  if (fields.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fields },
      { status: 400 }
    );
  }

  // ── Qualify (best-effort) ────────────────────────────────────────────
  const qualification: Qualification | null = await qualifyLead({
    name,
    email,
    service,
    budget,
    message,
  });

  const responseTimeMs = Date.now() - startedAt;

  // ── Persist (best-effort) ────────────────────────────────────────────
  let leadId: string | null = null;
  try {
    await connectDB();
    const doc = await Lead.create({
      name,
      email,
      service,
      budget,
      message,
      qualification,
      responseTimeMs,
    });
    leadId = doc._id.toString();
  } catch (err) {
    // Never lose the lead silently — log everything we know about it.
    console.error("[lead] DB save failed — lead data follows:", err);
    console.error("[lead] unsaved lead:", {
      name,
      email,
      service,
      budget,
      message,
      qualification,
    });
  }

  // TODO Phase 4: Resend auto-reply (qualification.suggestedReply) + Cal.com
  //               link when readyToBook, and owner notification with score.

  console.log("[lead] processed:", {
    leadId,
    email,
    score: qualification?.score ?? "unqualified (AI skipped/failed)",
    readyToBook: qualification?.readyToBook ?? false,
    responseTimeMs,
  });

  return NextResponse.json({ ok: true });
}
