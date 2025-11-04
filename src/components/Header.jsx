import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-black tracking-tight text-2xl">KIRA NOIR</a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#work" className="font-semibold hover:underline">Work</a>
            <a href="#about" className="font-semibold hover:underline">About</a>
            <a href="#contact" className="font-semibold hover:underline">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-black bg-black px-4 py-2 text-white font-semibold shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]">
            Hire Me <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
