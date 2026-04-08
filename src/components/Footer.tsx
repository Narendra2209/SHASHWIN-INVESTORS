import Link from "next/link";

const serviceLinks = [
  { label: "Index Option Service", href: "/services" },
  { label: "Stock Option Service", href: "/services" },
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
    <footer className="relative bg-sw-surface overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* CTA Banner */}
      <div className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sw-brand/[0.03] via-transparent to-sw-accent/[0.02]" />
        <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[26px] sm:text-[34px] md:text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5">
            <span className="text-white/90">Ready to</span>{" "}
            <span className="text-sw-accent">Elevate</span>{" "}
            <span className="text-white/40">Your Trading?</span>
          </h2>
          <p className="text-[14px] text-white/30 mb-10 max-w-md mx-auto leading-relaxed">
            Join hundreds of traders who trust Shashwin Investors for research-backed insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-cta inline-flex items-center justify-center px-8 py-[14px] text-[14px] font-extrabold transition-all">
              Get Started Today
            </Link>
            <a href="tel:+917032048807" className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-[14px] text-[14px] font-bold transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.88.37 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-8 sm:py-10 bg-sw-disclaimer-bg border-t border-sw-disclaimer-border/20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <h3 className="text-[13px] font-bold text-sw-disclaimer-heading/70">Disclaimer</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-[11px] sm:text-[12px] text-sw-disclaimer-text/60 leading-relaxed">
            <li>Investment in securities market is subject to market risk. No guaranteed profit. Past performance is not indicative of future results.</li>
            <li>Fees should only be paid to Shashwin Investors company accounts.</li>
            <li>Risk of loss in trading can be substantial. Consider whether trading is appropriate for your financial condition.</li>
            <li>Shashwin Investors shall not be held responsible for losses incurred from trading based on our recommendations.</li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="py-14 sm:py-16 border-t border-white/[0.03]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-sw-brand to-sw-accent flex items-center justify-center shadow-md">
                <svg width="16" height="16" viewBox="0 0 36 36" fill="none"><path d="M10 24L16 14L20 20L26 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-extrabold text-white/80">Shashwin</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase text-white/20">Investors</span>
              </div>
            </Link>
            <p className="text-[11px] text-white/20 mb-1">SEBI Reg: <span className="text-sw-brand-light/30 font-semibold">INH000XXXXXX</span></p>
            <p className="text-[12px] text-white/20 leading-relaxed">Research-backed stock market advisory by a SEBI-registered research analyst.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold mb-5 text-white/30 tracking-[0.15em] uppercase">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}><Link href={s.href} className="text-[12px] text-white/20 hover:text-white/50 transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-bold mb-5 text-white/30 tracking-[0.15em] uppercase">Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((l) => (
                <li key={l}><a href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold mb-5 text-white/30 tracking-[0.15em] uppercase">Contact</h4>
            <address className="not-italic space-y-3 text-[12px] text-white/20 leading-relaxed">
              <p>A/221, 1st Floor, Shiv Sai Co-op Housing Society, Kurla West, Mumbai, MH 400070</p>
              <p><a href="mailto:support@shashwininvestors.com" className="text-sw-brand-light/30 hover:text-sw-brand-light/60 transition-colors">support@shashwininvestors.com</a></p>
              <p><a href="tel:+917032048807" className="text-sw-brand-light/30 hover:text-sw-brand-light/60 transition-colors">+91-7032048807</a></p>
            </address>
            <div className="flex gap-2 mt-5">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/[0.04] text-white/20 hover:bg-sw-brand/10 hover:text-white/50 hover:border-sw-brand/15 transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-5 border-t border-white/[0.03]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] sm:text-[11px] text-white/15">&copy; 2026 Shashwin Investors. All Rights Reserved.</p>
          <div className="flex gap-5">
            {["Disclaimer","Terms & Conditions","Privacy Policy"].map((t) => (
              <a key={t} href="#" className="text-[10px] sm:text-[11px] text-white/15 hover:text-white/30 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
