import type { Metadata } from "next";
import { BrandAgents } from "@/components/rebrand/brand-agents";

export const metadata: Metadata = {
  title: "AI Agents & Automation — Nexbuild Studios",
  description:
    "Custom AI agents that automate lead qualification, document processing, and reporting — built to integrate with your systems and work around the clock.",
};

export default function AiAgentsPage() {
  return (
    <div className="pt-16">
      <BrandAgents />
    </div>
  );
}
