"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { socialIcons } from "./Icons";
import { useNav } from "./NavProvider";
import { StatusClock } from "./StatusClock";

function useTyping(words: string[], enabled: boolean) {
  const [i, setI] = useState(0);
  const [text, setText] = useState(enabled ? "" : words[0]);
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[i % words.length];
    const done = !del && text === word;
    const empty = del && text === "";
    const t = setTimeout(
      () => {
        if (done) setDel(true);
        else if (empty) {
          setDel(false);
          setI((n) => n + 1);
        } else setText(word.slice(0, text.length + (del ? -1 : 1)));
      },
      done ? 1600 : del ? 35 : 75,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, enabled]);

  return text;
}

const chips = [
  { label: "Next.js", pos: "left-[-6%] top-[12%]", delay: "0s", c: "#48CAE4" },
  { label: "Django", pos: "right-[-4%] top-[22%]", delay: "-1.4s", c: "#2FA36B" },
  { label: "Playwright", pos: "left-[-8%] bottom-[22%]", delay: "-2.6s", c: "#0096C7" },
  { label: "Remotion", pos: "right-[-2%] bottom-[10%]", delay: "-3.8s", c: "#0077B6" },
];

function Portrait() {
  const [color, setColor] = useState(false);
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* glow */}
      <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-ice/40 via-sky/30 to-leaf/30 blur-3xl" />
      {/* rotating ring */}
      <div className="relative overflow-hidden rounded-[2.2rem] p-[5px]">
        <div aria-hidden className="ring absolute -inset-1/2" />
        <button
          type="button"
          onClick={() => setColor((c) => !c)}
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
          onFocus={() => setColor(true)}
          onBlur={() => setColor(false)}
          aria-pressed={color}
          aria-label="Portrait of Hadson Mumo. Activate to switch between black-and-white and colour."
          className="relative block aspect-[5/6] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-surface-2"
        >
          <Image
            src="/images/hadson-bw.webp"
            alt="Hadson Mumo seated, hands pressed together in front of his face"
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 420px"
            className="object-cover"
          />
          <Image
            src="/images/hadson-color.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 420px"
            className={`object-cover transition-opacity duration-700 ${color ? "opacity-100" : "opacity-0"}`}
          />
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pt-10 pb-3 text-center font-mono text-xs text-white/90"
          >
            {color ? "● in colour" : "hover / tap for colour"}
          </span>
        </button>
      </div>

      {chips.map((c) => (
        <span
          key={c.label}
          aria-hidden
          style={{ animationDelay: c.delay, borderColor: c.c }}
          className={`float absolute ${c.pos} hidden rounded-full border-2 bg-surface/90 px-3.5 py-1.5 font-mono text-xs font-semibold shadow-lg backdrop-blur sm:block`}
        >
          <span className="mr-1.5 inline-block h-2 w-2 rounded-full" style={{ background: c.c }} />
          {c.label}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const role = useTyping(profile.roles, !reduce);
  const { go } = useNav();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-ice/25 blur-3xl" />
      <div aria-hidden className="absolute top-40 -right-24 -z-10 h-96 w-96 rounded-full bg-sky/25 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium"
          >
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-leaf" aria-hidden />
            Available for work
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
            <span className="inline-flex items-center gap-1 text-muted">
              <MapPin size={14} aria-hidden /> {profile.location}
            </span>
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="font-display text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">Hadson</span>
            <br />
            <span className="text-fg">Mumo.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 min-h-[2.2rem] font-mono text-xl font-semibold text-leaf-text sm:text-2xl"
            aria-label={profile.roles.join(", ")}
          >
            <span aria-hidden>
              {"> "}
              {role}
              <span className="caret ml-0.5 inline-block h-6 w-[3px] translate-y-1 bg-sky" />
            </span>
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glow-tag mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-[1.05rem] font-bold tracking-wide whitespace-nowrap sm:gap-3 sm:px-6 sm:py-2.5 sm:text-2xl"
          >
            <span aria-hidden className="glow-emoji text-xl sm:text-2xl">⚡</span>
            <span className="text-gradient">Born to Solve Problems</span>
            <span aria-hidden className="glow-emoji text-xl sm:text-2xl">🧠</span>
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-xl text-lg text-muted sm:text-xl"
          >
            {profile.valueProp}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={socials[0].href} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base">
              <Sparkles size={18} aria-hidden /> Hire me
            </a>
            <button type="button" onClick={() => go("projects")} className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base">
              View projects <ArrowRight size={18} aria-hidden />
            </button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex items-center gap-3"
            aria-label="Social links"
          >
            {socials.map((s) => {
              const Icon = socialIcons[s.id];
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label}: ${s.handle}`}
                    className="btn-ghost grid h-11 w-11 place-items-center rounded-full hover:text-sky-text"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-7"
          >
            <StatusClock />
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
