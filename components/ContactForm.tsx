"use client";

import { useState } from "react";
import type { LeadInput, LeadResponse } from "@/lib/types";

const SERVICES = [
  "Website Development",
  "Web Application",
  "Mobile App",
  "SEO & Digital Growth",
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

/**
 * ContactForm — the studio's own lead capture, wired to POST /api/lead.
 * Controlled inputs, client + server validation, and clear submit states.
 * This is the front door for the Lead Concierge agent (Phases 3–4).
 */
export default function ContactForm() {
  const [values, setValues] = useState<LeadInput>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [invalid, setInvalid] = useState<string[]>([]);

  const update = (field: keyof LeadInput, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (invalid.includes(field)) {
      setInvalid((prev) => prev.filter((f) => f !== field));
    }
  };

  const validate = (): string[] => {
    const fields: string[] = [];
    if (!values.name.trim()) fields.push("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) fields.push("email");
    if (!values.message.trim()) fields.push("message");
    return fields;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const bad = validate();
    if (bad.length > 0) {
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

  if (status === "success") {
    return (
      <div className="contact-form form-success" role="status">
        <div className="form-success-icon">✓</div>
        <h3>Thanks — we&apos;ve got it.</h3>
        <p>
          Your brief is in. You&apos;ll hear back from us shortly with next steps.
        </p>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  const cls = (field: keyof LeadInput) =>
    invalid.includes(field) ? "form-group invalid" : "form-group";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className={cls("name")}>
          <label htmlFor="lead-name">Name</label>
          <input
            id="lead-name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div className={cls("email")}>
          <label htmlFor="lead-email">Email</label>
          <input
            id="lead-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="lead-service">Service</label>
          <select
            id="lead-service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lead-budget">Budget</label>
          <select
            id="lead-budget"
            name="budget"
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">Select your budget</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={cls("message") + " full"} style={{ marginTop: "16px" }}>
        <label htmlFor="lead-message">Tell us about your project</label>
        <textarea
          id="lead-message"
          name="message"
          placeholder="Describe your project, goals, and timeline..."
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
        ></textarea>
      </div>

      {/* Honeypot: hidden from real users; bots that fill it get silently dropped. */}
      <div className="hp-field" aria-hidden="true">
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
        <p className="form-status error" role="alert">
          {error}
        </p>
      )}

      <div className="form-submit">
        <button className="btn-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Project Brief"}
          {status !== "submitting" && <span className="arrow">→</span>}
        </button>
      </div>
    </form>
  );
}
