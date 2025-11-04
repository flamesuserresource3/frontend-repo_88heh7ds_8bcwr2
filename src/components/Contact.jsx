import { Mail, Camera } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-black bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-black text-3xl sm:text-4xl">Let’s Build Something Iconic</h2>
            <p className="mt-2 max-w-2xl text-black/70 font-medium">
              Available for branding, editorial, poster design, and art direction. I respond within 24 hours.
            </p>
          </div>
          <a
            href="mailto:hello@kiranoir.design?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 rounded-md border border-black bg-black px-5 py-3 text-white font-semibold shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]"
          >
            <Mail size={18} /> Email Me
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-md border border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
            <h3 className="font-extrabold text-xl">Capabilities</h3>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>Brand Identity Systems</li>
              <li>Editorial & Poster Design</li>
              <li>Art Direction & Photography</li>
              <li>Campaign Concepts</li>
            </ul>
          </div>
          <div className="rounded-md border border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
            <h3 className="font-extrabold text-xl">Awards</h3>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>2024 — AIGA Rising</li>
              <li>2023 — Type Directors Club</li>
              <li>2022 — Red Dot Concept</li>
              <li>2021 — ADC Young Guns</li>
            </ul>
          </div>
          <div className="rounded-md border border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
            <h3 className="font-extrabold text-xl">Social</h3>
            <div className="mt-3 space-y-2 text-sm font-semibold">
              <a className="underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <div className="text-black/60">@kiranoir</div>
              <a className="mt-3 inline-flex items-center gap-2 rounded border border-black px-3 py-2 font-semibold hover:bg-black hover:text-white transition-colors" href="#work">
                <Camera size={16} /> View Shots
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-black/60">© {new Date().getFullYear()} Kira Noir. All rights reserved.</p>
      </div>
    </section>
  );
}
