import Anthropic from "@anthropic-ai/sdk";
import { QUALIFY_SYSTEM_PROMPT } from "@/lib/prompts/qualify";

/** The agent's verdict on one lead. Mirrors models/Lead.ts `qualification`. */
export interface Qualification {
  score: "hot" | "warm" | "cold";
  intent: string;
  summary: string;
  suggestedReply: string;
  readyToBook: boolean;
}

export interface QualifyInput {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

/** JSON schema enforced via structured outputs — the API guarantees the shape. */
const QUALIFICATION_SCHEMA = {
  type: "object" as const,
  properties: {
    score: { type: "string", enum: ["hot", "warm", "cold"] },
    intent: { type: "string" },
    summary: { type: "string" },
    suggestedReply: { type: "string" },
    readyToBook: { type: "boolean" },
  },
  required: ["score", "intent", "summary", "suggestedReply", "readyToBook"],
  additionalProperties: false,
};

// Singleton client — reads ANTHROPIC_API_KEY from env. Server-side only.
let client: Anthropic | null = null;
function getClient(): Anthropic {
  client ??= new Anthropic();
  return client;
}

/**
 * Qualify a lead with Claude. Returns null when the step can't run (no API
 * key) or fails — the caller must treat qualification as best-effort and
 * never lose the lead over it.
 */
export async function qualifyLead(
  input: QualifyInput
): Promise<Qualification | null> {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn("[qualify] skipped: ANTHROPIC_API_KEY not set");
    return null;
  }

  try {
    const response = await getClient().messages.create({
      model: "claude-sonnet-5",
      max_tokens: 4096,
      system: QUALIFY_SYSTEM_PROMPT,
      output_config: {
        format: {
          type: "json_schema",
          schema: QUALIFICATION_SCHEMA,
        },
      },
      messages: [
        {
          role: "user",
          content: [
            "New contact-form submission:",
            `Name: ${input.name}`,
            `Email: ${input.email}`,
            `Service selected: ${input.service || "(none selected)"}`,
            `Budget selected: ${input.budget || "(none selected)"}`,
            "Project message:",
            input.message,
          ].join("\n"),
        },
      ],
    });

    if (response.stop_reason === "refusal") {
      console.warn("[qualify] model refused the request");
      return null;
    }

    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      console.warn("[qualify] no text block in response");
      return null;
    }

    // Structured outputs guarantee schema-valid JSON in the text block.
    return JSON.parse(textBlock.text) as Qualification;
  } catch (err) {
    console.error("[qualify] failed:", err);
    return null;
  }
}
