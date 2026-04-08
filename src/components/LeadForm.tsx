"use client";

import { FormEvent } from "react";
import { showToast } from "./Toast";

export default function LeadForm({ buttonLabel = "Send" }: { buttonLabel?: string }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("phone")) {
      showToast("Please fill in all required fields.");
      return;
    }
    showToast("Thank you! We will contact you shortly.");
    form.reset();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required className="sw-input" aria-label="Your Name" />
      <input type="tel" name="phone" placeholder="Phone Number" required className="sw-input" aria-label="Phone Number" />
      <select name="capital" required className="sw-input" aria-label="Capital Range" defaultValue="">
        <option value="" disabled>Select Capital</option>
        <option value="below-50k">Below 50K</option>
        <option value="50k-1l">50K – 1 Lakh</option>
        <option value="1l-5l">1 Lakh – 5 Lakh</option>
        <option value="above-5l">Above 5 Lakh</option>
      </select>
      <select name="segment" required className="sw-input" aria-label="Trading Segment" defaultValue="">
        <option value="" disabled>Select Segment</option>
        <option value="equity">Equity</option>
        <option value="options">Options</option>
        <option value="futures">Futures</option>
        <option value="index">Index</option>
        <option value="commodity">Commodity</option>
      </select>
      <button type="submit" className="btn-cta w-full h-[54px] text-[15px] font-extrabold cursor-pointer transition-all">
        {buttonLabel}
      </button>
    </form>
  );
}
