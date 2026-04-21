import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import TiltCard from "@/components/TiltCard";

const stats = [
  { value: "18+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "15K+", label: "Happy Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
  { value: "90%", label: "Accuracy Rate", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { value: "24/7", label: "Live Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
];

const services = [
  { title: "Option Trading", desc: "Our flagship specialty — data-driven option trading strategies with defined risk parameters and expert strike selection.", color: "#b8860b", icon: "M12 2L2 7l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5", featured: true },
  { title: "Equity Cash", desc: "Research-driven equity cash recommendations for intraday and delivery trading.", color: "#047857", icon: "M3 3v18h18M9 17V9m4 8V5m4 12v-4" },
  { title: "Futures Trading", desc: "Directional futures strategies with clear entry, stop-loss and targets.", color: "#047857", icon: "M13 7l5 5-5 5M6 12h12" },
  { title: "MCX Commodities", desc: "Gold, silver, crude oil advisory with risk-first position sizing.", color: "#b8860b", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
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
        {/* Rich layered background */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #022c22 0%, #033a30 25%, #0f3d33 50%, #033a30 75%, #022c22 100%)",
        }} />
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(ellipse 900px 700px at 15% 20%, rgba(16,185,129,0.28) 0%, transparent 55%), " +
            "radial-gradient(ellipse 700px 500px at 85% 75%, rgba(212,160,23,0.18) 0%, transparent 55%), " +
            "radial-gradient(ellipse 600px 400px at 50% 100%, rgba(16,185,129,0.12) 0%, transparent 60%)",
        }} />
        {/* Starfield */}
        <div className="absolute inset-0 opacity-[0.5] pointer-events-none" style={{
          backgroundImage:
            "radial-gradient(1.2px 1.2px at 12% 22%, rgba(255,255,255,0.5), transparent 40%)," +
            "radial-gradient(1px 1px at 68% 65%, rgba(212,160,23,0.6), transparent 40%)," +
            "radial-gradient(1.4px 1.4px at 82% 12%, rgba(255,255,255,0.4), transparent 40%)," +
            "radial-gradient(1px 1px at 32% 82%, rgba(16,185,129,0.6), transparent 40%)," +
            "radial-gradient(1px 1px at 75% 38%, rgba(255,255,255,0.35), transparent 40%)," +
            "radial-gradient(1px 1px at 20% 55%, rgba(212,160,23,0.4), transparent 40%)",
        }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)", backgroundSize: "48px 48px" }} />
        {/* Animated orbs */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.18), transparent 65%)", filter: "blur(50px)", animation: "orb-drift 18s ease-in-out infinite" }} />
        <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15), transparent 65%)", filter: "blur(60px)", animation: "orb-drift 24s ease-in-out infinite reverse" }} />
        {/* 3D Floating scene */}
        <div className="scene-3d hidden md:block">
          <div className="cube-3d" style={{ top: "18%", left: "5%", animationDuration: "26s" }}>
            <span className="face front" /><span className="face back" /><span className="face right" /><span className="face left" /><span className="face top" /><span className="face bottom" />
          </div>
          <div className="cube-3d" style={{ top: "68%", left: "8%", width: "50px", height: "50px", animationDuration: "32s", animationDirection: "reverse" }}>
            <span className="face front" style={{ transform: "translateZ(25px)" }} /><span className="face back" style={{ transform: "rotateY(180deg) translateZ(25px)" }} /><span className="face right" style={{ transform: "rotateY(90deg) translateZ(25px)" }} /><span className="face left" style={{ transform: "rotateY(-90deg) translateZ(25px)" }} /><span className="face top" style={{ transform: "rotateX(90deg) translateZ(25px)" }} /><span className="face bottom" style={{ transform: "rotateX(-90deg) translateZ(25px)" }} />
          </div>
          <div className="disc-3d" style={{ top: "12%", right: "8%" }}>
            <span className="layer" /><span className="layer" /><span className="layer" /><span className="layer" />
          </div>
          <div className="ring-3d" style={{ bottom: "15%", right: "18%" }} />
          <div className="ring-3d" style={{ top: "45%", left: "45%", width: "60px", height: "60px", animationDuration: "24s", animationDirection: "reverse" }} />
        </div>
        {/* Floating geometric accents */}
        <div className="absolute top-40 left-[6%] w-28 h-28 rounded-full border border-emerald-400/[0.12]" style={{ animation: "float 8s ease-in-out infinite" }} />
        <div className="absolute top-60 right-[8%] w-16 h-16 rounded-2xl border border-amber-400/[0.15] rotate-12" style={{ animation: "float-slow 10s ease-in-out infinite 2s" }} />
        <div className="absolute bottom-32 left-[12%] w-10 h-10 rounded-lg border border-amber-400/[0.15] -rotate-12" style={{ animation: "float 12s ease-in-out infinite 1s" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-2 sm:pt-3 md:pt-4 pb-14 sm:pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-400/[0.2] bg-amber-500/[0.08] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300/80">Experts in Option Trading</span>
              </div>

              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[58px] font-black leading-[1.1] tracking-[-0.03em] mb-7">
                <span className="text-white">We Provide</span>
                <br />
                <span className="option-highlight">Option Trading</span>
                <br />
                <span className="text-white/70">That Works.</span>
              </h1>

              <p className="text-[15px] sm:text-[17px] md:text-[19px] text-white/55 mb-10 max-w-[520px] leading-relaxed font-normal">
                Research-driven <span className="text-amber-300/90 font-semibold">option trading</span> strategies with clear entry, stop-loss &amp; exit logic — delivered by SEBI-registered analysts with 18+ years of experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/contact" className="btn-3d btn-3d-gold inline-flex items-center justify-center gap-2.5 px-8 py-[14px] text-[14px]">
                  Get Started
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/services" className="btn-3d inline-flex items-center justify-center gap-2 px-8 py-[14px] text-[14px]">
                  Our Services
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f172a] flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${['#047857','#b8860b','#047857','#b8860b'][i]}, ${['#10b981','#d4a017','#10b981','#d4a017'][i]})` }}>
                      {['SK','AR','PM','VK'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white/60 leading-tight">Trusted by 15K+ traders</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#d4a017"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    <span className="text-[10px] text-white/40 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form (3D Tilted) */}
            <TiltCard className="rounded-3xl" maxTilt={6} scale={1.01}>
              <div className="rounded-3xl p-7 sm:p-9 relative overflow-hidden tilt-layer" style={{
                background: "linear-gradient(135deg, #ffffff 0%, #fafbff 50%, #fffbeb 100%)",
                boxShadow: "0 30px 80px -20px rgba(4,120,87,0.3), 0 12px 32px -8px rgba(15,23,42,0.2), 0 0 0 1px rgba(255,255,255,0.6) inset, 0 1px 0 rgba(255,255,255,0.9) inset",
              }}>
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full" style={{
                  background: "linear-gradient(90deg, transparent, #047857 30%, #b8860b 70%, transparent)",
                }} />
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(4,120,87,0.08), transparent 65%)" }} />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(184,134,11,0.08), transparent 65%)" }} />
                <div className="relative z-10 tilt-pop">
                  <div className="flex items-center gap-4 mb-7 mt-1">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center icon-3d" style={{
                      background: "linear-gradient(135deg, #d1fae5, #ecfdf5)",
                      border: "1px solid rgba(4,120,87,0.2)",
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.88.37 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h2 className="text-[18px] font-extrabold tracking-tight text-gray-900">Free Consultation</h2>
                      <p className="text-[12px] text-[#047857] font-semibold">Our analyst will call you back</p>
                    </div>
                  </div>
                  <LeadForm />
                  <p className="text-[11px] text-gray-500 mt-5 text-center flex items-center justify-center gap-1.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    No spam &bull; No sharing &bull; SEBI compliant
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Stats — Isometric 3D */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-20 sm:mt-28 perspective-scene">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-iso py-7 sm:py-9 px-6 text-center group relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: i % 2 === 0
                    ? "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.18), transparent 70%)"
                    : "radial-gradient(circle at 50% 0%, rgba(212,160,23,0.18), transparent 70%)",
                }} />
                <div className="relative z-10 preserve-3d" style={{ transform: "translateZ(20px)" }}>
                  <div className="icon-3d w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-400 group-hover:scale-110" style={{
                    background: i % 2 === 0
                      ? "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(16,185,129,0.08))"
                      : "linear-gradient(135deg, rgba(212,160,23,0.25), rgba(212,160,23,0.08))",
                    border: `1px solid ${i % 2 === 0 ? "rgba(16,185,129,0.3)" : "rgba(212,160,23,0.3)"}`,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={i % 2 === 0 ? "#10b981" : "#d4a017"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                  </div>
                  <p className="text-[32px] sm:text-[42px] font-black tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent mb-1" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>{s.value}</p>
                  <p className="text-[12px] sm:text-[13px] text-white/55 font-semibold tracking-wide uppercase">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== SERVICES PREVIEW =============== */}
      <section className="py-20 sm:py-28 bg-mesh-light section-glow relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-100/50 to-amber-100/30 blur-3xl" />
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-100/40 to-transparent blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
            <div className="max-w-xl">
              <span className="option-chip mb-5">
                <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Our Specialty
              </span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
                <span className="text-[#0f172a]">We Are Experts in</span><br />
                <span className="option-highlight">Option Trading</span>
              </h2>
            </div>
            <Link href="/services" className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-[13px] font-bold shrink-0 self-start lg:self-auto">
              View All
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 perspective-scene">
            {services.map((s) => {
              const Card = (
                <article className={`${s.featured ? "option-featured" : "card-deep"} relative overflow-hidden group hover:-translate-y-1 transition-all duration-400 rounded-3xl h-full`}>
                  {!s.featured && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-80 transition-opacity" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                  )}
                  {s.featured && (
                    <div className="absolute top-5 right-5 z-10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] rounded-full bg-amber-100 text-[#92400e] border border-amber-300 shadow-sm" style={{ animation: "badge-pulse 2.4s ease-in-out infinite", transform: "translateZ(30px)" }}>
                      Flagship
                    </div>
                  )}
                  <div className="p-7 sm:p-9 tilt-layer">
                    <div className="icon-3d w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300" style={{ background: `${s.color}14`, borderColor: `${s.color}30`, transform: s.featured ? "translateZ(40px)" : undefined }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                    </div>
                    <h3 className={`text-[18px] font-bold tracking-tight mb-2.5 ${s.featured ? "text-[#92400e]" : "text-[#0f172a]"}`} style={s.featured ? { transform: "translateZ(30px)" } : undefined}>{s.title}</h3>
                    <p className="text-[13px] text-[#64748b] leading-relaxed" style={s.featured ? { transform: "translateZ(20px)" } : undefined}>{s.desc}</p>
                  </div>
                </article>
              );
              return s.featured ? (
                <TiltCard key={s.title} className="rounded-3xl" maxTilt={8}>{Card}</TiltCard>
              ) : (
                <div key={s.title}>{Card}</div>
              );
            })}
          </div>

          {/* Risk banner */}
          <div className="risk-banner mt-10 p-5 sm:p-6 flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#9a3412] mb-1">Option Trading is Risky</h4>
              <p className="text-[12px] sm:text-[13px] text-[#9a3412]/80 leading-relaxed">
                Option trading is a bit risky and involves substantial risk of loss. Please trade with proper risk management and only with capital you can afford to risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============== TRUST / WHY US =============== */}
      <section className="py-20 sm:py-28 bg-mesh-surface section-glow relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100/40 to-emerald-100/20 blur-3xl" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-100/30 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-amber-50 text-[#b8860b] border border-amber-200 mb-5">Why Choose Us</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
              <span className="text-[#0f172a]">Trusted by</span>{" "}
              <span className="text-[#b8860b]">Traders</span>{" "}
              <span className="text-[#64748b]">Across India</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 perspective-scene">
            {trust.map((r, i) => (
              <div key={r.title} className="card-deep p-7 sm:p-9 flex gap-6 items-start group">
                <div className="icon-3d shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border"
                  style={{ background: `${['#047857','#b8860b','#047857','#b8860b'][i]}14`, borderColor: `${['#047857','#b8860b','#047857','#b8860b'][i]}30` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={['#047857','#b8860b','#047857','#b8860b'][i]} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={r.icon}/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold tracking-tight mb-2 text-[#0f172a]">{r.title}</h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{r.desc}</p>
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
      <section className="py-20 sm:py-28 bg-white section-glow relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(ellipse 800px 400px at 30% 50%, rgba(4,120,87,0.07), transparent 60%)," +
            "radial-gradient(ellipse 700px 400px at 70% 50%, rgba(184,134,11,0.08), transparent 60%)",
        }} />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(4,120,87,0.15), rgba(184,134,11,0.15), transparent)" }} />
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black leading-[1.06] tracking-[-0.03em] mb-6">
            <span className="text-[#0f172a]">Start Your Journey</span><br />
            <span className="text-[#b8860b]">Today</span>
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#64748b] mb-10 max-w-md mx-auto leading-relaxed">
            Research-backed trading ideas delivered straight to your phone. Choose an advisory package and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-3d btn-3d-gold inline-flex items-center justify-center gap-2 px-9 py-[14px] text-[14px]">
              View Packages
            </Link>
            <Link href="/contact" className="btn-3d inline-flex items-center justify-center gap-2 px-9 py-[14px] text-[14px]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
