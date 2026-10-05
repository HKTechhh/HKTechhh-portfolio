"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useNav, views } from "./NavProvider";
import { StatusClock } from "./StatusClock";


function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const dark = mounted ? resolvedTheme === "dark" : true;
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="btn-ghost grid h-10 w-10 place-items-center rounded-full"
    >
      {dark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}

export function Navbar() {
  const { active, go } = useNav();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bg/95" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-ice focus:px-4 focus:py-2 focus:font-bold focus:text-[#10142a]"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <button type="button" onClick={() => go("home")} aria-label="HKTechhh — home" className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient">HK</span>
          <span>Techhh</span>
          <span className="text-sky-text">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {views.map((v) => (
            <li key={v.id}>
              <button
                type="button"
                onClick={() => go(v.id)}
                aria-current={active === v.id ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === v.id ? "bg-surface text-fg shadow-sm ring-1 ring-line" : "text-muted hover:bg-surface hover:text-fg"
                }`}
              >
                {v.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <StatusClock compact />
          <ThemeToggle />
          <button type="button" onClick={() => go("contact")} className="btn-primary hidden rounded-full px-5 py-2.5 text-sm sm:inline-block">
            Hire me
          </button>
          <button
            type="button"
            className="btn-ghost grid h-10 w-10 place-items-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-b border-line bg-bg px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1">
            {views.map((v) => (
              <li key={v.id}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    go(v.id);
                  }}
                  aria-current={active === v.id ? "page" : undefined}
                  className={`block w-full rounded-xl px-4 py-3 text-left font-medium hover:bg-surface ${active === v.id ? "bg-surface ring-1 ring-line" : ""}`}
                >
                  {v.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <motion.div
        aria-hidden
        style={{ scaleX: width }}
        className="h-[3px] origin-left bg-gradient-to-r from-ice via-sky to-leaf"
      />
    </header>
  );
}
