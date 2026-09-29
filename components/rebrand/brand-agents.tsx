import Link from "next/link";
import { Target, FileText, BarChart3, Check, type LucideIcon } from "lucide-react";

interface Agent {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
  price: string;
  monthly: string;
}

export const AGENTS: Agent[] = [
  {
    icon: Target,
    title: "Lead Qualifier & Booking Agent",
    desc: "Engages website visitors, qualifies leads by asking the right questions, scores them, and books qualified prospects straight into your calendar.",
    features: [
      "Natural conversation flow",
      "Custom qualification criteria",
      "Calendar integration",
      "Lead scoring & CRM sync",
      "24/7 automated follow-ups",
    ],
    price: "R12,000",
    monthly: "+ R2k/mo",
  },
  {
    icon: FileText,
    title: "Invoice & Document Processor",
    desc: "Upload invoices, receipts, or documents — the agent extracts key data, categorises it, and outputs clean spreadsheets or summaries. Hours of admin done in seconds.",
    features: [
      "PDF & image processing",
      "Automatic data extraction",
      "Smart categorisation",
      "Export to Excel / CSV",
      "Multi-document batch processing",
    ],
    price: "R15,000",
    monthly: "+ R3k/mo",
  },
  {
    icon: BarChart3,
    title: "Weekly Business Report Agent",
    desc: "Connects to your data sources and generates a formatted weekly report with key metrics, trends, and actionable insights — in your inbox every Monday.",
    features: [
      "Multi-source data integration",
      "Automated trend analysis",
      "Custom KPI tracking",
      "Branded PDF reports",
      "Scheduled email delivery",
    ],
    price: "R18,000",
    monthly: "+ R3.5k/mo",
  },
];

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4a6b59]/30 bg-[#4a6b59]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#8fb39c]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fb39c] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8fb39c]" />
      </span>
      Live Demo
    </span>
  );
}

function AgentCard({ icon: Icon, title, desc, features }: Agent) {
  return (
    <div className="group flex flex-col rounded-2xl border border-white/[0.10] bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6b59]/40 hover:bg-white/[0.06]">
      <div className="mb-6 flex items-center justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#4a6b59]/20 bg-[#4a6b59]/10 text-[#8fb39c] transition-colors group-hover:bg-[#4a6b59]/20">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <LiveBadge />
      </div>

      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 leading-relaxed text-white/50">{desc}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
            <Check className="h-4 w-4 shrink-0 text-[#8fb39c]" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-white/[0.08] pt-6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8fb39c] transition-colors hover:text-white"
        >
          Learn More
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

/**
 * BrandAgents — dark "AI-powered solutions" section: the three productized
 * agents. This is the flagship offering of the studio's AI-automation pivot.
 */
export function BrandAgents() {
  return (
    <section
      id="ai-agents"
      className="relative overflow-hidden bg-[#0a0c0b] py-24 md:py-32"
    >
      {/* ambient green glow — signals the AI section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(74,107,89,0.12),transparent_60%)]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fa088]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
              AI-Powered Solutions
            </span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Intelligent agents that
            <br />
            work while you sleep.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/50">
            Custom-built AI agents that automate your lead generation,
            workflows, and reporting — so you can focus on growing the business.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {AGENTS.map((a) => (
            <AgentCard key={a.title} {...a} />
          ))}
        </div>

        <p className="mt-10 text-center text-white/50">
          <span className="font-medium text-white">Need a custom agent?</span>{" "}
          Tell us what you want to automate and we&apos;ll design one for it.
        </p>
      </div>
    </section>
  );
}

export default BrandAgents;
