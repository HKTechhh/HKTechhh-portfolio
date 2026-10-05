"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { About } from "./About";
import { Availability } from "./Availability";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Journey } from "./Journey";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const views = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export type ViewId = (typeof views)[number]["id"];

const NavContext = createContext<{ active: ViewId; go: (id: ViewId) => void }>({
  active: "home",
  go: () => {},
});

export const useNav = () => useContext(NavContext);

function subscribe(cb: () => void) {
  window.addEventListener("popstate", cb);
  window.addEventListener("hashchange", cb);
  window.addEventListener("navchange", cb);
  return () => {
    window.removeEventListener("popstate", cb);
    window.removeEventListener("hashchange", cb);
    window.removeEventListener("navchange", cb);
  };
}

function readView(): ViewId {
  const h = window.location.hash.slice(1);
  return views.find((v) => v.id === h)?.id ?? "home";
}

export function NavProvider({ children }: { children: React.ReactNode }) {
  const active = useSyncExternalStore(subscribe, readView, () => "home" as ViewId);

  const go = useCallback((id: ViewId) => {
    if (id !== readView()) {
      window.history.pushState(null, "", id === "home" ? window.location.pathname : `#${id}`);
    }
    window.dispatchEvent(new Event("navchange"));
    window.scrollTo({ top: 0 });
  }, []);

  const value = useMemo(() => ({ active, go }), [active, go]);
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

function PrevNext() {
  const { active, go } = useNav();
  const i = views.findIndex((v) => v.id === active);
  const prev = views[i - 1];
  const next = views[i + 1];
  if (!prev && !next) return null;
  return (
    <nav aria-label="Section navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 pb-16">
      {prev ? (
        <button type="button" onClick={() => go(prev.id)} className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3">
          <ArrowLeft size={18} aria-hidden /> {prev.label}
        </button>
      ) : (
        <span />
      )}
      {next && (
        <button type="button" onClick={() => go(next.id)} className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3">
          Next: {next.label} <ArrowRight size={18} aria-hidden />
        </button>
      )}
    </nav>
  );
}

const pages: Record<ViewId, React.ReactNode> = {
  home: (
    <>
      <Hero />
      <Availability />
    </>
  ),
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  journey: <Journey />,
  contact: <Contact />,
};

/** Renders exactly one section at a time, switched by the nav buttons. */
export function Views() {
  const { active } = useNav();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const first = useRef(true);

  // move keyboard/screen-reader focus to the new view (not on first load)
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    ref.current?.focus({ preventScroll: true });
  }, [active]);

  return (
    <main id="main" ref={ref} tabIndex={-1} className="relative z-10 min-h-[calc(100vh-8rem)] outline-none">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: reduce ? 0 : 0.28, ease: "easeOut" }}
        >
          {pages[active]}
          <PrevNext />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
