"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    const v = !menuOpen;
    setMenuOpen(v);
    document.body.style.overflow = v ? "hidden" : "";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled ? "h-[64px]" : "h-[72px]"
      }`}
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(15,23,42,0.06)",
        boxShadow: scrolled ? "0 4px 24px -6px rgba(4,120,87,0.15), 0 0 0 1px rgba(4,120,87,0.04) inset" : "0 1px 0 rgba(15,23,42,0.04)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group mr-auto lg:mr-0">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-emerald-900/15 group-hover:shadow-emerald-900/30 transition-all duration-400 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#b8860b]" />
            <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)" }} />
            <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="relative z-10">
              <path d="M10 24L16 14L20 20L26 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[16px] font-extrabold tracking-tight bg-gradient-to-r from-[#0f172a] to-[#047857] bg-clip-text text-transparent">Shashwin</span>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8860b] mt-0.5">Investors</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex mx-auto" aria-label="Main navigation">
          <ul className="flex gap-0.5">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-250 tracking-tight ${
                      active
                        ? "text-[#047857] bg-emerald-50"
                        : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b8860b] shadow-[0_0_6px_rgba(184,134,11,0.5)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="tel:+919743556886"
          className="hidden lg:inline-flex items-center gap-2 ml-auto px-5 py-2.5 text-[12px] font-bold rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #064e3b, #047857, #10b981)",
            boxShadow: "0 4px 14px -2px rgba(4,120,87,0.35), 0 0 0 1px rgba(16,185,129,0.2) inset",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          +91-9743556886
        </a>

        {/* Burger */}
        <button
          className="lg:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[4px] border border-slate-200 bg-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[5.5px] rotate-45 bg-[#b8860b]" : "bg-slate-500"}`} />
          <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : "bg-slate-500"}`} />
          <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[5.5px] -rotate-45 bg-[#b8860b]" : "bg-slate-500"}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-[64px] left-0 right-0 bottom-0 z-[999] transition-all duration-400 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(32px)" }}
      >
        <nav className="flex flex-col h-full p-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-0.5 mt-2">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex items-center gap-3 text-[17px] font-semibold px-5 py-4 rounded-2xl transition-all tracking-tight ${
                      active ? "text-[#047857] bg-emerald-50" : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50"
                    }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b] shadow-[0_0_6px_rgba(184,134,11,0.5)]" />}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pb-8 space-y-3">
            <a href="tel:+919743556886" className="flex items-center justify-center gap-2 w-full py-4 text-[15px] font-bold rounded-2xl bg-gradient-to-r from-[#047857] to-[#10b981] text-white shadow-lg shadow-emerald-900/15">
              Call: +91-9743556886
            </a>
            <a href="https://wa.me/919743556886?text=Hi%2C%20I%20am%20interested%20in%20your%20advisory." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 text-[15px] font-bold rounded-2xl text-white"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
