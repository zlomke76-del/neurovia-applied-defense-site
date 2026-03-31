import Image from "next/image";

export default function Home() {
  const capabilities = [
    {
      id: "01",
      title: "Advanced Filtration Systems",
      status: "ACTIVE",
      desc: "High-performance filtration materials designed for containment, reliability, and consistency in operational environments.",
      emphasis: "lead",
    },
    {
      id: "02",
      title: "Smart Textile Integration",
      status: "INTEGRATED",
      desc: "Material platforms capable of supporting embedded sensing, adaptive response, and next-generation wearable systems.",
      emphasis: "standard",
    },
    {
      id: "03",
      title: "Protective Material Systems",
      status: "VERIFIED",
      desc: "Engineered fibers built for durability, biological resistance, and sustained performance under real-world stress conditions.",
      emphasis: "standard",
    },
    {
      id: "04",
      title: "Deployment Readiness",
      status: "MONITORED",
      desc: "Every system is evaluated against real deployment conditions, not just controlled or theoretical environments.",
      emphasis: "standard",
    },
  ];

  const modules = [
    {
      label: "SYSTEM // 01",
      title: "Built for operational environments",
      body: "Material systems are designed for environments where variability, stress, and consequence are inherent to performance.",
    },
    {
      label: "SYSTEM // 02",
      title: "Performance beyond controlled conditions",
      body: "Capability is defined not only by lab validation, but by how materials behave under real-world variability and operational constraints.",
    },
    {
      label: "SYSTEM // 03",
      title: "Aligned for defense and government engagement",
      body: "Structured to support serious procurement, defense, and strategic partnership conversations with clarity and applied credibility.",
    },
  ];

  const procurement = [
    "Veteran-Owned",
    "Service-disabled eligibility pathway",
    "U.S.-based operational alignment",
    "Structured for defense and government engagement",
  ];

  const progression = [
    {
      id: "01",
      title: "Deployed System",
      subtitle: "Operator-Level Deployment",
      image: "/assets/images/image_gas_mask_01.png",
      alt: "Frontline soldier wearing the gas mask system",
      desc: "Mission-ready protective equipment shown at the operator level, grounding the platform in real deployment conditions where system credibility begins.",
      accent: "standard",
    },
    {
      id: "02",
      title: "Boundary Layer",
      subtitle: "Material Interaction Zone",
      image: "/assets/images/image_gas_mask_filtration_01.png",
      alt: "Close-up of the filtration system inside the mask",
      desc: "The filtration boundary is where flow, capture, and biological burden reduction become operationally meaningful under sustained use.",
      accent: "focus",
    },
    {
      id: "03",
      title: "Material Core",
      subtitle: "Performance Layer",
      image: "/assets/images/image_gas_mask_filtration_02.png",
      alt: "Extreme close-up of the internal filter layers",
      desc: "The progression resolves into the internal material structure itself, where consistency, density, and fiber behavior determine system performance.",
      accent: "standard",
    },
  ];

  const battlefield = [
    {
      id: "01",
      title: "Field Intervention",
      subtitle: "Uncontrolled Conditions",
      image: "/assets/images/image_battlefield_01.png",
      alt: "Combat medic stabilizing a soldier in the field",
      desc: "Initial intervention occurs under variable field conditions where cleanliness, stability, and material reliability directly influence outcome.",
      accent: "standard",
    },
    {
      id: "02",
      title: "Contact Surface",
      subtitle: "Biological Boundary",
      image: "/assets/images/image_battlefield_wound_01.png",
      alt: "Close-up of a sterile dressing contact layer applied to skin",
      desc: "The wound interface becomes the governing boundary, managing moisture, biological load, and sustained contact with living tissue.",
      accent: "focus",
    },
    {
      id: "03",
      title: "Fiber Architecture",
      subtitle: "Material Performance Layer",
      image: "/assets/images/image_battlefield_fiber_01.png",
      alt: "Macro view of advanced fiber structure used in wound care",
      desc: "Performance resolves at the fiber structure itself, where consistency, control, and material behavior determine real-world effectiveness.",
      accent: "standard",
    },
  ];



  const maritime = [
    {
      id: "01",
      title: "Shipboard Environment",
      subtitle: "Confined Maritime Operations",
      video: "/assets/video/video_battleship_01.mp4",
      poster: "/assets/images/image_battleship_ppe_01.png",
      alt: "Battleship operating environment with PhantomFiber maritime deployment context",
      desc: "Shipboard environments compress moisture exposure, repeated surface contact, and sustained operational readiness into a single controlled but high-consequence setting.",
      accent: "standard",
    },
    {
      id: "02",
      title: "Clinical Control",
      subtitle: "Shipboard Medical Interface",
      image: "/assets/images/image_battleship_clinic_01.png",
      alt: "PhantomFiber antibacterial clinical application inside a battleship medical environment",
      desc: "Antibacterial material performance supports cleaner intervention conditions in shipboard medical spaces where contamination control and disciplined handling matter continuously.",
      accent: "focus",
    },
    {
      id: "03",
      title: "Maritime PPE Systems",
      subtitle: "Wearable Protection Layer",
      image: "/assets/images/image_battleship_ppe_01.png",
      alt: "Maritime PPE system highlighting PhantomFiber material integration",
      desc: "Protective textile systems extend into maritime PPE where repeat use, environmental durability, and exposure management must persist across operational cycles.",
      accent: "standard",
    },
  ];

  const heroSignals = [
    "Filtration",
    "Wound Care",
    "Smart Textiles",
    "Deployment Systems",
  ];

  const doctrine = [
    "Performance is determined at the material layer.",
    "Boundary conditions define system behavior.",
    "Deployment context is part of validation.",
  ];

  const leftProtectionPoints = [
    "Respiratory filtration",
    "Face + boundary protection",
    "Material durability under stress",
  ];

  const rightProtectionPoints = [
    "Wound-contact control",
    "Moisture + wear management",
    "Integrated textile systems",
  ];

  const bodyCallouts = [
    {
      id: "01",
      label: "Respiratory Protection",
      detail: "Filtration at the breathing boundary",
      position:
        "left-0 top-[18%] w-[28%] md:left-2 md:w-[22%] xl:left-4 xl:w-[20%]",
      align: "items-end text-right",
    },
    {
      id: "02",
      label: "Interface Zones",
      detail: "Soft-contact and exposed transition areas",
      position:
        "left-0 top-[36%] w-[28%] md:left-3 md:w-[22%] xl:left-5 xl:w-[20%]",
      align: "items-end text-right",
    },
    {
      id: "03",
      label: "Torso Coverage",
      detail: "Protective textile layers across the chest and core",
      position:
        "right-0 top-[21%] w-[28%] md:right-2 md:w-[22%] xl:right-4 xl:w-[20%]",
      align: "items-start text-left",
    },
    {
      id: "04",
      label: "Joint Surfaces",
      detail: "Durability and control across motion-heavy surfaces",
      position:
        "right-0 top-[39%] w-[28%] md:right-3 md:w-[22%] xl:right-5 xl:w-[20%]",
      align: "items-start text-left",
    },
    {
      id: "05",
      label: "Lower-Body Wear",
      detail: "Extended performance under friction and field exposure",
      position:
        "left-0 bottom-[15%] w-[28%] md:left-2 md:w-[22%] xl:left-4 xl:w-[20%]",
      align: "items-end text-right",
    },
    {
      id: "06",
      label: "System Integration",
      detail: "Protection logic extended across wearable systems",
      position:
        "right-0 bottom-[15%] w-[28%] md:right-2 md:w-[22%] xl:right-4 xl:w-[20%]",
      align: "items-start text-left",
    },
  ];

  return (
    <main className="min-h-screen bg-[#040706] text-[#f2f6f3] selection:bg-[#9fe3b3]/30">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(159,227,179,0.18),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(194,161,74,0.12),transparent_24%),linear-gradient(180deg,rgba(9,18,14,0.5),rgba(4,7,6,0))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(159,227,179,0.14),transparent)] xl:block" />

        <header className="relative z-10 border-b border-white/12">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0 rounded-md border border-white/12 bg-black/50 p-1 shadow-[0_0_18px_rgba(159,227,179,0.08)]">
                <Image
                  src="/assets/images/neurovia_favicon.svg"
                  alt="Neurovia Applied Defense mark"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.34em] text-[#9fe3b3]">
                  Neurovia Applied Defense
                </div>
                <div className="mt-1 text-xs text-white/58">
                  Mission-Aligned Material Systems
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/52 md:flex">
              <span>Systems</span>
              <span>Applications</span>
              <span>Deployment</span>
            </div>
          </div>
        </header>

        <section className="relative z-10 border-b border-white/12">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 border border-[#9fe3b3]/24 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/76">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9fe3b3] shadow-[0_0_12px_rgba(159,227,179,0.75)]" />
                Active Systems
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.92] text-white md:text-6xl xl:text-7xl">
                Mission-ready material systems
              </h1>

              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.92] text-white/84 md:text-6xl xl:text-7xl">
                for real-world deployment.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                High-performance materials for defense, filtration, medical,
                and operational environments where reliability, biological
                control, and deployment readiness are critical.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="group inline-flex items-center justify-center border border-[#9fe3b3]/52 bg-[#9fe3b3]/16 px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#f2f6f3] transition hover:bg-[#9fe3b3]/24">
                  Discuss Applications →
                </button>

                <button className="inline-flex items-center justify-center border border-white/18 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white/82 transition hover:border-white/28 hover:bg-white/[0.05]">
                  Learn More
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-white/46">
                {heroSignals.map((item) => (
                  <div key={item} className="inline-flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9fe3b3]/85" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border border-white/14 bg-black/24 px-5 py-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-white/40">
                  System Doctrine
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {doctrine.map((item) => (
                    <div
                      key={item}
                      className="border border-white/10 bg-white/[0.015] px-4 py-4 text-sm leading-7 text-white/76"
                    >
                      {item}
                    </div>
                  ))}
                </div>
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
                    className="border border-white/16 bg-black/28 px-4 py-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {label}
                    </div>
                    <div className="mt-2 text-sm tracking-[0.08em] text-white/90">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-5 bg-[radial-gradient(circle,rgba(159,227,179,0.08),transparent_62%)] blur-2xl" />

              <div className="relative border border-white/22 bg-[#0d1713]/96 shadow-[0_28px_80px_rgba(0,0,0,0.52)]">
                <div className="border-b border-white/12 px-5 py-4">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                    Operational Overview
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  {[
                    ["Filtration Systems", "Active"],
                    ["Smart Textiles", "Integrated"],
                    ["Protective Performance", "Verified"],
                    ["Deployment Readiness", "Ready"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border border-white/14 bg-black/22 px-4 py-4"
                    >
                      <span className="text-white/70">{label}</span>
                      <span className="text-[#9fe3b3]/80">{value}</span>
                    </div>
                  ))}

                  <div className="border border-white/14 bg-black/22 px-4 py-4">
                    <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/40">
                      Deployment Principle
                    </div>
                    <div className="space-y-2 text-sm leading-7 text-white/80">
                      <p>Performance must hold under real conditions.</p>
                      <p>Deployment context is part of validation.</p>
                      <p>Reliability must persist under stress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/12 bg-black/22 px-6 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9fe3b3]">
              System Doctrine
            </div>
            <h3 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Material performance is not defined by design.
            </h3>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-white/68 md:text-5xl">
              It is defined at the boundary of deployment.
            </h3>
          </div>
        </section>

        <section className="relative border-b border-white/12 px-6 py-20">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(159,227,179,0.18),transparent)] xl:block" />
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  System Progression
                </div>
                <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                  From operator-level deployment to the material core itself.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/62 md:translate-y-2">
                The sequence resolves from the deployed system, to the boundary
                layer, to the material core where filtration performance
                ultimately lives.
              </p>
            </div>

            <div className="relative grid gap-6 xl:grid-cols-3">
              {progression.map((item, index) => (
                <article
                  key={item.id}
                  className={`group relative overflow-hidden border ${
                    item.accent === "focus"
                      ? "border-white/24 bg-[linear-gradient(135deg,rgba(159,227,179,0.07),rgba(255,255,255,0.03))]"
                      : "border-white/16 bg-[linear-gradient(135deg,rgba(159,227,179,0.04),rgba(255,255,255,0.018))]"
                  } shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] ${
                    index === 1 ? "xl:-translate-y-3" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden border-b border-white/12">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1279px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(4,7,6,0.88),rgba(4,7,6,0.2),rgba(4,7,6,0.02))]" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-3 border border-[#9fe3b3]/20 bg-black/42 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                      <span className="text-[#9fe3b3]">{item.id}</span>
                      <span>Step {index + 1}</span>
                    </div>

                    <div className="absolute right-4 top-5 hidden xl:block">
                      <span className="block h-2.5 w-2.5 rounded-full bg-[#9fe3b3]/90 shadow-[0_0_12px_rgba(159,227,179,0.72)]" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                        {item.subtitle}
                      </div>
                      <div className="mt-2 text-xl font-medium text-white">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-7 text-white/66">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/12 px-6 py-20">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(159,227,179,0.18),transparent)] xl:block" />
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/38">
              Applied Across Domains
            </div>

            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  Battlefield Progression
                </div>
                <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                  Same material logic. Different operational conditions.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/62 md:translate-y-2">
                The sequence follows real intervention, moving from field
                conditions, to the biological boundary, and ultimately to the
                fiber architecture where wound-contact performance is determined.
              </p>
            </div>

            <div className="relative grid gap-6 xl:grid-cols-3">
              {battlefield.map((item, index) => (
                <article
                  key={item.id}
                  className={`group relative overflow-hidden border ${
                    item.accent === "focus"
                      ? "border-white/24 bg-[linear-gradient(135deg,rgba(159,227,179,0.07),rgba(255,255,255,0.03))]"
                      : "border-white/16 bg-[linear-gradient(135deg,rgba(159,227,179,0.04),rgba(255,255,255,0.018))]"
                  } shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] ${
                    index === 1 ? "xl:-translate-y-3" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden border-b border-white/12">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1279px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(4,7,6,0.88),rgba(4,7,6,0.2),rgba(4,7,6,0.02))]" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-3 border border-[#9fe3b3]/20 bg-black/42 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                      <span className="text-[#9fe3b3]">{item.id}</span>
                      <span>Step {index + 1}</span>
                    </div>

                    <div className="absolute right-4 top-5 hidden xl:block">
                      <span className="block h-2.5 w-2.5 rounded-full bg-[#9fe3b3]/90 shadow-[0_0_12px_rgba(159,227,179,0.72)]" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                        {item.subtitle}
                      </div>
                      <div className="mt-2 text-xl font-medium text-white">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-7 text-white/66">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="relative border-b border-white/12 px-6 py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(110,156,214,0.12),transparent_38%),radial-gradient(circle_at_80%_18%,rgba(78,113,168,0.12),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(126,170,225,0.18),transparent)] xl:block" />
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/38">
              Applied Across Maritime Operations
            </div>

            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#8ebcff]">
                  Maritime Deployment Progression
                </div>
                <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                  Same material logic. Shipboard operational conditions.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/62 md:translate-y-2">
                The sequence follows maritime deployment from shipboard environment,
                to clinical control, to wearable protection systems where hygiene,
                moisture, repeated contact, and operational readiness must hold together.
              </p>
            </div>

            <div className="relative grid gap-6 xl:grid-cols-3">
              {maritime.map((item, index) => (
                <article
                  key={item.id}
                  className={`group relative overflow-hidden border ${
                    item.accent === "focus"
                      ? "border-[#8ebcff]/24 bg-[linear-gradient(135deg,rgba(98,138,196,0.12),rgba(255,255,255,0.03))]"
                      : "border-white/16 bg-[linear-gradient(135deg,rgba(78,113,168,0.08),rgba(255,255,255,0.018))]"
                  } shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] ${
                    index === 1 ? "xl:-translate-y-3" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden border-b border-white/12">
                    {"video" in item ? (
                      <video
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={item.poster}
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1279px) 100vw, 33vw"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(4,7,12,0.92),rgba(6,12,22,0.34),rgba(4,7,12,0.04))]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(142,188,255,0.08),transparent_40%,rgba(255,255,255,0.03))]" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-3 border border-[#8ebcff]/22 bg-black/42 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                      <span className="text-[#8ebcff]">{item.id}</span>
                      <span>Step {index + 1}</span>
                    </div>

                    <div className="absolute right-4 top-5 hidden xl:block">
                      <span className="block h-2.5 w-2.5 rounded-full bg-[#8ebcff]/90 shadow-[0_0_12px_rgba(142,188,255,0.72)]" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#8ebcff]">
                        {item.subtitle}
                      </div>
                      <div className="mt-2 text-xl font-medium text-white">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-7 text-white/66">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/12 px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  Operational Capability Matrix
                </div>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold text-white md:text-4xl">
                  Advanced materials built for applied performance.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/62">
                Capability should read as deployed, credible, and system-level,
                with filtration leading and adjacent platforms reinforcing the
                broader material architecture.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className={`group border p-6 transition ${
                    item.emphasis === "lead"
                      ? "border-white/24 bg-[linear-gradient(135deg,rgba(159,227,179,0.08),rgba(255,255,255,0.03))] md:col-span-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.025)]"
                      : "border-white/16 bg-[linear-gradient(135deg,rgba(159,227,179,0.04),rgba(255,255,255,0.018))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                  } hover:border-[#9fe3b3]/30`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/38">
                      Module {item.id}
                    </div>
                    <div className="border border-[#9fe3b3]/22 bg-[#9fe3b3]/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9fe3b3]/88">
                      {item.status}
                    </div>
                  </div>

                  <div
                    className={`mt-6 font-medium text-white/94 ${
                      item.emphasis === "lead" ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {item.title}
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/12 px-6 py-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  Protection Mapping
                </div>
                <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                  PhantomFiber protection extends across the operator, not a
                  single boundary.
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/58">
                Protection resolves across respiratory, textile, wound-contact,
                and wear-interface zones—where material behavior determines
                survivability and sustained performance.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.82fr_1.36fr_0.82fr]">
              <article className="group relative min-h-[620px] overflow-hidden border border-white/14 bg-[#060b09]">
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/assets/video/video_soldier_01.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,7,6,0.3),rgba(4,7,6,0.8),rgba(4,7,6,0.98))]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                      External Threat Environment
                    </div>
                    <h4 className="mt-3 max-w-sm text-xl font-medium leading-tight text-white/90">
                      Protection begins at exposure.
                    </h4>
                  </div>

                  <div className="space-y-3 text-sm text-white/78">
                    {leftProtectionPoints.map((item) => (
                      <div
                        key={item}
                        className="border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden border border-white/24 bg-[#07100d] px-5 py-10 md:px-8 xl:px-10">
                <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(159,227,179,0.25),transparent)]" />

                <div className="relative z-20 mb-12 text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#9fe3b3]">
                    Full-Body Protection View
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    Protection architecture mapped across the operator system.
                  </div>
                </div>

                <div className="relative mx-auto flex min-h-[760px] items-center justify-center overflow-hidden">
                  <div className="relative w-full max-w-[250px] md:max-w-[300px] xl:max-w-[340px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(159,227,179,0.16),transparent_65%)] blur-2xl" />

                    <Image
                      src="/assets/images/image_soldier_back_full_01.png"
                      alt="Full-body PhantomFiber coverage map"
                      width={640}
                      height={1400}
                      className="relative z-10 mx-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                      priority
                    />
                  </div>

                  {bodyCallouts.map((item) => (
                    <div
                      key={item.id}
                      className={`pointer-events-none absolute z-20 ${item.position} hidden md:block`}
                    >
                      <div className={`relative flex ${item.align}`}>
                        <div className="pointer-events-auto border border-white/14 bg-black/60 px-4 py-3 backdrop-blur-sm shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                          <div className="text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                            {item.id}
                          </div>
                          <div className="mt-2 text-sm font-medium text-white">
                            {item.label}
                          </div>
                          <div className="mt-1 text-xs leading-5 text-white/72">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 md:hidden">
                  {bodyCallouts.map((item) => (
                    <div
                      key={item.id}
                      className="border border-white/12 bg-black/28 px-4 py-4"
                    >
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                        {item.id}
                      </div>
                      <div className="mt-2 text-sm font-medium text-white">
                        {item.label}
                      </div>
                      <div className="mt-1 text-xs leading-6 text-white/60">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="group relative min-h-[620px] overflow-hidden border border-white/16 bg-[#08100d]">
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/assets/video/video_soldier_02.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,7,6,0.25),rgba(4,7,6,0.75),rgba(4,7,6,0.96))]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                      Interface Continuity
                    </div>
                    <h4 className="mt-3 max-w-sm text-xl font-medium leading-tight text-white">
                      Protection persists across wear surfaces and systems.
                    </h4>
                  </div>

                  <div className="space-y-3 text-sm text-white/80">
                    {rightProtectionPoints.map((item) => (
                      <div
                        key={item}
                        className="border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-white/12 px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                System Definition
              </div>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                Advanced materials, real deployment, disciplined presentation.
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
                The platform should communicate material seriousness with the
                restraint of an engineered system, not the tone of speculative
                marketing.
              </p>
            </div>

            <div className="border border-white/24 bg-[#09110e] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/42">
                Governing Principles
              </div>
              <div className="grid gap-4">
                {[
                  "Material performance is inseparable from deployment context.",
                  "Operational credibility begins at the boundary, not the brochure.",
                  "System claims must resolve to material behavior under stress.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border border-white/12 bg-black/18 px-4 py-4"
                  >
                    <span className="mt-0.5 text-[10px] uppercase tracking-[0.24em] text-[#9fe3b3]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-white/76">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-7xl gap-6 lg:grid-cols-3">
            {modules.map((item) => (
              <div
                key={item.label}
                className="border border-white/24 bg-[#0a120f] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
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
        </section>

        <section className="border-b border-white/12 px-6 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#c2a14a]">
                Deployment Alignment
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-4xl">
                Aligned for defense and government deployment.
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
                Ownership, pathway alignment, and operational positioning should
                read with procurement-grade clarity and briefing-level
                confidence.
              </p>
            </div>

            <div className="border border-white/22 bg-[linear-gradient(135deg,rgba(159,227,179,0.04),rgba(255,255,255,0.018))] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/42">
                Alignment Matrix
              </div>

              <div className="grid gap-3">
                {procurement.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 border border-white/14 bg-black/22 px-4 py-4"
                  >
                    <div className="text-sm tracking-[0.08em] text-white/86">
                      {item}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/38">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9fe3b3] shadow-[0_0_10px_rgba(159,227,179,0.72)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="border border-white/22 bg-[linear-gradient(135deg,rgba(159,227,179,0.1),rgba(255,255,255,0.03),rgba(194,161,74,0.1))] px-6 py-12 shadow-[0_0_0_1px_rgba(255,255,255,0.025),0_24px_70px_rgba(0,0,0,0.3)] md:px-10 md:py-16">
              <div className="max-w-4xl">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#9fe3b3]">
                  Engagement
                </div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Deployable material systems require disciplined execution.
                </h3>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                  Neurovia Applied Defense presents advanced material systems for
                  deployment, procurement, and strategic partnership with
                  clarity, seriousness, and operational relevance.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center border border-[#9fe3b3]/46 bg-[#9fe3b3]/16 px-7 py-3 text-sm uppercase tracking-[0.18em] text-[#f2f6f3] transition hover:border-[#9fe3b3]/68 hover:bg-[#9fe3b3]/24">
                    Initiate Contact
                  </button>
                  <button className="inline-flex items-center justify-center border border-white/18 bg-white/[0.04] px-7 py-3 text-sm uppercase tracking-[0.18em] text-white/84 transition hover:border-white/32 hover:text-white">
                    View System Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/12">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-7 w-7 shrink-0">
                <Image
                  src="/assets/images/neurovia_favicon.svg"
                  alt="Neurovia Applied Defense mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span>© {new Date().getFullYear()} Neurovia Applied Defense</span>
            </div>

            <div className="uppercase tracking-[0.22em] text-white/32">
              Systems · Materials · Deployment
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
