"use client";
import { useEffect, useRef, useState } from "react";
import { skills, iconUrl } from "@/lib/data";

// ---------------------------------------------------------------------------
// OrbitRing — all positioning relative to a fixed containerSize square
// ---------------------------------------------------------------------------
function OrbitRing({
  radius,
  items,
  duration,
  reverse,
  containerSize,
}: {
  radius: number;
  items: { icon: string; label: string; angle: number }[];
  duration: number;
  reverse?: boolean;
  containerSize: number;
}) {
  const center = containerSize / 2;
  const spinAnim = reverse ? "spinReverse" : "spinOrbit";
  const counterAnim = reverse ? "counterSpinReverse" : "counterSpin";
  const nodeSize = 52;

  return (
    <div
      className="absolute inset-0"
      style={{ animation: `${spinAnim} ${duration}s linear infinite` }}
    >
      {/* Ring border */}
      <div
        className="absolute rounded-full border border-white/[0.08]"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: center - radius,
          left: center - radius,
        }}
      />
      {/* Nodes */}
      {items.map((item) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = center + radius * Math.cos(rad) - nodeSize / 2;
        const y = center + radius * Math.sin(rad) - nodeSize / 2;
        const src = iconUrl[item.icon];
        return (
          <div
            key={item.label}
            className="absolute rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center hover:bg-white/[0.15] hover:scale-110 hover:border-white/30 transition-all duration-300 group"
            style={{
              width: nodeSize,
              height: nodeSize,
              left: x,
              top: y,
              animation: `${counterAnim} ${duration}s linear infinite`,
            }}
            title={item.label}
          >
            {src ? (
              <img
                src={src}
                alt={item.label}
                className="w-6 h-6 object-contain select-none"
                draggable={false}
              />
            ) : (
              <span className="text-[11px] font-medium text-white/60 select-none">
                {item.label.slice(0, 2).toUpperCase()}
              </span>
            )}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ProficiencyBar — controlled by `visible` prop so React drives the animation
// ---------------------------------------------------------------------------
function ProficiencyBar({
  label,
  pct,
  delay,
  visible,
}: {
  label: string;
  pct: number;
  delay: string;
  visible: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-[6px]">
        <span className="text-[13px] text-white/75 font-medium">{label}</span>
        <span className="text-[11px] text-white/30 tabular-nums">{pct}%</span>
      </div>
      <div className="h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
        <div
          className="h-full rounded-full bg-white/60 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${pct}%` : "0%",
            transitionDelay: delay,
          }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Skills section
// ---------------------------------------------------------------------------
const ORBIT_SIZE = 380;
const RING1_R = 90;
const RING2_R = 158;

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            setBarsVisible(true);
          }
        }),
      { threshold: 0.15 },
    );
    sectionRef.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ring1 = skills.orbit.filter((o) => o.ring === 1);
  const ring2 = skills.orbit.filter((o) => o.ring === 2);
  const marqueeItems = [...skills.marquee, ...skills.marquee];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-ink py-24 px-6 md:px-10 overflow-hidden"
    >
      <style>{`
        @keyframes spinOrbit          { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes spinReverse        { from { transform: rotate(360deg);  } to { transform: rotate(0deg);    } }
        @keyframes counterSpin        { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }
        @keyframes counterSpinReverse { from { transform: rotate(-360deg); } to { transform: rotate(0deg);    } }
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: none; }
        @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marqueeScroll 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <p className="fade-up text-[11px] tracking-[3px] uppercase text-white/40 mb-3">
          What I Know
        </p>
        <h2
          className="fade-up font-display font-bold text-white text-5xl md:text-6xl tracking-tight mb-16"
          style={{ lineHeight: 1.05, transitionDelay: "60ms" }}
        >
          Tech Stack
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          {/* ── LEFT: Orbit ── */}
          <div
            className="fade-up flex-shrink-0 relative"
            style={{
              width: ORBIT_SIZE,
              height: ORBIT_SIZE,
              transitionDelay: "120ms",
            }}
          >
            {/* Center node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px] rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center z-10">
              <img
                src={iconUrl["python"]}
                alt="Python"
                className="w-8 h-8 object-contain"
                draggable={false}
              />
            </div>

            {/* Ring 1 — inner, forward */}
            <OrbitRing
              radius={RING1_R}
              items={ring1}
              duration={14}
              containerSize={ORBIT_SIZE}
            />

            {/* Ring 2 — outer, reverse */}
            <OrbitRing
              radius={RING2_R}
              items={ring2}
              duration={24}
              reverse
              containerSize={ORBIT_SIZE}
            />
          </div>

          {/* ── RIGHT: Proficiency + Categories ── */}
          <div
            className="fade-up flex-1 w-full flex flex-col gap-10"
            style={{ transitionDelay: "180ms" }}
          >
            <div>
              <p className="text-[11px] tracking-[3px] uppercase text-white/40 mb-5">
                Proficiency
              </p>
              <div className="flex flex-col gap-4">
                {skills.proficiencies.map((p, i) => (
                  <ProficiencyBar
                    key={p.label}
                    label={p.label}
                    pct={p.pct}
                    delay={`${i * 120}ms`}
                    visible={barsVisible}
                  />
                ))}
              </div>
            </div>

            <div className="h-px bg-white/[0.06]" />

            <div className="flex flex-col gap-7">
              {skills.categories.map((cat) => (
                <div key={cat.name}>
                  <h4 className="text-[11px] tracking-[3px] uppercase text-white/40 mb-3">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/[0.06] border border-white/[0.09] px-4 py-[7px] rounded-full text-[13px] text-white/70 hover:bg-white/[0.13] hover:text-white hover:border-white/20 cursor-default transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 relative overflow-hidden py-4 border-t border-white/[0.05]">
        <div className="marquee-track flex gap-0 whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="text-white/[0.18] text-[11px] font-medium tracking-[3px] uppercase flex-shrink-0 px-5"
            >
              {item}
              <span className="text-white/[0.08] mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
