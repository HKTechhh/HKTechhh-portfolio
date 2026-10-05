"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38, delay: Math.min(delay, 0.12), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm font-semibold tracking-widest text-sky-text uppercase">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-ice to-sky align-middle" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-lg text-muted">{desc}</p>}
    </Reveal>
  );
}
