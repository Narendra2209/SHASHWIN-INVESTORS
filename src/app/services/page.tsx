import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive trading advisory services — Equity, Futures, Options, MCX, Index, and Short-Term strategies from SEBI-registered research analyst.",
};

const services = [
  { title: "Stock Cash Services", desc: "Research-driven equity cash recommendations for short-term and delivery-based trading with disciplined risk management protocols.", color: "#6366f1", icon: "M3 3v18h18M9 17V9m4 8V5m4 12v-4", features: ["Intraday & delivery calls", "Clear entry and exit levels", "Defined stop-loss on every trade", "Suitable for all capital sizes"] },
  { title: "Stock Future Services", desc: "Well-researched futures trading strategies designed to capture directional moves with clear entry, stop-loss, and target levels.", color: "#f59e0b", icon: "M13 7l5 5-5 5M6 12h12", features: ["Directional futures calls", "Risk-reward above 1:2", "Position sizing guidance", "Real-time trade management"] },
  { title: "Stock Option Services", desc: "Data-driven options trading ideas focusing on premium capture and directional strategies with defined risk parameters.", color: "#ec4899", icon: "M12 2L2 7l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5", features: ["Option buying & selling calls", "Strike selection guidance", "Expiry-based strategies", "Greeks-aware positioning"] },
  { title: "Short Term Services", desc: "Quick turnaround trading ideas for short-term momentum plays with tight stop-losses and defined profit targets.", color: "#14b8a6", icon: "M5 12h14M12 5l7 7-7 7", features: ["1-5 day holding period", "Momentum-based selection", "Tight stop-loss levels", "Quick profit booking"] },
  { title: "MCX Services", desc: "Commodity market advisory covering gold, silver, crude oil, natural gas with risk-first position sizing.", color: "#a855f7", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", features: ["Gold, silver, crude calls", "Risk-first position sizing", "International correlation", "Live market support"] },
  { title: "Equity Services", desc: "Disciplined equity research with structured entries and exits for investors seeking consistent portfolio growth.", color: "#f97316", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", features: ["Long-term value picks", "Portfolio approach", "Quarterly reviews", "Wealth creation focus"] },
];

const process = [
  { step: "01", title: "Research & Analysis", desc: "Thorough technical and fundamental research to identify high-probability opportunities.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { step: "02", title: "Risk Assessment", desc: "Every trade is evaluated for risk-reward ratio and optimal position sizing.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { step: "03", title: "Alert Delivery", desc: "Instant alerts with entry, stop-loss and targets via WhatsApp, SMS and call.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { step: "04", title: "Live Support", desc: "Real-time market support, trade revisions and trailing stop-loss updates.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="grid-dots" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sw-brand/[0.12] bg-sw-brand/[0.04] mb-8">
              <span className="w-2 h-2 rounded-full bg-sw-accent shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Our Services</span>
            </span>
            <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-black leading-[1.04] tracking-[-0.03em] mb-6">
              <span className="text-white/90">Comprehensive</span><br />
              <span className="text-sw-brand-light">Advisory</span>{" "}
              <span className="text-white/40">Across All Segments</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/35 leading-relaxed max-w-xl">
              From equity cash to index options, our SEBI-registered research analysts provide research-backed recommendations for every trading style.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 bg-sw-surface section-glow relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-sw-brand/[0.015] blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((s) => (
              <article key={s.title} className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-400">
                <div className="h-[2px] opacity-40 group-hover:opacity-80 transition-opacity" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                <div className="p-7 sm:p-9">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:scale-105 transition-transform" style={{ background: `${s.color}06`, borderColor: `${s.color}10` }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"><path d={s.icon}/></svg>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold mb-2 text-white/85 tracking-tight">{s.title}</h3>
                      <p className="text-[13px] text-white/30 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.04]">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-[12px] sm:text-[13px] text-white/35">
                        <span className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${s.color}08` }}>
                          <svg width="10" height="10" viewBox="0 0 20 20" fill={s.color} opacity="0.6"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28 bg-sw-bg section-glow relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sw-brand/[0.02] blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-sw-accent/[0.06] text-white/40 border border-sw-accent/[0.08] mb-5">How It Works</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
              <span className="text-white/90">Our</span>{" "}<span className="text-sw-accent">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="glass-card p-7 sm:p-9 text-center group hover:border-white/[0.06] transition-all relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-20 group-hover:opacity-50 transition-opacity" style={{ background: `linear-gradient(90deg, ${['#6366f1','#f59e0b','#ec4899','#14b8a6'][i]}, transparent)` }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border group-hover:scale-105 transition-transform" style={{ background: `${['#6366f1','#f59e0b','#ec4899','#14b8a6'][i]}06`, borderColor: `${['#6366f1','#f59e0b','#ec4899','#14b8a6'][i]}10` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={['#818cf8','#fbbf24','#f472b6','#2dd4bf'][i]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"><path d={p.icon}/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-3 block">Step {p.step}</span>
                <h3 className="text-[15px] font-bold mb-2 text-white/80 tracking-tight">{p.title}</h3>
                <p className="text-[12px] text-white/30 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-sw-surface section-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sw-brand/[0.02] via-transparent to-sw-accent/[0.02]" />
        <div className="max-w-[620px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6">
            <span className="text-white/90">Ready to</span>{" "}<span className="text-sw-accent">Subscribe</span><span className="text-white/40">?</span>
          </h2>
          <p className="text-[14px] text-white/30 mb-10">Choose a package that fits your trading style.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing" className="btn-cta inline-flex items-center justify-center px-8 py-[14px] text-[14px] font-extrabold transition-all">View Packages</Link>
            <Link href="/contact" className="btn-brand inline-flex items-center justify-center px-8 py-[14px] text-[14px] font-bold transition-all">Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
