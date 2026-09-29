"use client";

import { useState } from "react";
import { Mail, MessageCircle, Check } from "lucide-react";
import type { LeadInput, LeadResponse } from "@/lib/types";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Website Development",
  "Web Application",
  "Mobile App",
  "SEO & Digital Growth",
  "AI Agent / Automation",
  "Full Package",
];

const BUDGETS = [
  "R5,000 – R15,000",
  "R15,000 – R50,000",
  "R50,000 – R150,000",
  "R150,000+",
];

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: LeadInput = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
  company_website: "",
};

const FIELD =
  "w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#4a6b59] focus:bg-white/[0.06]";

/**
 * BrandContact — dark contact section + lead form. Posts to /api/lead (the
 * Lead Concierge pipeline). The hero/nav CTAs anchor here.
 */
export function BrandContact() {
  const [values, setValues] = useState<LeadInput>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<string[]>([]);

  const update = (field: keyof LeadInput, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (invalid.includes(field)) setInvalid((p) => p.filter((f) => f !== field));
  };

  const validate = () => {
    const bad: string[] = [];
    if (!values.name.trim()) bad.push("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) bad.push("email");
    if (!values.message.trim()) bad.push("message");
    return bad;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const bad = validate();
    if (bad.length) {
      setInvalid(bad);
      setStatus("error");
      setError("Please fill in your name, a valid email, and a message.");
      return;
    }

    setStatus("submitting");
    setError("");
    setInvalid([]);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: LeadResponse = await res.json();
      if (!res.ok || !data.ok) {
        setInvalid(data.fields ?? []);
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again or email us directly.");
    }
  };

  const border = (field: keyof LeadInput) =>
    invalid.includes(field) ? "border-[#c0392b]" : "border-white/[0.10]";

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0c0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(74,107,89,0.10),transparent_60%)]" />

      <div className="container relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <div className="mb-5 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7fa088]" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
            Get In Touch
          </span>
        </div>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Let&apos;s build something
          <br />
          great together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/50">
          Tell us about your project and we&apos;ll get back to you within 24
          hours with a free audit and proposal.
        </p>

        {/* contact methods */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@nexbuildstudios.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition-colors hover:border-[#4a6b59]/40 hover:text-white"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            hello@nexbuildstudios.com
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition-colors hover:border-[#4a6b59]/40 hover:text-white"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            WhatsApp
          </a>
        </div>

        {/* form */}
        {status === "success" ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-[#4a6b59]/30 bg-[#4a6b59]/[0.08] px-8 py-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4a6b59] text-white">
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Thanks — we&apos;ve got it.
            </h3>
            <p className="max-w-sm text-white/60">
              Your brief is in. You&apos;ll hear back from us shortly with next
              steps.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 rounded-full border border-white/[0.15] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.05]"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 space-y-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm text-white/60">
                  Name
                </label>
                <input
                  id="c-name"
                  type="text"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={cn(FIELD, border("name"))}
                />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm text-white/60">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={cn(FIELD, border("email"))}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="c-service" className="mb-1.5 block text-sm text-white/60">
                  Service
                </label>
                <select
                  id="c-service"
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={cn(FIELD, "border-white/[0.10]")}
                >
                  <option value="" className="bg-[#14140f]">
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#14140f]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="c-budget" className="mb-1.5 block text-sm text-white/60">
                  Budget
                </label>
                <select
                  id="c-budget"
                  value={values.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={cn(FIELD, "border-white/[0.10]")}
                >
                  <option value="" className="bg-[#14140f]">
                    Select your budget
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} className="bg-[#14140f]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="c-message" className="mb-1.5 block text-sm text-white/60">
                Tell us about your project
              </label>
              <textarea
                id="c-message"
                rows={4}
                placeholder="Describe your project, goals, and timeline..."
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                className={cn(FIELD, "resize-none", border("message"))}
              />
            </div>

            {/* honeypot */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="company_website">Company website</label>
              <input
                id="company_website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.company_website}
                onChange={(e) => update("company_website", e.target.value)}
              />
            </div>

            {status === "error" && error && (
              <p className="text-sm text-[#e06b5b]" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4a6b59] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(74,107,89,0.3)] transition-colors hover:bg-[#557a66] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send Project Brief"}
              {status !== "submitting" && <span aria-hidden>→</span>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default BrandContact;
