"use client";
import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/data";

const ITEMS = [...projects, ...projects];
const CARD_WIDTH = 260;
const CARD_GAP = 16;
const HALF = projects.length * (CARD_WIDTH + CARD_GAP);
const IDLE_STEP = 0.35;
const DRAG_DECEL = 0.92;

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0 flex flex-col cursor-pointer"
      style={{ width: `${CARD_WIDTH}px` }}
      data-href={`/projects/${p.id}`}
    >
      <div
        className="relative w-full overflow-hidden flex-shrink-0"
        style={{ height: "160px", background: p.bg }}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl select-none transition-transform duration-500 group-hover:scale-110">
            {p.emoji}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-[13px] font-semibold text-ink leading-snug">
          {p.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {p.badges.slice(0, 4).map((b) => (
            <span
              key={b}
              className="bg-cream border border-border px-2 py-0.5 rounded-full text-[10px] text-ink2 font-medium"
            >
              {b}
            </span>
          ))}
          {p.badges.length > 4 && (
            <span className="bg-cream border border-border px-2 py-0.5 rounded-full text-[10px] text-ink3">
              +{p.badges.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);

  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const velocityRef = useRef(0);
  const lastDragX = useRef(0);
  // track elemen card yang di-pointer-down
  const pointerTargetHref = useRef<string | null>(null);

  const clamp = (p: number) => {
    let v = p % HALF;
    if (v < 0) v += HALF;
    return v;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.05 },
    );
    sectionRef.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animate = useCallback(() => {
    if (trackRef.current) {
      if (isDragging.current) {
        // drag handler updates posRef directly
      } else if (Math.abs(velocityRef.current) > 0.1) {
        posRef.current = clamp(posRef.current + velocityRef.current);
        velocityRef.current *= DRAG_DECEL;
      } else if (!pausedRef.current) {
        posRef.current = clamp(posRef.current + IDLE_STEP);
      }
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button === 2) return;
    isDragging.current = true;
    hasDragged.current = false;
    velocityRef.current = 0;
    dragStartX.current = e.clientX;
    lastDragX.current = e.clientX;
    dragStartPos.current = posRef.current;
    wrapperRef.current?.setPointerCapture(e.pointerId);
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grabbing";

    // simpan href card yang di-klik
    const card = (e.target as HTMLElement).closest("[data-href]");
    pointerTargetHref.current = card?.getAttribute("data-href") ?? null;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 4) hasDragged.current = true;
    velocityRef.current = lastDragX.current - e.clientX;
    lastDragX.current = e.clientX;
    posRef.current = clamp(dragStartPos.current - dx);
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      wrapperRef.current?.releasePointerCapture(e.pointerId);
      if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";

      // kalau tidak ada drag → navigasi ke card yang di-klik
      if (!hasDragged.current && pointerTargetHref.current) {
        router.push(pointerTargetHref.current);
      }
      pointerTargetHref.current = null;
    },
    [router],
  );

  const nudge = (dir: "left" | "right") => {
    velocityRef.current = 0;
    posRef.current = clamp(posRef.current + (dir === "right" ? 280 : -280));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-cream py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="fade-up text-[11px] tracking-[3px] uppercase text-ink3 mb-3">
          My Work
        </p>
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2
            className="fade-up font-display font-bold text-ink text-5xl md:text-6xl tracking-tight"
            style={{ lineHeight: 1.05, transitionDelay: "60ms" }}
          >
            Featured Projects
          </h2>
          <div
            className="fade-up hidden md:flex items-center gap-2"
            style={{ transitionDelay: "100ms" }}
          >
            <button
              onClick={() => nudge("left")}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-ink hover:border-ink hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => nudge("right")}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-ink hover:border-ink hover:text-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Drag wrapper */}
      <div
        ref={wrapperRef}
        className="relative select-none"
        style={{ cursor: "grab" }}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
          if (isDragging.current) {
            isDragging.current = false;
            if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";
          }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--color-cream, #f5f3ee), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--color-cream, #f5f3ee), transparent)",
          }}
        />

        <div className="overflow-hidden px-6 md:px-10 pb-4">
          <div
            ref={trackRef}
            className="flex items-stretch will-change-transform"
            style={{ gap: `${CARD_GAP}px` }}
          >
            {ITEMS.map((p, i) => (
              <ProjectCard key={`${p.id}-${i}`} p={p} />
            ))}
          </div>
        </div>
      </div>

      <p className="md:hidden text-center text-[11px] tracking-[2px] uppercase text-ink3 mt-4 px-6">
        Drag or swipe to explore →
      </p>
    </section>
  );
}
