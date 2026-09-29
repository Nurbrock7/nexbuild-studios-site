"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * BrandShape — the floating-glass shape from 21st.dev's HeroGeometric,
 * re-skinned to the Nexbuild dark brand: near-black canvas with Moss/emerald
 * green glows (not the demo's indigo/rose/cyan rainbow). Same motion.
 */
function BrandShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  y = 15,
  gradient = "from-[#4a6b59]/[0.18]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  y?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, y, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.10]",
            "shadow-[0_8px_32px_0_rgba(56,81,68,0.18)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(127,160,136,0.15),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

/**
 * BrandHero — Nexbuild's dark AI-studio hero. HeroGeometric's motion and
 * composition, on a near-black canvas with brand-green glows, the real
 * headline / sub / CTAs, and Syne display type.
 */
export function BrandHero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0c0b]">
      {/* soft brand-green wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a6b59]/[0.06] via-transparent to-[#385144]/[0.08] blur-3xl" />

      {/* floating green glows */}
      <div className="absolute inset-0 overflow-hidden">
        <BrandShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#4a6b59]/[0.18]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <BrandShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#385144]/[0.16]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <BrandShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#6b8f76]/[0.16]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <BrandShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#7fa088]/[0.14]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <BrandShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#2d4238]/[0.22]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-[0.98]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                We build digital products
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8fb39c] via-[#c3d8ca] to-[#8fb39c]">
                that grow businesses.
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed max-w-xl mx-auto px-4">
              Nexbuild Studios designs high-performance websites, web
              applications, and AI-powered agents — backed by SEO that drives
              real growth. Cape Town, serving clients worldwide.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#4a6b59] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(74,107,89,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#557a66]"
            >
              Start Your Project
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/[0.15] px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.05]"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* vignette fade into the page */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0b] via-transparent to-[#0a0c0b]/80 pointer-events-none" />
    </div>
  );
}

export default BrandHero;
