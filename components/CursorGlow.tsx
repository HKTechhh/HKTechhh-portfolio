"use client";

import { useEffect, useRef } from "react";

/** Soft ice-blue/green glow that follows the pointer (fine pointers only, no reduced motion). */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ok =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    el.style.opacity = "1";
    const move = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-[400px] w-[400px] rounded-full opacity-0 blur-3xl transition-opacity duration-500"
      style={{ background: "radial-gradient(circle, rgba(0,150,199,0.14), rgba(47,163,107,0.08) 50%, transparent 70%)" }}
    />
  );
}
