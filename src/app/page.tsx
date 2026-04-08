import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const stats = [
  { value: "5+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "1200+", label: "Happy Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
  { value: "95%", label: "Accuracy Rate", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { value: "24/7", label: "Live Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
];

const services = [
  { title: "Equity Cash", desc: "Research-driven equity cash recommendations for intraday and delivery trading.", color: "#6366f1", icon: "M3 3v18h18M9 17V9m4 8V5m4 12v-4" },
  { title: "Futures Trading", desc: "Directional futures strategies with clear entry, stop-loss and targets.", color: "#f59e0b", icon: "M13 7l5 5-5 5M6 12h12" },
  { title: "Options Advisory", desc: "Data-driven options strategies with defined risk parameters.", color: "#ec4899", icon: "M12 2L2 7l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5" },
  { title: "MCX Commodities", desc: "Gold, silver, crude oil advisory with risk-first position sizing.", color: "#a855f7", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
];

const trust = [
  { title: "SEBI Registered", desc: "Fully compliant with all SEBI regulations and investor protection guidelines.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Real-Time Alerts", desc: "Instant trading alerts via WhatsApp, SMS and call — never miss a move.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Risk-First Approach", desc: "Every trade has defined stop-loss and position sizing to protect capital.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { title: "Expert Analysts", desc: "Experienced SEBI-certified research team with years of market expertise.", icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function HomePage() {
  return (
    <>
      {/* =============== HERO =============== */}
      <section className="relative overflow-hidden pt-[72px]">
        {/* BG Layers */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 18% 25%, rgba(99,102,241,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 75%, rgba(245,158,11,0.06) 0%, transparent 45%), #050710",
        }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
        {/* Floating accents */}
        <div className="absolute top-40 left-[6%] w-28 h-28 rounded-full border border-sw-brand/[0.06]" style={{ animation: "float 8s ease-in-out infinite" }} />
        <div className="absolute top-60 right-[8%] w-16 h-16 rounded-2xl border border-sw-accent/[0.06] rotate-12" style={{ animation: "float-slow 10s ease-in-out infinite 2s" }} />
        <div className="absolute bottom-40 left-[15%] w-2 h-2 rounded-full bg-sw-brand/20" style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />
        <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 rounded-full bg-sw-accent/25" style={{ animation: "glow-pulse 4s ease-in-out infinite 1s" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sw-brand/[0.12] bg-sw-brand/[0.04] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">SEBI-Registered Research Analyst</span>
              </div>

              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[58px] font-black leading-[1.04] tracking-[-0.03em] mb-7">
                <span className="text-white/90">Smart Trading</span>
                <br />
                <span className="text-white/90">Starts With </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-sw-accent via-sw-accent-light to-sw-accent bg-clip-text text-transparent">Expert Research</span>
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-sw-accent/40 via-sw-accent/20 to-transparent rounded-full" />
                </span>
              </h1>

              <p className="text-[15px] sm:text-[17px] md:text-[19px] text-white/40 mb-10 max-w-[520px] leading-relaxed font-normal">
                Research-driven Bank Nifty intraday &amp; positional strategies with clear entry, stop-loss &amp; exit logic.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/contact" className="btn-cta inline-flex items-center justify-center gap-2.5 px-8 py-[14px] text-[14px] font-extrabold transition-all">
                  Get Started
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/services" className="btn-outline inline-flex items-center justify-center px-8 py-[14px] text-[14px] transition-all">
                  Our Services
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-sw-bg flex items-center justify-center text-[9px] font-bold"
                      style={{ background: `linear-gradient(135deg, ${['#6366f1','#f59e0b','#ec4899','#14b8a6'][i]}, ${['#818cf8','#fbbf24','#f472b6','#2dd4bf'][i]})` }}>
                      {['SK','AR','PM','VK'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white/60 leading-tight">Trusted by 1200+ traders</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#f59e0b"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    <span className="text-[10px] text-white/30 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass-card p-7 sm:p-9 relative">
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-sw-brand/30 to-transparent rounded-full" />
              <div className="flex items-center gap-4 mb-7 mt-1">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sw-accent/15 to-sw-accent/5 border border-sw-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.88.37 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h2 className="text-[17px] font-bold tracking-tight text-white/90">Free Consultation</h2>
                  <p className="text-[12px] text-white/30 font-medium">Our analyst will call you back</p>
                </div>
              </div>
              <LeadForm />
              <p className="text-[11px] text-white/20 mt-5 text-center">
                No spam &bull; No sharing &bull; SEBI compliant
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-20 sm:mt-28">
            {stats.map((s) => (
              <div key={s.label} className="glass-card py-7 sm:py-9 px-6 text-center group hover:border-white/[0.06] transition-all">
                <div className="w-10 h-10 rounded-xl bg-sw-brand/[0.06] flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                </div>
                <p className="text-[28px] sm:text-[36px] font-black tracking-tight bg-gradient-to-b from-white/90 to-white/50 bg-clip-text text-transparent mb-1">{s.value}</p>
                <p className="text-[12px] sm:text-[13px] text-white/30 font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== SERVICES PREVIEW =============== */}
      <section className="py-20 sm:py-28 bg-sw-surface section-glow relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sw-brand/[0.02] blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-sw-brand/[0.06] text-white/40 border border-sw-brand/[0.08] mb-5">Services</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
                <span className="text-white/90">Advisory Across</span><br />
                <span className="text-white/40">All Market Segments</span>
              </h2>
            </div>
            <Link href="/services" className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-[13px] font-bold shrink-0 self-start lg:self-auto">
              View All
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {services.map((s) => (
              <article key={s.title} className="glass-card relative overflow-hidden group hover:-translate-y-1 transition-all duration-400">
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-80 transition-opacity" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                <div className="p-7 sm:p-9">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-105" style={{ background: `${s.color}08`, borderColor: `${s.color}12` }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                  </div>
                  <h3 className="text-[17px] font-bold tracking-tight mb-2.5 text-white/85">{s.title}</h3>
                  <p className="text-[13px] text-white/35 leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =============== TRUST / WHY US =============== */}
      <section className="py-20 sm:py-28 bg-sw-bg section-glow relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sw-brand/[0.02] blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-sw-accent/[0.06] text-white/40 border border-sw-accent/[0.08] mb-5">Why Choose Us</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
              <span className="text-white/90">Trusted by</span>{" "}
              <span className="text-sw-accent">Traders</span>{" "}
              <span className="text-white/40">Across India</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {trust.map((r, i) => (
              <div key={r.title} className="glass-card p-7 sm:p-9 flex gap-6 items-start group hover:border-white/[0.06] transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                  style={{ background: `${['#6366f1','#f59e0b','#ec4899','#14b8a6'][i]}08`, borderColor: `${['#6366f1','#f59e0b','#ec4899','#14b8a6'][i]}10` }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={['#818cf8','#fbbf24','#f472b6','#2dd4bf'][i]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={r.icon}/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold tracking-tight mb-2 text-white/85">{r.title}</h3>
                  <p className="text-[13px] text-white/35 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/about" className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-[13px] font-bold">
              Learn More
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* =============== FINAL CTA =============== */}
      <section className="py-20 sm:py-28 bg-sw-surface section-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sw-brand/[0.03] via-transparent to-sw-accent/[0.02]" />
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black leading-[1.06] tracking-[-0.03em] mb-6">
            <span className="text-white/90">Start Your Journey</span><br />
            <span className="text-sw-accent">Today</span>
          </h2>
          <p className="text-[14px] sm:text-[16px] text-white/35 mb-10 max-w-md mx-auto leading-relaxed">
            Research-backed trading ideas delivered straight to your phone. Choose an advisory package and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing" className="btn-cta inline-flex items-center justify-center gap-2 px-9 py-[14px] text-[14px] font-extrabold transition-all">
              View Packages
            </Link>
            <Link href="/contact" className="btn-brand inline-flex items-center justify-center gap-2 px-9 py-[14px] text-[14px] font-bold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
