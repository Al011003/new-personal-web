'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(245,243,238,0.75)] backdrop-blur-xl border-b border-[rgba(232,229,223,0.8)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-xl font-bold text-ink tracking-tight">
          al.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink2 hover:text-ink transition-colors duration-200 font-sans"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => window.location.href = 'mailto:alfarhad2003@gmail.com'}
            className="bg-ink text-white text-sm px-5 py-2.5 rounded-full font-sans font-medium hover:bg-accent transition-all duration-200 hover:-translate-y-0.5"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(245,243,238,0.97)] backdrop-blur-xl border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-ink2 hover:text-ink font-sans"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:alfarhad2003@gmail.com"
            className="mt-2 bg-ink text-white text-sm px-5 py-3 rounded-full font-sans font-medium text-center"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}
