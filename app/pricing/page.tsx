import type { Metadata } from "next";
import { BrandPricing } from "@/components/rebrand/brand-pricing";
import { BrandAgentPricing } from "@/components/rebrand/brand-agent-pricing";

export const metadata: Metadata = {
  title: "Pricing — Nexbuild Studios",
  description:
    "Transparent pricing with no hidden costs. Website and app packages plus AI agent automation — every package includes hosting and SEO foundations.",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <BrandPricing />
      <BrandAgentPricing />
    </div>
  );
}
