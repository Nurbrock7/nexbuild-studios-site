import Link from "next/link";

/**
 * BrandCta — closing call-to-action band for the home page. Pushes visitors
 * toward the contact and pricing pages.
 */
export function BrandCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a0c0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,107,89,0.12),transparent_65%)]" />
      <div className="container relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Ready to build something
          <br />
          that grows?
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-white/50">
          Tell us what you&apos;re working on. We&apos;ll come back within 24
          hours with a free audit and a clear plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#4a6b59] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(74,107,89,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#557a66]"
          >
            Start Your Project
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-full border border-white/[0.15] px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.05]"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BrandCta;
