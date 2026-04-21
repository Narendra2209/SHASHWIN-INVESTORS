import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Shashwin Investors — SEBI registered research analyst. Call, WhatsApp, or submit a form for a free consultation.",
};

const methods = [
  { title: "Call Us", desc: "Speak directly with our team", value: "+91-9743556886", href: "tel:+919743556886", icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.88.37 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z", color: "#047857" },
  { title: "WhatsApp", desc: "Message us anytime", value: "+91-9743556886", href: "https://wa.me/919743556886?text=Hi%2C%20I%20am%20interested%20in%20your%20option%20trading%20advisory.", icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z", color: "#25D366" },
  { title: "Email", desc: "Write to us", value: "support@shashwininvestors.com", href: "mailto:support@shashwininvestors.com", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", color: "#b8860b" },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="grid-dots" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/[0.15] bg-emerald-500/[0.08] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#d4a017] shadow-[0_0_8px_rgba(212,160,23,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Contact Us</span>
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-black leading-[1.04] tracking-[-0.03em] mb-6 max-w-3xl mx-auto">
            <span className="text-white">Let&apos;s Start Your</span><br />
            <span className="option-highlight">Option Trading</span>{" "}
            <span className="text-white/60">Journey</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-white/55 leading-relaxed max-w-xl mx-auto">
            Get a free consultation from our SEBI-registered research analysts. We specialise in <span className="text-amber-300/90 font-semibold">option trading</span> and will help you choose the right plan.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-20 sm:py-28 bg-white section-glow">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-20 sm:mb-28">
            {methods.map((m) => (
              <a key={m.title} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card p-6 sm:p-7 group hover:-translate-y-1 transition-all duration-300 block">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-105 transition-transform" style={{ background: `${m.color}0a`, borderColor: `${m.color}18` }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={m.icon}/></svg>
                </div>
                <h3 className="text-[14px] font-bold mb-1 text-[#0f172a] tracking-tight">{m.title}</h3>
                <p className="text-[11px] text-[#94a3b8] mb-3">{m.desc}</p>
                <p className="text-[12px] sm:text-[13px] font-semibold" style={{ color: m.color }}>{m.value}</p>
              </a>
            ))}
          </div>

          {/* FORM + SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-7 sm:p-10 relative">
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#047857]/20 to-transparent rounded-full" />
                <div className="mb-8 mt-2">
                  <h2 className="text-[22px] sm:text-[28px] font-extrabold tracking-[-0.02em] mb-2 text-[#0f172a]">Get a Free Call Back</h2>
                  <p className="text-[13px] text-[#64748b]">Fill out the form and our analyst will contact you within 24 hours.</p>
                </div>
                <LeadForm buttonLabel="Request Call Back" />
                <p className="text-[11px] text-[#94a3b8] mt-6 text-center flex items-center justify-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Your information is safe. No spam, no sharing.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-[15px] font-bold mb-5 text-[#0f172a] tracking-tight flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2" opacity="0.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </span>
                  Why Contact Us?
                </h3>
                <ul className="sw-checklist space-y-3.5 text-[13px] text-[#64748b]">
                  <li>Free initial consultation</li>
                  <li>SEBI-certified research analysts</li>
                  <li>Personalized advisory plans</li>
                  <li>24&times;7 customer support</li>
                  <li>No obligation to subscribe</li>
                </ul>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-[15px] font-bold mb-5 text-[#0f172a] tracking-tight flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" opacity="0.7"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </span>
                  Business Hours
                </h3>
                <div className="space-y-3 text-[13px] text-[#64748b]">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-[#0f172a]">9 AM – 6 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-[#0f172a]">10 AM – 2 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-[#0f172a]">Closed</span></div>
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] text-[#b8860b] font-semibold">WhatsApp support available 24&times;7</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8 relative" id="office">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50/30 to-amber-50/20" />
                <div className="relative z-10">
                  <h3 className="text-[15px] font-bold mb-3 text-[#0f172a] tracking-tight flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" opacity="0.7"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </span>
                    Office Address
                  </h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed mb-2">
                    8th Phase, JP Nagar,<br />
                    Bangalore, Karnataka
                  </p>
                  <p className="text-[11px] text-[#b8860b] font-bold uppercase tracking-[0.12em] mt-4">SEBI Registered Research Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
