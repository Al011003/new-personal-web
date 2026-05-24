"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

// ── Repo type detection ──────────────────────────────────────────────────────

type RepoType =
  | "github"
  | "spreadsheet"
  | "figma"
  | "notion"
  | "docs"
  | "slides"
  | "external";

interface RepoStyle {
  type: RepoType;
  bg: string;
  hoverBg: string;
  label: string;
}

function detectRepoType(label: string): RepoStyle {
  const l = label.toLowerCase();

  if (l.includes("spreadsheet") || l.includes("sheet") || l.includes("excel")) {
    return {
      type: "spreadsheet",
      bg: "bg-[#1D6F42]",
      hoverBg: "hover:bg-[#165a35]",
      label,
    };
  }
  if (l.includes("figma") || l.includes("design")) {
    return {
      type: "figma",
      bg: "bg-[#7B61FF]",
      hoverBg: "hover:bg-[#6a50e8]",
      label,
    };
  }
  if (l.includes("notion")) {
    return {
      type: "notion",
      bg: "bg-[#2D2D2D]",
      hoverBg: "hover:bg-[#1a1a1a]",
      label,
    };
  }
  if (l.includes("docs") || l.includes("document")) {
    return {
      type: "docs",
      bg: "bg-[#1A73E8]",
      hoverBg: "hover:bg-[#1558b0]",
      label,
    };
  }
  if (
    l.includes("slides") ||
    l.includes("presentation") ||
    l.includes("deck")
  ) {
    return {
      type: "slides",
      bg: "bg-[#F4511E]",
      hoverBg: "hover:bg-[#d13e0f]",
      label,
    };
  }
  if (
    l.includes("demo") ||
    l.includes("live") ||
    l.includes("website") ||
    l.includes("link")
  ) {
    return {
      type: "external",
      bg: "bg-[#0F766E]",
      hoverBg: "hover:bg-[#0c5e57]",
      label,
    };
  }
  // default: GitHub
  return {
    type: "github",
    bg: "bg-ink",
    hoverBg: "hover:bg-ink/80",
    label,
  };
}

// ── Icons ────────────────────────────────────────────────────────────────────

function RepoIcon({ type }: { type: RepoType }) {
  switch (type) {
    case "spreadsheet":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 opacity-80"
        >
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 8h-5v-2h5v2zm0-4h-5v-2h5v2zm0-4h-5V7h5v2z" />
        </svg>
      );
    case "figma":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 opacity-80"
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm-5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm5 3.5H8.5a3.5 3.5 0 1 0 0 7H12v-7zm2 0v7h3.5a3.5 3.5 0 1 0 0-7H14z" />
        </svg>
      );
    case "notion":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 opacity-80"
        >
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.887l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
        </svg>
      );
    case "docs":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 opacity-80"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5zM8 15h8v1H8zm0-3h8v1H8zm0-3h5v1H8z" />
        </svg>
      );
    case "slides":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 opacity-80"
        >
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14zM8 10h8v2H8zm0 4h5v2H8z" />
        </svg>
      );
    case "external":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 opacity-80"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "github":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
  }
}

// ── Shared arrow icon ────────────────────────────────────────────────────────

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className ?? "w-3.5 h-3.5 opacity-50"}
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

// ── Repo button (shared between mobile & desktop) ────────────────────────────

function RepoButton({
  url,
  label,
  repoCount,
  className,
  arrowClassName,
}: {
  url: string;
  label: string;
  repoCount: number;
  className?: string;
  arrowClassName?: string;
}) {
  const style = detectRepoType(label);
  const displayLabel =
    repoCount > 1 ? label : style.type === "github" ? "View on GitHub" : label;

  const baseClass = [
    "flex items-center justify-between text-white rounded-xl px-5 py-3.5 transition-all duration-200",
    style.bg,
    style.hoverBg,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
    >
      <div className="flex items-center gap-3">
        <RepoIcon type={style.type} />
        <span className="text-[13px] font-medium">{displayLabel}</span>
      </div>
      <ArrowIcon className={arrowClassName} />
    </a>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const p = projects.find((x) => x.id === params.id);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-ink3 text-sm mb-4">Project not found</p>
          <Link href="/#projects" className="text-ink underline text-sm">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const idx = projects.findIndex((x) => x.id === p.id);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <div ref={ref} className="min-h-screen bg-white">
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden">
        <div className="px-5 pt-6 pb-5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-ink3 text-[12px] mb-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to projects
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {p.badges.map((b) => (
              <span
                key={b}
                className="bg-cream border border-border text-ink2 text-[10px] font-medium px-2.5 py-0.5 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>

          <h1 className="font-display font-bold text-ink text-[28px] tracking-tight leading-tight mb-1">
            {p.title}
          </h1>
          <p className="text-ink3 text-[12px]">
            {p.role} · {p.period}
          </p>
        </div>

        <div
          className="relative w-full"
          style={{ height: "220px", background: p.bg }}
        >
          {p.image ? (
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl select-none">
              {p.emoji}
            </div>
          )}
        </div>

        <div className="px-5 py-8 flex flex-col gap-8">
          <div className="fade-up">
            <p className="text-[10px] tracking-[3px] uppercase text-ink3 mb-3">
              Overview
            </p>
            <p className="text-[15px] text-ink2 leading-[1.85]">{p.desc}</p>
          </div>

          <div className="fade-up" style={{ transitionDelay: "60ms" }}>
            <p className="text-[10px] tracking-[3px] uppercase text-ink3 mb-4">
              Key Highlights
            </p>
            <div className="flex flex-col gap-3">
              {p.highlights.map((h, i) => (
                <div key={h} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cream border border-border flex items-center justify-center mt-0.5">
                    <span className="text-[10px] font-semibold text-ink3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[13px] text-ink2 leading-relaxed pt-0.5">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Repo buttons — mobile */}
          {p.repo?.map((r) => (
            <RepoButton
              key={r.url}
              url={r.url}
              label={r.label ?? "View on GitHub"}
              repoCount={p.repo!.length}
            />
          ))}

          <div className="pt-6 border-t border-border flex items-center justify-between">
            <Link href="/#projects" className="text-[12px] text-ink3">
              ← All projects
            </Link>
            <div className="flex gap-2">
              {prev && (
                <Link
                  href={`/projects/${prev.id}`}
                  className="text-[11px] text-ink3 border border-border rounded-full px-3 py-1.5"
                >
                  ← Prev
                </Link>
              )}
              {next && (
                <Link
                  href={`/projects/${next.id}`}
                  className="text-[11px] text-ink3 border border-border rounded-full px-3 py-1.5"
                >
                  Next →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-10 pt-10 pb-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-ink3 text-[12px] hover:text-ink transition-colors duration-200 mb-10 block"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5 inline"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to projects
          </Link>

          <div className="grid grid-cols-2 gap-12 items-start mb-16">
            {/* Left: image */}
            <div
              className="w-full rounded-2xl overflow-hidden flex-shrink-0"
              style={{ height: "460px", background: p.bg }}
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[80px] select-none">
                  {p.emoji}
                </div>
              )}
            </div>

            {/* Right: meta + repo buttons */}
            <div className="flex flex-col gap-6 pt-2">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="bg-cream border border-border text-ink2 text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h1 className="font-display font-bold text-ink text-4xl tracking-tight leading-tight mb-2">
                  {p.title}
                </h1>
                <p className="text-ink3 text-[13px] mb-6">
                  {p.role} · {p.period}
                </p>
                <p className="text-[15px] text-ink2 leading-[1.9]">{p.desc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cream rounded-2xl p-4">
                  <p className="text-[10px] tracking-[3px] uppercase text-ink3 mb-1">
                    Role
                  </p>
                  <p className="text-[13px] font-medium text-ink">{p.role}</p>
                </div>
                <div className="bg-cream rounded-2xl p-4">
                  <p className="text-[10px] tracking-[3px] uppercase text-ink3 mb-1">
                    Period
                  </p>
                  <p className="text-[13px] font-medium text-ink">{p.period}</p>
                </div>
              </div>

              {/* Repo buttons — desktop */}
              <div className="flex flex-col gap-2">
                {p.repo?.map((r) => (
                  <RepoButton
                    key={r.url}
                    url={r.url}
                    label={r.label ?? "View on GitHub"}
                    repoCount={p.repo!.length}
                    arrowClassName="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                    className="group"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="fade-up border-t border-border pt-12">
            <p className="text-[11px] tracking-[3px] uppercase text-ink3 mb-6">
              Key Highlights
            </p>
            <div className="grid grid-cols-2 gap-4">
              {p.highlights.map((h, i) => (
                <div
                  key={h}
                  className="flex items-start gap-4 bg-cream rounded-2xl p-5"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center mt-0.5">
                    <span className="text-[11px] font-semibold text-ink3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[13px] text-ink2 leading-relaxed pt-0.5">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="fade-up mt-12 pt-8 border-t border-border flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[13px] text-ink3 hover:text-ink transition-colors duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to all projects
            </Link>
            <div className="flex items-center gap-2">
              {prev && (
                <Link
                  href={`/projects/${prev.id}`}
                  className="text-[12px] text-ink3 hover:text-ink border border-border rounded-full px-4 py-1.5 transition-colors duration-200"
                >
                  ← {prev.title.split(" ").slice(0, 2).join(" ")}
                </Link>
              )}
              {next && (
                <Link
                  href={`/projects/${next.id}`}
                  className="text-[12px] text-ink3 hover:text-ink border border-border rounded-full px-4 py-1.5 transition-colors duration-200"
                >
                  {next.title.split(" ").slice(0, 2).join(" ")} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
