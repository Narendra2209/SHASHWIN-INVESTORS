"use client";

import { useEffect, useState, useCallback } from "react";

export default function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const show = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }, []);

  useEffect(() => {
    const handler = (e: CustomEvent<string>) => show(e.detail);
    window.addEventListener("show-toast" as string, handler as EventListener);
    return () => window.removeEventListener("show-toast" as string, handler as EventListener);
  }, [show]);

  return (
    <div
      className={`fixed bottom-[100px] left-1/2 -translate-x-1/2 px-7 py-3.5 rounded-[10px] text-sm font-semibold text-white whitespace-nowrap z-[1100] border border-blue-700/20 transition-all duration-300 pointer-events-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ background: "rgba(15,23,42,0.95)", backdropFilter: "blur(10px)" }}
      aria-live="polite"
    >
      {message}
    </div>
  );
}

export function showToast(msg: string) {
  window.dispatchEvent(new CustomEvent("show-toast", { detail: msg }));
}
