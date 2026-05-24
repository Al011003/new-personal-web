"use client";
import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";
import Image from "next/image";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="bg-cream py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="fade-up text-[11px] tracking-[3px] uppercase text-ink3 mb-3">
          Work History
        </p>
        <h2
          className="fade-up font-display font-bold text-ink text-5xl md:text-6xl tracking-tight mb-14"
          style={{ lineHeight: 1.05, transitionDelay: "60ms" }}
        >
          Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className="fade-up group bg-white rounded-3xl overflow-hidden border border-border hover:border-ink transition-all duration-300 hover:shadow-lg"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]">
                {/* LEFT – visual panel (the "image" side) */}
                <div className="relative min-h-[260px] md:min-h-[340px] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover"
                  />

                  {/* optional overlay */}

                  {/* type badge */}
                  <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-ink2 text-[11px] px-3 py-1.5 rounded-full border border-white/60 z-10">
                    {exp.type}
                  </span>
                </div>
                {/* RIGHT – detail */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <p className="text-[13px] uppercase tracking-[2px] text-ink3 mb-2">
                          {exp.company}
                        </p>

                        <h4 className="text-2xl font-medium text-ink mb-1">
                          {exp.role}
                        </h4>

                        <p className="text-[14px] text-ink3">{exp.location}</p>
                      </div>
                      <span className="text-[13px] text-ink3 bg-cream px-3 py-1.5 rounded-full border border-border self-start whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-3 mb-6">
                      {exp.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-3 text-[14px] text-ink2 leading-relaxed"
                        >
                          <span className="text-ink3 mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.badges.map((b) => (
                      <span
                        key={b}
                        className="bg-cream border border-border px-3 py-1.5 rounded-full text-[12px] text-ink2 hover:bg-ink hover:text-white hover:border-ink transition-all duration-200 cursor-default"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "More coming" placeholder */}
          <div
            className="fade-up border-2 border-dashed border-border rounded-3xl p-10 text-center"
            style={{ transitionDelay: `${experience.length * 100}ms` }}
          >
            <p className="text-ink3 text-[14px]">
              More experiences coming soon · Currently open to new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
