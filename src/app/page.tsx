export default function Home() {
  const capabilities = [
    {
      id: "01",
      title: "Execution Authority",
      status: "ACTIVE",
      desc: "Decisions are resolved at the moment of action, not inherited from stale state or prior approval.",
    },
    {
      id: "02",
      title: "Admissibility Control",
      status: "VERIFIED",
      desc: "Outputs are not judged for quality alone, but for whether they are allowed to survive and act.",
    },
    {
      id: "03",
      title: "Deterministic Governance",
      status: "LOCKED",
      desc: "Identical boundary conditions produce identical execution outcomes. No drift. No ambiguity.",
    },
    {
      id: "04",
      title: "Mission Alignment",
      status: "MONITORED",
      desc: "Capability is framed for operational environments where trust, traceability, and consequence matter.",
    },
  ];

  const modules = [
    {
      label: "SYSTEM // 01",
      title: "Governed execution at the point of consequence",
      body: "Most systems optimize for generation. Neurovia Applied Defense is structured around what is admissible at execution. The question is not what a model can propose, but what a governed system is allowed to make real.",
    },
    {
      label: "SYSTEM // 02",
      title: "Control before deployment",
      body: "Authority is recomputed at the moment of action. If the state, authority, or conditions do not hold, execution should not occur. This is the difference between output and operational trust.",
    },
    {
      label: "SYSTEM // 03",
      title: "Built for environments where failure carries weight",
      body: "Defense-aligned systems cannot rely on interpretation after the fact. They require boundary clarity, deterministic enforcement, and visible control over what survives into action.",
    },
  ];

  const procurement = [
    "51% Veteran-Owned structure",
    "Service-disabled veteran eligibility pathway",
    "Mission-aligned U.S. operating posture",
    "Structured for high-consequence deployment conversations",
  ];

  return (
    <main className="min-h-screen bg-[#08100d] text-[#e5efe8] selection:bg-[#7fae8c]/30">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,174,140,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(194,161,74,0.12),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,transparent,rgba(255,255,255,0.2),transparent)] [background-size:100%_4px]" />

        {/* Header */}
        <header className="relative z-10 border-b border-white/10">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#7fae8c]">
                Neurovia Applied Defense
              </div>
              <div className="mt-1 text-xs text-white/40">
                Command Layer for Governed Deployment
              </div>
            </div>

            <div className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/40 md:flex">
              <span>Systems</span>
              <span>Governance</span>
              <span>Execution</span>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative z-10 border-b border-white/10">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 border border-[#7fae8c]/20 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/55 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#7fae8c] shadow-[0_0_14px_rgba(127,174,140,0.75)]" />
                System Status / Active
              </div>

              <h1 className="text-4xl font-semibold leading-[0.95] text-white md:text-6xl xl:text-7xl">
                Intelligence is not the problem.
              </h1>

              <h2 className="mt-3 text-4xl font-semibold leading-[0.95] text-white/55 md:text-6xl xl:text-7xl">
                Execution is.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                Most systems optimize for output. Neurovia Applied Defense is
                built around execution authority, admissibility control, and
                deterministic governance in environments where consequence is
                real.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="group inline-flex items-center justify-center border border-[#7fae8c]/30 bg-[#7fae8c]/12 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#e5efe8] transition hover:border-[#7fae8c]/60 hover:bg-[#7fae8c]/18">
                  Request Access
                  <span className="ml-3 text-[#7fae8c] transition group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

                <button className="inline-flex items-center justify-center border border-white/15 bg-white/[0.02] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:bg-white/[0.04] hover:text-white">
                  Learn More
                </button>
              </div>

              <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["OWNERSHIP", "51% VETERAN-OWNED"],
                  ["STATUS", "MISSION-ALIGNED"],
                  ["CONTROL", "EXECUTION-GOVERNED"],
                  ["MODE", "DETERMINISTIC"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-none border border-white/10 bg-white/[0.02] px-4 py-4">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                      {label}
                    </div>
                    <div className="mt-2 text-sm tracking-[0.08em] text-white/78">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Command Panel */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(127,174,140,0.12),transparent_60%)] blur-2xl" />

              <div className="relative overflow-hidden border border-[#7fae8c]/20 bg-[#0d1713]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#7fae8c]">
                      Command Interface
                    </div>
                    <div className="mt-1 text-sm text-white/45">
                      Neurovia Applied Defense / System View
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7fae8c]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c2a14a]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      ["FILTRATION", "ACTIVE"],
                      ["SMART FIBER", "INTEGRATED"],
                      ["BIO-RESISTANCE", "VERIFIED"],
                      ["DEPLOYMENT", "ADMISSIBLE"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border border-white/10 bg-black/20 px-4 py-4"
                      >
                        <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                          {label}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-sm tracking-[0.12em] text-white/80">
                          <span>{value}</span>
                          <span className="h-2 w-2 rounded-full bg-[#7fae8c] shadow-[0_0_10px_rgba(127,174,140,0.6)]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/35">
                      Core Principle
                    </div>
                    <div className="space-y-2 text-sm leading-7 text-white/72">
                      <p>MODELS MAY PROPOSE.</p>
                      <p>GOVERNANCE DECIDES.</p>
                      <p>ONLY WHAT SURVIVES IS ALLOWED TO EXECUTE.</p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                    <div className="border border-white/10 bg-black/20 p-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Execution State
                      </div>
                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div>
                          <div className="text-3xl font-semibold tracking-tight text-[#e5efe8]">
                            LOCKED
                          </div>
                          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                            Boundary Conditions Required
                          </div>
                        </div>
                        <div className="rounded-full border border-[#7fae8c]/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#7fae8c]">
                          Verified
                        </div>
                      </div>
                    </div>

                    <div className="flex min-w-[132px] flex-col justify-between border border-white/10 bg-black/20 p-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Signal
                      </div>
                      <div className="mt-4 text-right text-2xl font-semibold text-[#c2a14a]">
                        01
                      </div>
                      <div className="text-right text-[10px] uppercase tracking-[0.22em] text-white/35">
                        Priority Channel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capability Grid */}
        <section className="relative z-10 border-b border-white/10">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#7fae8c]">
                  Capability Stack
                </div>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold text-white md:text-4xl">
                  Structured for control, not theater.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                Every layer should communicate governed action, boundary
                clarity, and operational credibility. Not a brochure. A system.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className="group border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#7fae8c]/30 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/30">
                      Module {item.id}
                    </div>
                    <div className="border border-[#7fae8c]/20 bg-[#7fae8c]/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#7fae8c]">
                      {item.status}
                    </div>
                  </div>

                  <div className="mt-6 text-xl font-medium text-white/88">
                    {item.title}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Modules */}
        <section className="relative z-10 border-b border-white/10">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <div className="mb-12">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#7fae8c]">
                System Definition
              </div>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                The page should feel like access to a governed environment.
              </h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {modules.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-[#0b1411]/80 p-6"
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                    {item.label}
                  </div>
                  <h4 className="mt-5 text-xl font-medium leading-8 text-white/86">
                    {item.title}
                  </h4>
                  <p className="mt-5 text-sm leading-7 text-white/52">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement Layer */}
        <section className="relative z-10 border-b border-white/10">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#c2a14a]">
                Procurement Layer
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-4xl">
                Structured for serious conversations.
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/52">
                This layer should communicate procurement readiness,
                defense-aligned operating posture, and visible control without
                slipping into generic contractor language.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.025] p-6">
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/35">
                Alignment Matrix
              </div>

              <div className="grid gap-3">
                {procurement.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <div className="text-sm tracking-[0.08em] text-white/75">
                      {item}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#7fae8c]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(127,174,140,0.09),rgba(255,255,255,0.03),rgba(194,161,74,0.08))] px-6 py-12 md:px-10 md:py-16">
              <div className="max-w-4xl">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#7fae8c]">
                  Engagement
                </div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  If execution matters, governance cannot be optional.
                </h3>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
                  Neurovia Applied Defense should present as a controlled
                  deployment environment for advanced capability, not a standard
                  marketing surface.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center border border-[#7fae8c]/35 bg-[#7fae8c]/14 px-7 py-3 text-sm uppercase tracking-[0.18em] text-[#e5efe8] transition hover:border-[#7fae8c]/65 hover:bg-[#7fae8c]/22">
                    Initiate Contact
                  </button>
                  <button className="inline-flex items-center justify-center border border-white/15 bg-white/[0.03] px-7 py-3 text-sm uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:text-white">
                    View System Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Neurovia Applied Defense</div>
            <div className="uppercase tracking-[0.22em] text-white/22">
              Systems · Governance · Execution
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
