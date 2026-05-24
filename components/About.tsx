"use client";
import { useEffect, useRef } from "react";
import { personal } from "@/lib/data";

const values = [
  {
    icon: "✦",
    title: "Problem First",
    desc: "I begin by thoroughly understanding the problem before writing a single line of code.",
  },
  {
    icon: "◈",
    title: "User Empathy",
    desc: "I build things people genuinely want to use — not just what looks good in a mockup.",
  },
  {
    icon: "⌥",
    title: "Clean Code",
    desc: "Readable, maintainable code is far more valuable than code that simply runs.",
  },
  {
    icon: "▸",
    title: "Ship Fast",
    desc: "Done beats perfect. I iterate based on real feedback rather than assumptions.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="fade-up text-[11px] tracking-[3px] uppercase text-ink3 mb-3">
          Who I Am
        </p>
        <h2
          className="fade-up font-display font-bold text-ink text-5xl md:text-6xl tracking-tight mb-8"
          style={{ lineHeight: 1.05, transitionDelay: "60ms" }}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Bio ── */}
          <div className="fade-up" style={{ transitionDelay: "120ms" }}>
            <p className="text-[16px] text-ink2 leading-[1.85] mb-5">
              {personal.bioLong}
            </p>
            <p className="text-[16px] text-ink2 leading-[1.85]">
              {personal.bioLong2}
            </p>
          </div>

          {/* ── Right: Values Grid ── */}
          <div
            className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={{ transitionDelay: "200ms" }}
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group bg-cream rounded-2xl p-6 flex flex-col gap-3 hover:bg-ink transition-colors duration-300"
                style={{ transitionDelay: `${220 + i * 60}ms` }}
              >
                <span className="text-[22px] text-ink3 group-hover:text-white/40 transition-colors duration-300 select-none leading-none">
                  {v.icon}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink group-hover:text-white transition-colors duration-300 mb-1">
                    {v.title}
                  </p>
                  <p className="text-[13px] text-ink3 group-hover:text-white/60 leading-[1.65] transition-colors duration-300">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
