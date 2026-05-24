"use client";
import { useEffect, useRef, useState } from "react";
import { education } from "@/lib/data";
import Image from "next/image";

const achievementIcons: Record<string, string> = {
  "Summa Cumlaude": "/images/icons/trophy.svg",
  "IEEE Published": "/images/icons/publication.svg",
  "GPA 3.97 / 4.00": "/images/icons/graduation.svg",
  Innovillage: "/images/icons/medal.svg",
  "Poster Design": "/images/icons/star.svg",
  "English B2": "/images/icons/globe.svg",
};

// Animate a number from 0 to target over `duration` ms
function useCountUp(target: number, duration = 1400, started = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((ease * target).toFixed(2)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return value;
}

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  const gpaTarget = parseFloat(education.gpa); // e.g. 3.97
  const gpaValue = useCountUp(gpaTarget, 1600, counterStarted);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            setCounterStarted(true);
          }
        }),
      { threshold: 0.05 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="fade-up text-[11px] tracking-[3px] uppercase text-ink3 mb-3">
          Academic Background
        </p>
        <h2
          className="fade-up font-display font-bold text-ink text-5xl md:text-6xl tracking-tight mb-14"
          style={{ lineHeight: 1.05, transitionDelay: "60ms" }}
        >
          Education
        </h2>

        {/* Main layout */}
        <div
          className="fade-up flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
          style={{ transitionDelay: "120ms" }}
        >
          {/* LEFT – photo + GPA counter */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full lg:w-auto">
            <div
              className="relative overflow-hidden flex items-end justify-center bg-cream"
              style={{
                width: "220px",
                height: "280px",
                borderRadius: "110px 110px 90px 90px",
              }}
            >
              <Image
                src="/images/wisuda.jpeg"
                alt="Graduation photo"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* GPA counter */}
            <div className="text-center">
              <span
                className="font-display font-bold text-accent tabular-nums"
                style={{ fontSize: "42px", lineHeight: 1 }}
              >
                {gpaValue.toFixed(2)}
              </span>
              <span className="text-[15px] text-ink3 ml-1">
                / {education.maxGpa}
              </span>
              <p className="text-[11px] tracking-[2px] uppercase text-ink3 mt-1">
                GPA
              </p>
            </div>
          </div>

          {/* RIGHT – info */}
          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <span className="text-[11px] tracking-[3px] uppercase text-ink3">
                {education.period}
              </span>
              <h3
                className="font-display font-bold text-ink mt-2 mb-1"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  lineHeight: 1.1,
                }}
              >
                {education.university}
              </h3>
              <p className="text-[15px] text-ink2">{education.campus}</p>
              <p className="text-[13px] text-ink3 mt-0.5">
                Bachelor's Degree · Information Technology
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 border border-amber-200 bg-amber-50 text-amber-700 px-4 py-2.5 rounded-full mb-8">
              <img
                src="/images/icons/trophy.svg"
                alt="Trophy"
                className="w-4 h-4"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(400%) hue-rotate(15deg)",
                }}
              />
              <span className="text-[13px] font-medium">
                Summa Cumlaude — Graduated with Distinction
              </span>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-cream border border-border mb-8">
              <img
                src="/images/icons/publication.svg"
                alt="Publication"
                className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-50"
                style={{ filter: "brightness(0)" }}
              />
              <div>
                <p className="text-[10px] tracking-[2px] uppercase text-accent font-medium mb-1">
                  {education.publication.role} · {education.publication.venue}
                </p>
                <p className="text-[13px] text-ink2 leading-relaxed line-clamp-2">
                  {education.publication.title}
                </p>
              </div>
            </div>

            <p className="text-[11px] tracking-[2px] uppercase text-ink3 mb-4">
              Highlights
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {education.achievements.map((a) => (
                <div
                  key={a.label}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-cream border border-border hover:border-ink/20 transition-colors duration-200"
                >
                  <img
                    src={achievementIcons[a.label] || "/images/icons/star.svg"}
                    alt={a.label}
                    className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-40"
                    style={{ filter: "brightness(0)" }}
                  />
                  <div>
                    <p className="text-[12px] font-medium text-ink leading-tight">
                      {a.label}
                    </p>
                    <p className="text-[11px] text-ink3 mt-0.5 leading-snug">
                      {a.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
