import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexbuild Studios — Web Development, Apps & Digital Growth",
  description:
    "Nexbuild Studios builds high-performance websites, web applications, mobile apps, and SEO strategies that grow your business. Based in Cape Town, serving clients worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
