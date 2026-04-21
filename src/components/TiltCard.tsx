"use client";

import type React from "react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
};

export default function TiltCard({ children, className = "", maxTilt = 10, scale = 1.015 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * 2 * maxTilt;
    const rx = -(y - 0.5) * 2 * maxTilt;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
      el.style.setProperty("--scale", `${scale}`);
    });
  };

  const handleEnter = () => {
    ref.current?.classList.add("tilting");
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("tilting");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--scale", "1");
  };

  return (
    <div
      ref={ref}
      className={`tilt-target ${className}`}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{
        transform: "perspective(1400px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--scale,1))",
      }}
    >
      <span className="tilt-shine" />
      {children}
    </div>
  );
}
