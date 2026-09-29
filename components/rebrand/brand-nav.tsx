"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LINKS: [string, string][] = [
  ["/#services", "Services"],
  ["/ai-agents", "AI Agents"],
  ["/#process", "Process"],
  ["/pricing", "Pricing"],
];

/**
 * BrandNav — dark AI-studio navbar. Logo + a burger menu (all screen sizes)
 * that opens a dropdown with the section links. Transparent over the hero,
 * blurred dark bar once scrolled or opened.
 */
export function BrandNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-[#0a0c0b]/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo — Syne wordmark (placeholder for a transparent/white logo) */}
        <Link
          href="/"
          className="flex items-baseline gap-1.5"
          aria-label="Nexbuild Studios"
        >
          <span className="font-display text-lg font-extrabold tracking-tight text-white md:text-xl">
            NEXBUILD
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-[#7fa088] md:text-xl">
            STUDIOS
          </span>
        </Link>

        {/* Burger toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/[0.06]"
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-transform duration-200",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-transform duration-200",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Dropdown menu + click-away backdrop */}
      {open && (
        <>
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <div className="absolute right-4 top-full z-50 mt-2 w-56 origin-top-right rounded-xl border border-white/10 bg-[#0a0c0b]/95 p-2 shadow-2xl backdrop-blur-md md:right-6">
            <ul className="flex flex-col">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

export default BrandNav;
