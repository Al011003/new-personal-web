"use client";
import { useEffect, useRef } from "react";
import { personal } from "@/lib/data";
import Image from "next/image";

const socialLinks = [
  { href: "", label: "LinkedIn", icon: "/images/icons/linkedin.svg" },
  { href: "", label: "GitHub", icon: "/images/icons/github.svg" },
  { href: "", label: "Email", icon: "/images/icons/email.svg" },
];

const currentWork = {
  logo: "/images/logo-lkpp.png",
  role: "Data Engineer",
  company: "LKPP",
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    heroRef.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-cream"
    >
      {/* ════════════════════════════════
          DESKTOP  (lg+)
      ════════════════════════════════ */}
      <div className="hidden lg:block relative min-h-screen">
        {/* Foto – center, ukuran lebih proporsional */}
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <div className="relative" style={{ width: "460px", height: "88%" }}>
            <Image
              src="/images/al.png"
              alt="Alfarhad Maulana"
              fill
              className="object-cover object-top"
              priority
            />
            {/* fade bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #F5F3EE 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* LEFT content */}
        <div className="relative z-10 h-screen flex items-center pl-16 xl:pl-24">
          <div className="w-[400px] xl:w-[440px]">
            <p
              className="fade-up font-display text-xl italic text-ink3 mb-1"
              style={{ transitionDelay: "80ms" }}
            >
              Hello, I'm
            </p>
            <h1
              className="fade-up font-display font-bold text-ink leading-[0.9] tracking-tight mb-6"
              style={{
                fontSize: "clamp(58px, 5.5vw, 80px)",
                transitionDelay: "140ms",
              }}
            >
              Alfarhad
              <br />
              Maulana
            </h1>

            <div
              className="fade-up border-l-[3px] border-accent pl-4 mb-6"
              style={{ transitionDelay: "200ms" }}
            >
              <strong className="block text-[15px] font-medium text-ink mb-1">
                {personal.tagline}
              </strong>
              <p className="text-[14px] text-ink2 leading-relaxed">
                {personal.bio}
              </p>
            </div>

            <div
              className="fade-up flex flex-wrap gap-2 mb-7"
              style={{ transitionDelay: "250ms" }}
            >
              {personal.tags.map((t) => (
                <span
                  key={t}
                  className="bg-white border border-border px-4 py-1.5 rounded-full text-[13px] text-ink2"
                >
                  {t}
                </span>
              ))}
            </div>

            <div
              className="fade-up flex flex-wrap gap-3 mb-7"
              style={{ transitionDelay: "300ms" }}
            >
              <a
                href="#projects"
                className="bg-ink text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                download
                className="bg-white text-ink border-[1.5px] border-border px-7 py-3.5 rounded-full text-[15px] hover:border-ink transition-all duration-200"
              >
                Download CV ↓
              </a>
            </div>

            <div
              className="fade-up flex gap-3"
              style={{ transitionDelay: "350ms" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={
                    s.label === "LinkedIn"
                      ? personal.linkedin
                      : s.label === "GitHub"
                        ? personal.github
                        : `mailto:${personal.email}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border-[1.5px] border-border bg-white flex items-center justify-center hover:bg-ink hover:border-ink transition-all duration-200 group"
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-4 h-4 group-hover:invert transition-all duration-200"
                    style={{ filter: "brightness(0) opacity(0.5)" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – current work card */}
        <div className="absolute right-16 xl:right-24 top-1/2 -translate-y-1/2 z-10">
          <div
            className="fade-up bg-white border border-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm"
            style={{ transitionDelay: "400ms" }}
          >
            <img
              src={currentWork.logo}
              alt={currentWork.company}
              className="w-9 h-9 object-contain flex-shrink-0"
            />
            <div>
              <p className="text-[13px] font-medium text-ink leading-tight">
                {currentWork.role}
              </p>
              <p className="text-[11px] text-ink3 mt-0.5">
                {currentWork.company}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-16 xl:left-24 flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-ink3 z-10">
          <span className="w-10 h-px bg-ink3" />
          <span>Scroll</span>
        </div>
      </div>

      {/* ════════════════════════════════
          TABLET  (md – lg)
      ════════════════════════════════ */}
      <div className="hidden md:flex lg:hidden flex-col min-h-screen">
        {/* Top: teks kiri + foto kanan, proporsi setengah-setengah */}
        <div className="flex flex-1 pt-20">
          {/* LEFT text */}
          <div className="flex-1 flex flex-col justify-center px-10 pb-8">
            <p
              className="fade-up font-display text-lg italic text-ink3 mb-1"
              style={{ transitionDelay: "80ms" }}
            >
              Hello, I'm
            </p>
            <h1
              className="fade-up font-display font-bold text-ink leading-[0.9] tracking-tight mb-5"
              style={{
                fontSize: "clamp(48px, 6vw, 68px)",
                transitionDelay: "130ms",
              }}
            >
              Alfarhad
              <br />
              Maulana
            </h1>

            <div
              className="fade-up border-l-[3px] border-accent pl-4 mb-5"
              style={{ transitionDelay: "180ms" }}
            >
              <strong className="block text-[15px] font-medium text-ink mb-1">
                {personal.tagline}
              </strong>
              <p className="text-[13px] text-ink2 leading-relaxed">
                {personal.bio}
              </p>
            </div>

            <div
              className="fade-up flex flex-wrap gap-3 mb-5"
              style={{ transitionDelay: "240ms" }}
            >
              <a
                href="#projects"
                className="bg-ink text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-accent transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                download
                className="bg-white text-ink border-[1.5px] border-border px-6 py-3 rounded-full text-[14px] hover:border-ink transition-all duration-200"
              >
                Download CV ↓
              </a>
            </div>

            <div
              className="fade-up flex gap-3"
              style={{ transitionDelay: "290ms" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={
                    s.label === "LinkedIn"
                      ? personal.linkedin
                      : s.label === "GitHub"
                        ? personal.github
                        : `mailto:${personal.email}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border-[1.5px] border-border bg-white flex items-center justify-center hover:bg-ink hover:border-ink transition-all duration-200 group"
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-4 h-4 group-hover:invert transition-all duration-200"
                    style={{ filter: "brightness(0) opacity(0.5)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT foto – cukup setengah layar, full body keliatan */}
          <div
            className="relative flex-shrink-0"
            style={{ width: "45%", minHeight: "480px" }}
          >
            <Image
              src="/images/al.png"
              alt="Alfarhad Maulana"
              fill
              className="object-cover object-top"
              priority
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{
                background:
                  "linear-gradient(to top, #F5F3EE 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Current work card */}
        <div className="flex justify-center py-5 border-t border-border">
          <div className="bg-white border border-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
            <img
              src={currentWork.logo}
              alt={currentWork.company}
              className="w-8 h-8 object-contain flex-shrink-0"
            />
            <div>
              <p className="text-[13px] font-medium text-ink leading-tight">
                {currentWork.role}
              </p>
              <p className="text-[11px] text-ink3">{currentWork.company}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          MOBILE  (< md)
      ════════════════════════════════ */}
      <div className="flex flex-col md:hidden min-h-screen">
        {/* 2. Foto */}
        <div
          className="relative w-full flex-shrink-0 mx-auto pt-16"
          style={{ height: "80vw", minHeight: "300px", maxHeight: "520px" }}
        >
          <Image
            src="/images/al.png"
            alt="Alfarhad Maulana"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-16"
            style={{
              background:
                "linear-gradient(to top, #F5F3EE 0%, transparent 100%)",
            }}
          />
        </div>
        {/* 1. Nama dulu */}
        <div className="px-6 pt-2 pb-4 text-center">
          <p
            className="fade-up font-display text-lg italic text-ink3 mb-1"
            style={{ transitionDelay: "60ms" }}
          >
            Hello, I'm
          </p>
          <h1
            className="fade-up font-display font-bold text-ink leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(52px, 14vw, 72px)",
              transitionDelay: "110ms",
            }}
          >
            Alfarhad
            <br />
            Maulana
          </h1>
        </div>

        {/* 3. Konten bawah */}
        <div className="px-6 pb-10 flex flex-col items-center text-center">
          <div
            className="fade-up border-l-[3px] border-accent pl-4 mb-5 text-left w-full max-w-sm"
            style={{ transitionDelay: "150ms" }}
          >
            <strong className="block text-[15px] font-medium text-ink mb-1">
              {personal.tagline}
            </strong>
            <p className="text-[13px] text-ink2 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Current work card */}
          <div className="bg-white border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-sm mb-5">
            <img
              src={currentWork.logo}
              alt={currentWork.company}
              className="w-7 h-7 object-contain flex-shrink-0"
            />
            <div className="text-left">
              <p className="text-[12px] font-medium text-ink leading-tight">
                {currentWork.role}
              </p>
              <p className="text-[10px] text-ink3">{currentWork.company}</p>
            </div>
          </div>

          <div
            className="fade-up flex flex-wrap gap-2 justify-center mb-5"
            style={{ transitionDelay: "200ms" }}
          >
            {personal.tags.map((t) => (
              <span
                key={t}
                className="bg-white border border-border px-3 py-1.5 rounded-full text-[12px] text-ink2"
              >
                {t}
              </span>
            ))}
          </div>

          <div
            className="fade-up flex flex-wrap gap-3 justify-center mb-5"
            style={{ transitionDelay: "250ms" }}
          >
            <a
              href="#projects"
              className="bg-ink text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-accent transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              className="bg-transparent text-ink border-[1.5px] border-border px-6 py-3 rounded-full text-[14px] hover:border-ink hover:bg-white transition-all duration-200"
            >
              Download CV ↓
            </a>
          </div>

          <div
            className="fade-up flex gap-3 justify-center"
            style={{ transitionDelay: "300ms" }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={
                  s.label === "LinkedIn"
                    ? personal.linkedin
                    : s.label === "GitHub"
                      ? personal.github
                      : `mailto:${personal.email}`
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border-[1.5px] border-border bg-white flex items-center justify-center hover:bg-ink hover:border-ink transition-all duration-200 group"
              >
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-4 h-4 group-hover:invert transition-all duration-200"
                  style={{ filter: "brightness(0) opacity(0.5)" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
