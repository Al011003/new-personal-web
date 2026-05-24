"use client";
import { useEffect, useRef } from "react";
import { personal } from "@/lib/data";
import Image from "next/image";

export default function Contact() {
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

  const links = [
    {
      label: "Send Email",
      sub: personal.email,
      href: `mailto:${personal.email}`,
      icon: "/images/icons/email.svg",
    },
    {
      label: "LinkedIn",
      sub: "Connect with me",
      href: personal.linkedin,
      icon: "/images/icons/linkedin.svg",
    },
    {
      label: "GitHub",
      sub: "See my code",
      href: personal.github,
      icon: "/images/icons/github.svg",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-ink py-24 px-6 md:px-10 text-center overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <p className="fade-up text-[11px] tracking-[3px] uppercase text-white/40 mb-3">
          Get In Touch
        </p>
        <h2
          className="fade-up font-display font-bold text-white text-5xl md:text-6xl tracking-tight mb-5"
          style={{ lineHeight: 1.05, transitionDelay: "60ms" }}
        >
          Let's work together.
        </h2>
        <p
          className="fade-up text-[17px] text-white/50 mb-14"
          style={{ transitionDelay: "120ms" }}
        >
          Open to full-time roles, freelance projects, or simply a conversation
          about data & backend engineering.
        </p>

        <div
          className="fade-up flex flex-col sm:flex-row justify-center gap-4 flex-wrap"
          style={{ transitionDelay: "180ms" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/[0.07] border border-white/15 px-6 py-4 rounded-2xl text-white/80 hover:bg-white hover:text-ink transition-all duration-200 group"
            >
              <Image
                src={l.icon}
                alt={l.label}
                width={22}
                height={22}
                className="invert group-hover:invert-0 transition"
              />
              <div className="text-left">
                <p className="text-[14px] font-medium leading-tight">
                  {l.label}
                </p>
                <p className="text-[12px] text-white/40 group-hover:text-ink3 transition-colors">
                  {l.sub}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
