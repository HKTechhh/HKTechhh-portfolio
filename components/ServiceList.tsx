"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { moreServices, services } from "@/lib/data";

const chip =
  "rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-sky";

export function ServiceList() {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services offered">
      {services.map((s) => (
        <li key={s} className={chip}>
          {s}
        </li>
      ))}
      {open &&
        moreServices.map((s, i) => (
          <li key={s} id={i === 0 ? id : undefined} className={`${chip} pop-in border-leaf/50`} style={{ animationDelay: `${i * 40}ms` }}>
            {s}
          </li>
        ))}
      <li>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-sky px-3.5 py-1.5 text-sm font-semibold text-sky-text transition-colors hover:bg-ice/30"
        >
          {open ? <Minus size={14} aria-hidden /> : <Plus size={14} aria-hidden />}
          {open ? "Show less" : `and ${moreServices.length} more`}
        </button>
      </li>
    </ul>
  );
}
