import Link from "next/link";

type IconProps = { className?: string };

// Brand/social glyphs as inline SVGs (lucide-react v1 dropped brand icons).
function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

const EXPLORE: [string, string][] = [
  ["/#services", "Services"],
  ["/ai-agents", "AI Agents"],
  ["/#process", "Process"],
  ["/pricing", "Pricing"],
  ["/contact", "Contact"],
];

const SOCIALS: [string, string, (p: IconProps) => React.ReactElement][] = [
  ["#", "LinkedIn", LinkedinIcon],
  ["#", "Instagram", InstagramIcon],
  ["#", "GitHub", GithubIcon],
  ["mailto:hello@nexbuildstudios.com", "Email", MailIcon],
];

/**
 * BrandFooter — dark footer: wordmark + explore links + socials + copyright.
 */
export function BrandFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0c0b] py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-baseline gap-1.5" aria-label="Nexbuild Studios">
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                NEXBUILD
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-[#7fa088]">
                STUDIOS
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Web development, apps, and AI automation — built to grow your
              business. Cape Town, serving clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/40">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {EXPLORE.map(([href, label]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/40">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map(([href, label, Icon]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            © 2026 Nexbuild Studios. Cape Town, South Africa.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/30">
            Built with AI automation
          </p>
        </div>
      </div>
    </footer>
  );
}

export default BrandFooter;
