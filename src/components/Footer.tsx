import Link from "next/link";

const serviceLinks = [
  { label: "Option Trading", href: "/services", highlight: true },
  { label: "Index Option Service", href: "/services" },
  { label: "Stock Future Service", href: "/services" },
  { label: "Stock Cash Service", href: "/services" },
  { label: "Commodity Service", href: "/services" },
  { label: "Intraday Service", href: "/services" },
];

const usefulLinks = ["Disclosures","Grievance Redressal Policy","Escalation Matrix","Investor Charter","Regulatory Information","Refund Policy"];

const socials = [
  { label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Twitter", d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
  { label: "YouTube", d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" },
  { label: "LinkedIn", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #022c22 0%, #033a30 50%, #01120f 100%)",
    }}>
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(4,120,87,0.4), rgba(184,134,11,0.3), transparent)" }} />

      {/* CTA Banner */}
      <div className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(ellipse 800px 500px at 25% 40%, rgba(4,120,87,0.22), transparent 60%)," +
            "radial-gradient(ellipse 600px 400px at 80% 60%, rgba(212,160,23,0.14), transparent 60%)",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08), transparent 65%)", filter: "blur(50px)", animation: "orb-drift 20s ease-in-out infinite" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[26px] sm:text-[34px] md:text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5">
            <span className="text-white/90">Ready to Master</span><br />
            <span className="option-highlight">Option Trading?</span>
          </h2>
          <p className="text-[14px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
            Join 15K+ traders who trust Shashwin Investors for research-backed option trading advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-3d btn-3d-gold inline-flex items-center justify-center px-8 py-[14px] text-[14px]">
              Get Started Today
            </Link>
            <a href="tel:+919743556886" className="btn-3d inline-flex items-center justify-center gap-2 px-8 py-[14px] text-[14px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.88.37 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-8 sm:py-10 bg-amber-950/30 border-t border-amber-800/20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4a017" strokeWidth="2" strokeLinecap="round" opacity="0.6"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <h3 className="text-[13px] font-bold text-[#d4a017]/80">Disclaimer</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-[11px] sm:text-[12px] text-white/35 leading-relaxed">
            <li>Investment in securities market is subject to market risk. No guaranteed profit. Past performance is not indicative of future results.</li>
            <li>Fees should only be paid to Shashwin Investors company accounts.</li>
            <li>Risk of loss in trading can be substantial. Consider whether trading is appropriate for your financial condition.</li>
            <li>Shashwin Investors shall not be held responsible for losses incurred from trading based on our recommendations.</li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="py-14 sm:py-16 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-[#047857] to-[#b8860b] flex items-center justify-center shadow-md">
                <svg width="16" height="16" viewBox="0 0 36 36" fill="none"><path d="M10 24L16 14L20 20L26 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-extrabold text-white/85">Shashwin</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase text-[#d4a017]/60">Investors</span>
              </div>
            </Link>
            <p className="text-[11px] text-[#d4a017]/70 font-bold uppercase tracking-[0.12em] mb-2">SEBI Registered Research Analyst</p>
            <p className="text-[12px] text-white/25 leading-relaxed">Research-backed <span className="text-[#d4a017]/80 font-semibold">option trading</span> advisory by SEBI-registered analysts with 18+ years of experience.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold mb-5 text-white/40 tracking-[0.15em] uppercase">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className={`text-[12px] transition-colors ${s.highlight ? "text-[#d4a017]/80 font-bold hover:text-[#d4a017]" : "text-white/25 hover:text-emerald-400/70"}`}>
                    {s.highlight && <span className="inline-block w-1 h-1 rounded-full bg-[#d4a017] mr-2 align-middle" />}
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-bold mb-5 text-white/40 tracking-[0.15em] uppercase">Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((l) => (
                <li key={l}><a href="#" className="text-[12px] text-white/25 hover:text-emerald-400/70 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold mb-5 text-white/40 tracking-[0.15em] uppercase">Contact</h4>
            <address className="not-italic space-y-3 text-[12px] text-white/25 leading-relaxed">
              <p>8th Phase, JP Nagar, Bangalore, Karnataka<br /><span className="text-white/20">Near BESCOM bus stop</span></p>
              <p><a href="mailto:support@shashwininvestors.com" className="text-emerald-400/50 hover:text-emerald-400/80 transition-colors">support@shashwininvestors.com</a></p>
              <p><a href="tel:+919743556886" className="text-emerald-400/50 hover:text-emerald-400/80 transition-colors">+91-9743556886</a></p>
            </address>
            <div className="flex gap-2 mt-5">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.06] text-white/25 hover:bg-emerald-500/15 hover:text-emerald-400/70 hover:border-emerald-500/20 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-5 border-t border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] sm:text-[11px] text-white/20">&copy; 2026 Shashwin Investors. All Rights Reserved.</p>
          <div className="flex gap-5">
            {["Disclaimer","Terms & Conditions","Privacy Policy"].map((t) => (
              <a key={t} href="#" className="text-[10px] sm:text-[11px] text-white/20 hover:text-white/40 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
