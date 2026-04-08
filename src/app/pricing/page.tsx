import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore our SEBI-compliant trading advisory packages — Equity, Option, Future, Commodity, Index, and HNI packages with 24x7 support.",
};

const packages = [
  { name: "Equity Package", type: "equity", color: "#1e40af", featured: false },
  { name: "Option Package", type: "option", color: "#1e40af", featured: false },
  { name: "Future Package", type: "future", color: "#b8860b", featured: false },
  { name: "Commodity Package", type: "commodity", color: "#1e40af", featured: false },
  { name: "Index Package", type: "index", color: "#b8860b", featured: false },
  { name: "HNI Package", type: "HNI", color: "#b8860b", featured: true },
];

const faqs = [
  { q: "How do I subscribe to a package?", a: "Click 'Enquiry Now' on any package or call us at +91-7032048807. Our team will guide you through the process." },
  { q: "What is the fee structure?", a: "All fees are as per SEBI Guidelines. Contact our team for detailed fee information." },
  { q: "How will I receive trading alerts?", a: "Alerts are delivered via WhatsApp, SMS, and Call with a dedicated relationship manager." },
  { q: "Can I switch between packages?", a: "Yes, you can upgrade or switch. Contact your relationship manager to discuss options." },
  { q: "What if I face losses?", a: "Trading involves risk. We provide stop-loss with every call to minimize losses." },
  { q: "Is there a refund policy?", a: "Yes, we have a transparent refund policy per SEBI guidelines." },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="grid-dots" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/[0.15] bg-blue-500/[0.08] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#d4a017] shadow-[0_0_8px_rgba(212,160,23,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Pricing</span>
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-black leading-[1.04] tracking-[-0.03em] mb-6 max-w-3xl mx-auto">
            <span className="text-white">Choose Your</span>{" "}
            <span className="text-[#d4a017]">Advisory</span>{" "}
            <span className="text-white/50">Package</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed max-w-xl mx-auto">
            Transparent pricing, SEBI-compliant fees, and dedicated support with every package.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 sm:py-28 bg-white section-glow relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-400 relative ${pkg.featured ? "ring-1 ring-[#b8860b]/25 shadow-[0_0_40px_-12px_rgba(184,134,11,0.1)]" : ""}`}>
                {pkg.featured && (
                  <div className="absolute top-5 right-5 z-10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] rounded-full bg-amber-50 text-[#b8860b] border border-amber-200">
                    Popular
                  </div>
                )}
                <div className="h-[2px] opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${pkg.color}, transparent)` }} />

                <div className="p-7 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center border" style={{ background: `${pkg.color}0a`, borderColor: `${pkg.color}18` }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={pkg.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M9 17V9m4 8V5m4 12v-4"/></svg>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-[#0f172a] tracking-tight">{pkg.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1e40af]/50">SEBI Registered Analyst</p>
                    </div>
                  </div>

                  {/* Fee */}
                  <div className="py-4 mb-6 border-y border-slate-100">
                    <p className="text-[13px] text-[#64748b]">Fee as per <span className="text-[#1e40af] font-semibold">SEBI Guidelines</span></p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8">
                    {[
                      "Only one research alert per day",
                      `Get positional ${pkg.type} alert`,
                      "Personal relationship manager",
                      "Delivery: Call / SMS / WhatsApp",
                      "Researched targets & stop-loss",
                      "Live market support",
                      "Risk level: High to Very High",
                      "24\u00d77 hours support",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[12px] sm:text-[13px] text-[#64748b]">
                        <span className="shrink-0 w-[18px] h-[18px] mt-[1px] rounded-md flex items-center justify-center" style={{ background: `${pkg.color}0a`, border: `1px solid ${pkg.color}18` }}>
                          <svg width="9" height="9" viewBox="0 0 20 20" fill={pkg.color} opacity="0.6"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a href="tel:+917032048807" className="btn-brand flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-[12px] font-bold transition-all">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.88.37 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      Call Now
                    </a>
                    <Link href="/contact" className="btn-cta flex-1 inline-flex items-center justify-center px-4 py-3 text-[12px] font-extrabold transition-all">
                      Enquiry Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] section-glow relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-amber-100/20 blur-3xl" />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-amber-50 text-[#b8860b] border border-amber-200 mb-5">FAQ</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em]">
              <span className="text-[#0f172a]">Frequently Asked</span>{" "}<span className="text-[#b8860b]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass-card p-6 sm:p-8 transition-colors">
                <h3 className="text-[14px] font-bold mb-2.5 text-[#0f172a] tracking-tight flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5 border border-blue-200">
                    <span className="text-[10px] font-extrabold text-[#1e40af]">Q</span>
                  </span>
                  {f.q}
                </h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed pl-9">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-white section-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-amber-50/30" />
        <div className="max-w-[620px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6">
            <span className="text-[#0f172a]">Still Have</span>{" "}<span className="text-[#64748b]">Questions?</span>
          </h2>
          <p className="text-[14px] text-[#64748b] mb-10">Our team is ready to help you choose the right package.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+917032048807" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-[14px] text-[14px] font-extrabold transition-all">
              Call: +91-7032048807
            </a>
            <Link href="/contact" className="btn-outline inline-flex items-center justify-center px-8 py-[14px] text-[14px] transition-all">Send Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
