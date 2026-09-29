import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tier {
  tier: string;
  amount: string;
  note: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    tier: "Starter",
    amount: "R8,500",
    note: "Perfect for small businesses getting online",
    features: [
      "Up to 5-page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "2-week delivery",
    ],
    cta: "Get Started",
  },
  {
    tier: "Growth",
    amount: "R25,000",
    note: "For businesses ready to scale online",
    features: [
      "Custom design & development",
      "Advanced functionality",
      "Full SEO optimisation",
      "CMS / Admin panel",
      "Analytics & tracking setup",
      "3–4 week delivery",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    tier: "Premium",
    amount: "Custom",
    note: "Web apps, mobile apps & complex builds",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "API integrations",
      "Ongoing SEO retainer",
      "Priority support",
      "Dedicated project manager",
    ],
    cta: "Let's Talk",
  },
];

function PricingCard({ tier, amount, note, features, cta, featured }: Tier) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8",
        featured
          ? "border-[#4a6b59]/50 bg-gradient-to-b from-[#4a6b59]/[0.12] to-transparent shadow-[0_0_50px_rgba(74,107,89,0.15)]"
          : "border-white/[0.10] bg-white/[0.04]",
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4a6b59] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
          Most Popular
        </span>
      )}

      <div className="font-mono text-xs uppercase tracking-[0.15em] text-[#8fb39c]">
        {tier}
      </div>
      <div className="mt-3 font-display text-4xl font-extrabold text-white">
        {amount}
      </div>
      <p className="mt-2 text-sm text-white/50">{note}</p>

      <ul className="mt-7 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
            <Check className="h-4 w-4 shrink-0 text-[#8fb39c]" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
          featured
            ? "bg-[#4a6b59] text-white hover:bg-[#557a66]"
            : "border border-white/[0.15] text-white hover:bg-white/[0.05]",
        )}
      >
        {cta}
      </Link>
    </div>
  );
}

/**
 * BrandPricing — dark pricing section. Three tiers, Growth featured.
 */
export function BrandPricing() {
  return (
    <section id="pricing" className="relative bg-[#0a0c0b] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fa088]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
              Investment
            </span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Transparent pricing.
            <br />
            No hidden costs.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/50">
            Choose a starting point that fits your needs. Every package includes
            hosting setup and basic SEO foundations.
          </p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <PricingCard key={t.tier} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandPricing;
