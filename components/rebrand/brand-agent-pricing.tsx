import Link from "next/link";
import { AGENTS } from "./brand-agents";

/**
 * BrandAgentPricing — pricing for the productized AI agents. Lives on the
 * Pricing page (all pricing in one place). Data is reused from brand-agents.
 */
export function BrandAgentPricing() {
  return (
    <section className="relative bg-[#0a0c0b] pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fa088]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
              AI Agents
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Automation, priced to scale.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/50">
            A one-off build to set it up, plus a small monthly to host, monitor,
            and keep it improving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {AGENTS.map((a) => (
            <div
              key={a.title}
              className="flex flex-col rounded-2xl border border-white/[0.10] bg-white/[0.04] p-8"
            >
              <h3 className="font-display text-lg font-bold text-white">
                {a.title}
              </h3>
              <div className="mt-4 font-display text-3xl font-extrabold text-white">
                {a.price}
                <span className="ml-1 font-sans text-sm font-normal text-white/40">
                  {a.monthly}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/50">
                {a.desc}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/[0.15] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.05]"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandAgentPricing;
