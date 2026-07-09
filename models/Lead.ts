import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

/**
 * Lead — one contact-form submission plus the agent's qualification verdict.
 * `qualification` is null when the AI step was skipped or failed; the lead is
 * always saved regardless (capture first, enrich second).
 */
const LeadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    service: { type: String, default: "" },
    budget: { type: String, default: "" },
    message: { type: String, required: true },

    qualification: {
      type: {
        score: { type: String, enum: ["hot", "warm", "cold"], required: true },
        intent: { type: String, required: true },
        summary: { type: String, required: true },
        suggestedReply: { type: String, required: true },
        readyToBook: { type: Boolean, required: true },
      },
      default: null,
    },

    /** Lifecycle: new → replied (auto-reply sent, Phase 4) → booked/closed (manual). */
    status: {
      type: String,
      enum: ["new", "replied", "booked", "closed"],
      default: "new",
    },

    /** Time from form submission to processing complete — the case-study metric. */
    responseTimeMs: { type: Number, default: null },
  },
  { timestamps: true }
);

export type LeadDoc = InferSchemaType<typeof LeadSchema>;

// Reuse the compiled model across hot reloads (Next.js dev re-evaluates modules).
export const Lead: Model<LeadDoc> =
  (mongoose.models.Lead as Model<LeadDoc>) ??
  mongoose.model<LeadDoc>("Lead", LeadSchema);
