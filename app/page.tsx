import { BrandHero } from "@/components/rebrand/brand-hero";
import { BrandServices } from "@/components/rebrand/brand-services";
import { BrandProcess } from "@/components/rebrand/brand-process";
import { BrandCta } from "@/components/rebrand/brand-cta";

export default function Home() {
  return (
    <>
      <BrandHero />
      <BrandServices />
      <BrandProcess />
      <BrandCta />
    </>
  );
}
