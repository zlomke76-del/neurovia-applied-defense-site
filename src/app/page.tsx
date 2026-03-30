export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="w-full border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-sm tracking-wide text-white/80">
          Neurovia Applied Defense
        </div>
        <div className="text-xs text-white/40">
          Systems · Governance · Execution
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Intelligence is not the problem.
          </h1>

          <h2 className="mt-4 text-4xl md:text-6xl font-semibold text-white/60">
            Execution is.
          </h2>

          <p className="mt-8 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Most systems optimize for output.  
            We constrain what is allowed to act.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Request Access
            </button>
            <button className="px-6 py-3 border border-white/20 text-sm text-white/70 hover:border-white/40 transition">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* Core Claim */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <div className="text-xs uppercase tracking-widest text-white/30 mb-6">
            Core Principle
          </div>

          <p className="text-2xl md:text-3xl leading-relaxed text-white/80">
            Models may propose.  
            Governance decides.  
            Only what survives is allowed to execute.
          </p>

        </div>
      </section>

      {/* Capability Grid */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Execution Authority",
              desc: "Decisions are resolved at the moment of action, not assumed from prior state.",
            },
            {
              title: "Admissibility Control",
              desc: "Outputs are not evaluated for quality alone, but for whether they are allowed to exist.",
            },
            {
              title: "Deterministic Governance",
              desc: "Identical boundary conditions produce identical outcomes. No drift. No ambiguity.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-6">
              <div className="text-sm text-white/40 mb-2">
                {item.title}
              </div>
              <div className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center">
        <h3 className="text-2xl md:text-3xl text-white/80">
          If execution matters, governance cannot be optional.
        </h3>

        <div className="mt-8">
          <button className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition">
            Contact
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-xs text-white/30 text-center">
        © {new Date().getFullYear()} Neurovia Dynamics
      </footer>

    </main>
  );
}
