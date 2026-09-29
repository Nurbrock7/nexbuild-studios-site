import type { Metadata } from "next";
import "./globals.css";
import { BrandNav } from "@/components/rebrand/brand-nav";
import { BrandFooter } from "@/components/rebrand/brand-footer";

export const metadata: Metadata = {
  title: "Nexbuild Studios — Web Development, Apps & AI Automation",
  description:
    "Nexbuild Studios builds high-performance websites, web applications, and custom AI agents that automate your business and drive growth. Cape Town, serving clients worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0c0b] font-sans text-white antialiased">
        <BrandNav />
        {children}
        <BrandFooter />
      </body>
    </html>
  );
}
