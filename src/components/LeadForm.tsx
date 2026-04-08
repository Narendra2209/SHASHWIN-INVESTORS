"use client";

import type React from "react";
import { showToast } from "./Toast";

const WHATSAPP_NUMBER = "917032048807";

const capitalLabels: Record<string, string> = {
  "below-50k": "Below 50K",
  "50k-1l": "50K – 1 Lakh",
  "1l-5l": "1 Lakh – 5 Lakh",
  "above-5l": "Above 5 Lakh",
};

export default function LeadForm({ buttonLabel = "Send", variant = "light" }: { buttonLabel?: string; variant?: "light" | "dark" }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const capital = data.get("capital") as string;
    const segment = data.get("segment") as string;

    if (!name || !phone) {
      showToast("Please fill in all required fields.");
      return;
    }

    const message =
      `Hi, I would like a free consultation.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Capital: ${capitalLabels[capital] || capital}\n` +
      `Segment: ${segment}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    showToast("Redirecting to WhatsApp...");
    form.reset();
  };

  const inputClass = "sw-input";
  const btnClass = variant === "light"
    ? "w-full h-[54px] text-[15px] font-extrabold cursor-pointer transition-all rounded-2xl text-white bg-gradient-to-r from-[#1e40af] to-[#3b82f6] hover:from-[#1e3a8a] hover:to-[#2563eb] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:-translate-y-0.5 active:translate-y-0"
    : "btn-cta w-full h-[54px] text-[15px] font-extrabold cursor-pointer transition-all";

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required className={inputClass} aria-label="Your Name" />
      <input type="tel" name="phone" placeholder="Phone Number" required className={inputClass} aria-label="Phone Number" />
      <select name="capital" required className={inputClass} aria-label="Capital Range" defaultValue="">
        <option value="" disabled>Select Capital</option>
        <option value="below-50k">Below 50K</option>
        <option value="50k-1l">50K – 1 Lakh</option>
        <option value="1l-5l">1 Lakh – 5 Lakh</option>
        <option value="above-5l">Above 5 Lakh</option>
      </select>
      <select name="segment" required className={inputClass} aria-label="Trading Segment" defaultValue="">
        <option value="" disabled>Select Segment</option>
        <option value="equity">Equity</option>
        <option value="options">Options</option>
        <option value="futures">Futures</option>
        <option value="index">Index</option>
        <option value="commodity">Commodity</option>
      </select>
      <button type="submit" className={btnClass}>
        {buttonLabel}
      </button>
    </form>
  );
}
