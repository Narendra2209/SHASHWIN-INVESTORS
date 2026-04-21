"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sks_risk_disclosure_acknowledged";

export default function RiskDisclosureModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="risk-disclosure-title"
      className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(15,23,42,0.55)", backdropFilter: "blur(6px)" }}
    >
      <div className="relative w-full max-w-[520px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh]">
        <div className="flex flex-col items-center pt-8 px-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #fff7ed, #fed7aa)", border: "1px solid #fdba74" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 2h6l1 4H8z" />
              <rect x="5" y="5" width="11" height="16" rx="2" />
              <path d="M9 10h4M9 14h3" />
              <circle cx="18.5" cy="17" r="3.5" fill="#ea580c" stroke="none" />
              <line x1="18.5" y1="15.2" x2="18.5" y2="17.2" stroke="#fff" strokeWidth="1.6" />
              <circle cx="18.5" cy="18.7" r="0.6" fill="#fff" stroke="none" />
            </svg>
          </div>
          <h2 id="risk-disclosure-title" className="text-[20px] sm:text-[22px] font-extrabold text-[#0f172a] tracking-tight text-center">
            Disclaimer
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-7 sm:px-8 py-6">
          <ul className="space-y-4 text-[14px] sm:text-[15px] text-[#334155] leading-relaxed">
            {[
              "Investment in securities market is subject to market risk. No guaranteed profit. Past performance is not indicative of future results.",
              "Fees should only be paid to Shashwin Investors company accounts.",
              "Risk of loss in trading can be substantial. Consider whether trading is appropriate for your financial condition.",
              "Shashwin Investors shall not be held responsible for losses incurred from trading based on our recommendations.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="shrink-0 mt-[7px] w-[7px] h-[7px] rounded-full bg-[#ea580c]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 sm:p-6 pt-2">
          <button
            type="button"
            onClick={accept}
            className="w-full py-4 text-[15px] font-bold text-white rounded-2xl transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              boxShadow: "0 8px 24px -6px rgba(234,88,12,0.45)",
            }}
          >
            I understand, continue
          </button>
        </div>
      </div>
    </div>
  );
}
