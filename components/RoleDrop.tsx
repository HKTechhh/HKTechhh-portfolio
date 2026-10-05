"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Code, PenLine, Rocket } from "lucide-react";

const roles = [
  { label: "Full-Stack Developer", Icon: Code, a: "#48CAE4", b: "#ADE8F4" },
  { label: "Automation Engineer", Icon: Bot, a: "#2FA36B", b: "#90E0EF" },
  { label: "Founder of HKTechhh", Icon: Rocket, a: "#0096C7", b: "#6FD6A6" },
  { label: "Freelance Writer", Icon: PenLine, a: "#6FD6A6", b: "#48CAE4" },
];

/** Roles drop in from above with a little bounce while the previous one falls away. */
export function RoleDrop() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return <p className="mt-5 font-display text-xl font-bold text-leaf-text">{roles.map((r) => r.label).join(" · ")}</p>;
  }

  const { label, Icon, a, b } = roles[i];
  return (
    <div className="mt-5">
      <p className="sr-only">{roles.map((r) => r.label).join(", ")}</p>
      <div aria-hidden className="relative h-14 overflow-hidden sm:h-16">
        <AnimatePresence initial={false}>
          <motion.div
            key={label}
            className="absolute top-1 left-0 flex items-center gap-3"
            initial={{ y: -56, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 56, opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.7 }}
          >
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-[#082233] shadow-md sm:h-12 sm:w-12"
              style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
            >
              <Icon size={24} />
            </span>
            <span className="text-gradient font-display text-[1.45rem] leading-none font-bold whitespace-nowrap sm:text-4xl">{label}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <div aria-hidden className="mt-1 flex gap-1.5">
        {roles.map((r, k) => (
          <span
            key={r.label}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: k === i ? 28 : 8, background: k === i ? "var(--leaf)" : "var(--border)" }}
          />
        ))}
      </div>
    </div>
  );
}
