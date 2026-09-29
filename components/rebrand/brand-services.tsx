import {
  Code2,
  LayoutDashboard,
  Smartphone,
  TrendingUp,
  Bot,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom websites and landing pages built for speed, conversion, and scale. From business sites to complex platforms — we build it right the first time.",
    tags: ["React", "Next.js", "WordPress", "E-commerce"],
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "Full-stack web applications that solve real business problems. Dashboards, portals, booking systems, and custom tools tailored to your operations.",
    tags: ["SaaS", "Dashboards", "APIs", "Databases"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications your customers will actually want to use. Clean UI, smooth performance, built for iOS and Android.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Growth",
    desc: "Search engine optimisation and digital marketing strategies that drive organic traffic and turn visitors into customers. We don't just build — we grow.",
    tags: ["Technical SEO", "Content", "Analytics", "Strategy"],
  },
];

const FLAGSHIP = {
  title: "AI Agents & Automation",
  desc: "Custom AI-powered agents that automate lead qualification, document processing, reporting, and internal workflows — built to integrate seamlessly with your existing systems and work around the clock.",
  tags: [
    "Lead Generation",
    "Document Processing",
    "Workflow Automation",
    "Reporting",
    "Claude API",
  ],
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-white/50">
      {children}
    </span>
  );
}

function ServiceCard({ icon: Icon, title, desc, tags }: Service) {
  return (
    <div className="group rounded-2xl border border-white/[0.10] bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6b59]/40 hover:bg-white/[0.06]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#4a6b59]/20 bg-[#4a6b59]/10 text-[#8fb39c] transition-colors group-hover:bg-[#4a6b59]/20">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 leading-relaxed text-white/50">{desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

/**
 * BrandServices — dark services section. Four core services in a grid, with
 * AI Agents & Automation promoted to a full-width flagship card (the pivot).
 */
export function BrandServices() {
  return (
    <section id="services" className="relative bg-[#0a0c0b] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fa088]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Services built around
            <br />
            your growth.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/50">
            Every service works together — so your website, your app, and your
            search visibility all push in the same direction.
          </p>
        </div>

        {/* four core services */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* flagship: AI Agents & Automation */}
        <div className="group mt-6 overflow-hidden rounded-2xl border border-[#4a6b59]/30 bg-gradient-to-br from-[#4a6b59]/[0.10] via-[#4a6b59]/[0.04] to-transparent p-8 transition-all duration-300 hover:border-[#4a6b59]/50 md:p-10">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#4a6b59]/30 bg-[#4a6b59]/20 text-[#8fb39c]">
              <Bot className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <span className="rounded-full border border-[#4a6b59]/30 bg-[#4a6b59]/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-[#8fb39c]">
              Flagship
            </span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-white md:text-3xl">
            {FLAGSHIP.title}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
            {FLAGSHIP.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {FLAGSHIP.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandServices;
