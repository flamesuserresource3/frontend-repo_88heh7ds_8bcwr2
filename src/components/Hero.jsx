import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="top" className="relative h-[88vh] min-h-[640px] w-full border-b border-black overflow-hidden">
      {/* Spline background as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient veil to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-4 pb-16 sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-[3px_3px_0_0_#000]">
          Graphic Designer • Art Director
        </span>
        <h1 className="max-w-4xl font-black leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
          Bold, Clean, and Unapologetically Brutalist Visuals.
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg font-medium text-black/70">
          I craft striking identities, posters, and campaigns that cut through the noise. 
          Minimal forms. Maximal impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-md border border-black bg-black px-5 py-3 text-white font-semibold shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]"
          >
            View Selected Work
          </a>
          <a
            href="#contact"
            className="rounded-md border-2 border-black bg-white px-5 py-3 font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Let’s Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
