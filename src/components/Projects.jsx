function ProjectCard({ title, tag, color }) {
  return (
    <div
      className="group relative aspect-[4/3] overflow-hidden rounded-md border border-black bg-white shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
      style={{ backgroundImage: `linear-gradient(135deg, ${color} 0%, #ffffff 100%)` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.08),transparent_40%)] mix-blend-overlay" />
      <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-black bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
        {tag}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="line-clamp-2 font-black text-xl sm:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function Projects() {
  const items = [
    { title: "NEON FRAME — Editorial Poster Series", tag: "Poster", color: "#ffe08a" },
    { title: "MONO MARK — Identity System", tag: "Branding", color: "#b1f0ff" },
    { title: "VOID CAPTURE — Photo Art Direction", tag: "Photography", color: "#ffd1e6" },
    { title: "URBAN TYPE — Typography Explorations", tag: "Type", color: "#e4ffb5" },
    { title: "SHIFT FEST — Event Campaign", tag: "Campaign", color: "#d6d2ff" },
    { title: "PIXEL NORTH — Digital Cover Art", tag: "Cover", color: "#ffc4a3" },
  ];

  return (
    <section id="work" className="relative border-b border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-black text-3xl sm:text-4xl">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-block underline font-semibold">Get a quote</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
