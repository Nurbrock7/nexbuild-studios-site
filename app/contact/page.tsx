import type { Metadata } from "next";
import { BrandContact } from "@/components/rebrand/brand-contact";

export const metadata: Metadata = {
  title: "Contact — Nexbuild Studios",
  description:
    "Tell us about your project and we'll get back to you within 24 hours with a free audit and proposal. Cape Town, serving clients worldwide.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <BrandContact />
    </div>
  );
}
