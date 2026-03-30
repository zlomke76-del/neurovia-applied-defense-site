export default function Home() {
  const capabilities = [
    {
      id: "01",
      title: "Advanced Filtration Systems",
      status: "ACTIVE",
      desc: "High-performance filtration materials designed for containment, reliability, and consistency in operational environments.",
    },
    {
      id: "02",
      title: "Smart Textile Integration",
      status: "INTEGRATED",
      desc: "Material platforms capable of supporting embedded sensing, adaptive response, and next-generation wearable systems.",
    },
    {
      id: "03",
      title: "Protective Material Systems",
      status: "VERIFIED",
      desc: "Engineered fibers built for durability, biological resistance, and sustained performance under real-world stress conditions.",
    },
    {
      id: "04",
      title: "Deployment Readiness",
      status: "MONITORED",
      desc: "Every system is evaluated against real deployment conditions, not just controlled or theoretical environments.",
    },
  ];

  const modules = [
    {
      label: "SYSTEM // 01",
      title: "Built for operational environments",
      body: "Neurovia Applied Defense focuses on material systems intended for environments where variability, stress, and consequence are inherent to performance.",
    },
    {
      label: "SYSTEM // 02",
      title: "Performance beyond controlled conditions",
      body: "Capability is defined not only by lab validation, but by how materials behave when exposed to real-world variability and operational constraints.",
    },
    {
      label: "SYSTEM // 03",
      title: "Aligned for defense and government engagement",
      body: "Positioned to support serious procurement, defense, and strategic partnership discussions with clarity and applied credibility.",
    },
  ];

  const procurement = [
    "Veteran-Owned",
    "Service-disabled eligibility pathway",
    "U.S.-based operational alignment",
    "Structured for defense and government engagement",
  ];

  return (
    <main className="min-h-screen bg-[#050807] text-[#f2f6f3] selection:bg-[#9fe3b3]/30">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(159,227,179,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(194,161,74,0.18),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_bottom,transparent,rgba(255,255,255,0.22),transparent)] [background-size:100%_4px]" />

        <header className="relative z-10 border-b border-white/12">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#9fe3b3]">
                Neurovia Applied Defense
              </div>
              <div className="mt-1 text-xs text-white/60">
                Mission-Aligned Material Systems
              </div>
            </div>

            <div className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/55 md:flex">
              <span>Systems</span>
              <span>Applications</span>
              <span>Deployment</span>
            </div>
          </div>
        </header>

        <section className="relative z-10 border-b border-white/12">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 border border-[#9fe3b3]/28 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/72">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9fe3b3] shadow-[0_0_14px_rgba(159,227,179,0.9)]" />
                System Status / Active
              </div>

              <h1 className="text-4xl font-semibold leading-[0.95] text-white md:text-6xl xl:text-7xl">
                Mission-ready material systems
              </h1>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] text-white/75 md:text-6xl xl:text-7xl">
                built for real-world deployment.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                Neurovia Applied Defense develops high-performance materials for
                defense, filtration, medical, and operational environments where
                reliability and deployment readiness are critical.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="group inline-flex items-center justify-center border border-[#9fe3b3]/50 bg-[#9fe3b3]/18 px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#f2f6f3] transition hover:border-[#9fe3b3]/75 hover:bg-[#9fe3b3]/28">
                  Discuss Applications
                  <span className="ml-3 text-[#9fe3b3] transition group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

                <button className="inline-flex items-center justify-center border border-white/20 bg-white/[0.04] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white/80 transition hover:border-white/35 hover:bg-white/[0.06] hover:text-white">
                  Learn More
                </button>
              </div>

              <div className="mt-12 grid gap-4 border-t border-white/12 pt-8 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["OWNERSHIP", "VETERAN-OWNED"],
                  ["FOCUS", "MISSION-ALIGNED"],
                  ["SYSTEMS", "DEPLOYMENT-READY"],
                  ["MODE", "HIGH-PERFORMANCE"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-white/15 bg-[linear-gradient(135deg,rgba(159,227,179,0.05),rgba(255,255,255,0.02))] px-4 py-4 shadow-[inset_0_0_20px_rgba(159,227,179,0.04)]"
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {label}
                    </div>
                    <div className="mt-2 text-sm tracking-[0.08em] text-white/90">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 bg-[radial-gradient(circle,rgba(159,227,179,0.16),transparent_62%)] blur-2xl" />

              <div className="relative overflow-hidden border border-white/15 bg-[#0f1f18]/95 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.62)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/12 px-5 py-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                      Operational Overview
                    </div>
                    <div className="mt-1 text-sm text-white/62">
                      Neurovia Applied Defense / System View
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9fe3b3] shadow-[0_0_10px_rgba(159,227,179,0.85)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c2a14a] shadow-[0_0_8px_rgba(194,161,74,0.5)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      ["FILTRATION SYSTEMS", "ACTIVE"],
                      ["SMART TEXTILES", "INTEGRATED"],
                      ["PROTECTIVE PERFORMANCE", "VERIFIED"],
                      ["DEPLOYMENT READINESS", "READY"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border border-white/14 bg-black/24 px-4 py-4 shadow-[inset_0_0_16px_rgba(159,227,179,0.03)]"
                      >
                        <div className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                          {label}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-sm tracking-[0.12em] text-white/90">
                          <span>{value}</span>
                          <span className="h-2.5 w-2.5 rounded-full bg-[#9fe3b3] shadow-[0_0_12px_rgba(159,227,179,0.85)]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border border-white/14 bg-black/24 p-4 shadow-[inset_0_0_16px_rgba(159,227,179,0.03)]">
                    <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/42">
                      Deployment Principle
                    </div>
                    <div className="space-y-2 text-sm leading-7 text-white/82">
                      <p>PERFORMANCE MUST HOLD UNDER REAL CONDITIONS.</p>
                      <p>DEPLOYMENT CONTEXT MATTERS.</p>
                      <p>RELIABILITY MUST SURVIVE CONSEQUENCE.</p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                    <div className="border border-white/14 bg-black/24 p-4 shadow-[inset_0_0_16px_rgba(159,227,179,0.03)]">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                        Operational State
                      </div>
                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div>
                          <div className="text-3xl font-semibold tracking-tight text-white">
                            READY
                          </div>
                          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/48">
                            Deployment-Aligned
                          </div>
                        </div>
                        <div className="rounded-full border border-[#9fe3b3]/35 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#9fe3b3]">
                          Verified
                        </div>
                      </div>
                    </div>

                    <div className="flex min-w-[132px] flex-col justify-between border border-white/14 bg-black/24 p-4 shadow-[inset_0_0_16px_rgba(159,227,179,0.03)]">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                        Signal
                      </div>
                      <div className="mt-4 text-right text-2xl font-semibold text-[#c2a14a]">
                        01
                      </div>
                      <div className="text-right text-[10px] uppercase tracking-[0.22em] text-white/42">
                        Priority Channel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-white/12">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  Capability Stack
                </div>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold text-white md:text-4xl">
                  Advanced materials built for applied performance.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/62">
                The platform should feel advanced, credible, and high-value
                without over-centering governance language. Capability and
                deployment should lead.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className="group border border-white/15 bg-[linear-gradient(135deg,rgba(159,227,179,0.05),rgba(255,255,255,0.02))] p-6 shadow-[inset_0_0_18px_rgba(159,227,179,0.04)] transition hover:border-[#9fe3b3]/35 hover:bg-[linear-gradient(135deg,rgba(159,227,179,0.08),rgba(255,255,255,0.03))]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/38">
                      Module {item.id}
                    </div>
                    <div className="border border-[#9fe3b3]/28 bg-[#9fe3b3]/12 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9fe3b3]">
                      {item.status}
                    </div>
                  </div>

                  <div className="mt-6 text-xl font-medium text-white/94">
                    {item.title}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-white/12">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <div className="mb-12">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                System Definition
              </div>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                Advanced materials, real deployment, disciplined presentation.
              </h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {modules.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/15 bg-[#0b1511]/88 p-6 shadow-[inset_0_0_18px_rgba(159,227,179,0.03)]"
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                    {item.label}
                  </div>
                  <h4 className="mt-5 text-xl font-medium leading-8 text-white/92">
                    {item.title}
                  </h4>
                  <p className="mt-5 text-sm leading-7 text-white/64">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-white/12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#c2a14a]">
                Procurement Alignment
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-4xl">
                Structured for serious conversations.
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
                Veteran ownership, government pathway alignment, and stronger
                materials positioning should read clearly and with confidence.
              </p>
            </div>

            <div className="border border-white/15 bg-[linear-gradient(135deg,rgba(159,227,179,0.05),rgba(255,255,255,0.02))] p-6 shadow-[inset_0_0_18px_rgba(159,227,179,0.04)]">
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/42">
                Alignment Matrix
              </div>

              <div className="grid gap-3">
                {procurement.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 border border-white/14 bg-black/24 px-4 py-4 shadow-[inset_0_0_14px_rgba(159,227,179,0.03)]"
                  >
                    <div className="text-sm tracking-[0.08em] text-white/86">
                      {item}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/38">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9fe3b3] shadow-[0_0_12px_rgba(159,227,179,0.82)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="border border-white/15 bg-[linear-gradient(135deg,rgba(159,227,179,0.12),rgba(255,255,255,0.04),rgba(194,161,74,0.12))] px-6 py-12 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_70px_rgba(0,0,0,0.35)] md:px-10 md:py-16">
              <div className="max-w-4xl">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  Engagement
                </div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Mission-aligned materials deserve disciplined execution.
                </h3>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                  Neurovia Applied Defense should present as a high-clarity,
                  high-performance platform for advanced material deployment,
                  procurement, and strategic partnership.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center border border-[#9fe3b3]/48 bg-[#9fe3b3]/18 px-7 py-3 text-sm uppercase tracking-[0.18em] text-[#f2f6f3] transition hover:border-[#9fe3b3]/72 hover:bg-[#9fe3b3]/28">
                    Initiate Contact
                  </button>
                  <button className="inline-flex items-center justify-center border border-white/20 bg-white/[0.05] px-7 py-3 text-sm uppercase tracking-[0.18em] text-white/84 transition hover:border-white/35 hover:text-white">
                    View System Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/12">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Neurovia Applied Defense</div>
            <div className="uppercase tracking-[0.22em] text-white/32">
              Systems · Materials · Deployment
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
