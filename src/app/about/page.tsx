import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Shashwin Investors — a SEBI-registered research analyst firm providing disciplined, research-backed market advisory.",
};

const values = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Transparency", desc: "Every recommendation comes with full disclosure — entry, stop-loss, targets, and reasoning behind the call.", color: "#1e40af" },
  { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Research-Driven", desc: "Our calls are backed by rigorous technical and fundamental analysis — never guesswork.", color: "#b8860b" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Discipline", desc: "Strict risk management protocols. Every recommendation has a defined risk-reward ratio.", color: "#1e40af" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0", title: "Client First", desc: "Personalized advisory based on your capital, risk appetite, and preferred market segments.", color: "#b8860b" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Speed", desc: "Real-time alerts via WhatsApp, SMS, and call so you never miss an opportunity.", color: "#1e40af" },
  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", title: "Compliance", desc: "Fully SEBI-registered and compliant with all regulatory requirements for investor protection.", color: "#b8860b" },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "Established with a mission to deliver transparent, research-backed market advisory." },
  { year: "2020", title: "SEBI Registered", desc: "Received official SEBI registration as a Research Analyst." },
  { year: "2022", title: "1000+ Clients", desc: "Crossed the milestone of serving over 1000 active subscribers." },
  { year: "2024", title: "Multi-Segment", desc: "Expanded to cover Equity, Options, Futures, Index, MCX and HNI." },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="grid-dots" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/[0.15] bg-blue-500/[0.08] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#d4a017] shadow-[0_0_8px_rgba(212,160,23,0.5)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">About Us</span>
            </span>
            <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-black leading-[1.04] tracking-[-0.03em] mb-6">
              <span className="text-white">Your Trusted</span><br />
              <span className="text-[#3b82f6]">SEBI-Registered</span><br />
              <span className="text-white/50">Research Analyst</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed max-w-xl">
              Shashwin Investors delivers disciplined, research-backed trading ideas with clear entries, exits, and risk controls for confident trading.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-20 sm:py-28 bg-white section-glow relative overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div>
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-amber-50 text-[#b8860b] border border-amber-200 mb-6">Our Mission</span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6">
              <span className="text-[#0f172a]">Empowering Traders</span><br />
              <span className="text-[#64748b]">With Quality Research</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#64748b] leading-[1.8] mb-6">
              We believe every trader deserves access to quality research and transparent advisory. Our SEBI-registered analysts combine years of market experience with rigorous analytical methods.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#64748b] leading-[1.8] mb-8">
              Whether you seek intraday opportunities or positional setups, our structured approach ensures every recommendation comes with clear entry, stop-loss, and target levels.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["SEBI-Registered", "Risk-First", "Research-Backed"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-semibold rounded-full bg-blue-50 text-[#1e40af] border border-blue-200">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="#1e40af"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-10 sm:p-12 relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 to-amber-50/30" />
            <svg viewBox="0 0 300 260" fill="none" className="w-full h-auto relative z-10">
              <defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e40af"/><stop offset="100%" stopColor="#b8860b"/></linearGradient></defs>
              <path d="M30 200L75 130L120 160L165 90L210 120L260 55" stroke="url(#ag)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
              {[[75,130],[120,160],[165,90],[210,120],[260,55]].map(([cx,cy],i)=>(
                <g key={i}><circle cx={cx} cy={cy} r="5" fill={i%2===0?"#1e40af":"#b8860b"} opacity="0.8"/><circle cx={cx} cy={cy} r="10" fill="none" stroke={i%2===0?"#1e40af":"#b8860b"} strokeWidth="1" opacity="0.2"/></g>
              ))}
              <text x="150" y="240" textAnchor="middle" fill="rgba(15,23,42,0.2)" fontSize="12" fontWeight="600">Consistent Performance</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] section-glow relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-blue-50 text-[#1e40af] border border-blue-200 mb-5">Our Journey</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
              <span className="text-[#0f172a]">Building Trust,</span>{" "}
              <span className="text-[#64748b]">Year by Year</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {timeline.map((t, i) => (
              <div key={t.year} className="glass-card p-7 sm:p-9 relative group transition-all">
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-80 transition-opacity" style={{ background: `linear-gradient(90deg, ${i%2===0?'#1e40af':'#b8860b'}, transparent)` }} />
                <span className="text-[36px] sm:text-[42px] font-black tracking-tight bg-gradient-to-b from-[#0f172a]/30 to-[#0f172a]/10 bg-clip-text text-transparent">{t.year}</span>
                <h3 className="text-[15px] font-bold mt-3 mb-2 text-[#0f172a] tracking-tight">{t.title}</h3>
                <p className="text-[12px] sm:text-[13px] text-[#64748b] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 sm:py-28 bg-white section-glow relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-amber-50 text-[#b8860b] border border-amber-200 mb-5">Our Values</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
              <span className="text-[#0f172a]">Principles That</span>{" "}
              <span className="text-[#b8860b]">Guide Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-7 sm:p-9 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-all group-hover:scale-105" style={{ background: `${v.color}0a`, borderColor: `${v.color}18` }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon}/></svg>
                </div>
                <h3 className="text-[15px] font-bold mb-2 text-[#0f172a] tracking-tight">{v.title}</h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] section-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-amber-50/30" />
        <div className="max-w-[620px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6">
            <span className="text-[#0f172a]">Want to</span>{" "}
            <span className="text-[#64748b]">Know More?</span>
          </h2>
          <p className="text-[14px] text-[#64748b] mb-10">Get in touch or explore our services and packages.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-cta inline-flex items-center justify-center px-8 py-[14px] text-[14px] font-extrabold transition-all">Contact Us</Link>
            <Link href="/services" className="btn-outline inline-flex items-center justify-center px-8 py-[14px] text-[14px] transition-all">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
