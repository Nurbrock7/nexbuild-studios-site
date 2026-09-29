interface Step {
  num: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your business, your goals, and your audience. A free audit shows you exactly where the opportunities are.",
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "We map out the architecture, design the interface, and align every decision with your business objectives.",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "Clean code, rigorous testing, and transparent progress updates. You see exactly what's being built, every step of the way.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We launch, monitor, and optimise. Ongoing hosting, maintenance, and SEO keep your investment delivering returns.",
  },
];

/**
 * BrandProcess — dark "how we work" section. Four numbered steps.
 */
export function BrandProcess() {
  return (
    <section id="process" className="relative bg-[#0a0c0b] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fa088]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
              How We Work
            </span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            A process designed
            <br />
            for results.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/50">
            No surprises. No scope creep. Just a clear, proven process that
            delivers on time and on budget.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.num}>
              <div className="mb-5 h-px w-12 bg-[#4a6b59]" />
              <div className="font-display text-5xl font-extrabold leading-none text-white/[0.14]">
                {s.num}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandProcess;
