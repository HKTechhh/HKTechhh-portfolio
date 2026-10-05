"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";

const TZ = "Africa/Nairobi"; // East Africa Time (EAT, UTC+3, no daylight saving)
const ZONE = "EAT"; // Intl only returns "GMT+3" for this zone, so the label is fixed

const timeFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: TZ,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});
const dateFmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", month: "short", day: "numeric" });

/** One snapshot per second, e.g. "10:42:15 AM|EAT|Sat, Oct 3". Strings compare by value, so React only re-renders when it changes. */
function snapshot() {
  const now = new Date();
  const parts = timeFmt.formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const time = `${get("hour")}:${get("minute")}:${get("second")} ${get("dayPeriod")}`;
  return `${time}|${ZONE}|${dateFmt.format(now)}`;
}

function subscribe(cb: () => void) {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
}

function useNairobiTime() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "");
  if (!raw) return null; // server render / first paint: avoid hydration mismatch
  const [time, zone, date] = raw.split("|");
  return { time, zone, date };
}

export function StatusClock({ compact = false }: { compact?: boolean }) {
  const t = useNairobiTime();

  if (compact) {
    return (
      <div
        className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold lg:flex"
        aria-label={`Online. Current Nairobi time ${t ? `${t.time} ${t.zone}` : ""}`}
      >
        <span className="pulse-dot h-2 w-2 rounded-full bg-leaf" aria-hidden />
        <span className="text-leaf-text">Online</span>
        <span className="h-3 w-px bg-line" aria-hidden />
        <span aria-hidden className="font-mono tabular-nums">
          {t ? `${t.time.replace(/:\d\d /, " ")} ${t.zone}` : "-- --"}
        </span>
      </div>
    );
  }

  return (
    <div className="card inline-flex flex-wrap items-center gap-x-5 gap-y-3 px-5 py-4" style={{ ["--a" as string]: "#2FA36B" }}>
      <div className="flex items-center gap-2.5">
        <span className="pulse-dot h-3 w-3 rounded-full bg-leaf" aria-hidden />
        <div>
          <p className="text-sm font-bold text-leaf-text">I&apos;m online</p>
          <p className="text-xs text-muted">Replying fast right now</p>
        </div>
      </div>
      <span className="hidden h-9 w-px bg-line sm:block" aria-hidden />
      <div className="flex items-center gap-2.5">
        <Clock size={20} className="text-sky-text" aria-hidden />
        <div>
          <p className="font-mono text-lg leading-tight font-bold tabular-nums" aria-label={t ? `${t.time} ${t.zone}` : "Loading time"}>
            {t ? t.time : "--:--:-- --"} <span className="text-sm text-sky-text">{t?.zone ?? ZONE}</span>
          </p>
          <p className="text-xs text-muted">Current Nairobi Time{t ? ` · ${t.date}` : ""}</p>
        </div>
      </div>
    </div>
  );
}
