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
        background: scrolled ? "rgba(5,7,16,0.92)" : "rgba(5,7,16,0.5)",
        backdropFilter: "blur(24px) saturate(1.3)",
        WebkitBackdropFilter: "blur(24px) saturate(1.3)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group mr-auto lg:mr-0">
          <div className="relative w-9 h-9 rounded-[10px] overflow-hidden shadow-lg shadow-sw-brand/10 group-hover:shadow-sw-brand/20 transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-sw-brand to-sw-accent" />
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="relative z-10">
              <path d="M10 24L16 14L20 20L26 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-white">Shashwin</span>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sw-brand-light/60">Investors</span>
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
                        ? "text-white bg-white/[0.06]"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sw-accent shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="tel:+917032048807"
          className="hidden lg:inline-flex items-center gap-2 ml-auto px-5 py-2 text-[12px] font-bold rounded-full text-white/90 transition-all duration-250 hover:text-white border border-white/[0.06] hover:border-sw-brand/30 hover:bg-sw-brand/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
          +91-7032048807
        </a>

        {/* Burger */}
        <button
          className="lg:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[4px] border border-white/[0.06] bg-white/[0.02]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[5.5px] rotate-45 bg-sw-accent" : "bg-white/60"}`} />
          <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : "bg-white/60"}`} />
          <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[5.5px] -rotate-45 bg-sw-accent" : "bg-white/60"}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-[64px] left-0 right-0 bottom-0 z-[999] transition-all duration-400 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ background: "rgba(5,7,16,0.98)", backdropFilter: "blur(32px)" }}
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
                      active ? "text-white bg-white/[0.04]" : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-sw-accent shadow-[0_0_8px_rgba(245,158,11,0.6)]" />}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pb-8 space-y-3">
            <a href="tel:+917032048807" className="flex items-center justify-center gap-2 w-full py-4 text-[15px] font-bold rounded-2xl bg-gradient-to-r from-sw-brand to-sw-brand-light/80 text-white shadow-lg shadow-sw-brand/20">
              Call: +91-7032048807
            </a>
            <a href="https://wa.me/917032048807?text=Hi%2C%20I%20am%20interested%20in%20your%20advisory." target="_blank" rel="noopener noreferrer"
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
