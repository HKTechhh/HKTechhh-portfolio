import { GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export function Journey() {
  return (
    <section id="journey" className="relative py-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface-2/60" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Ventures & experience"
          title={
            <>
              Founder first, <span className="text-gradient">engineer always.</span>
            </>
          }
        />

        <ol className="relative ml-3 border-l-2 border-line sm:ml-4">
          {experience.map((e, i) => (
            <li key={e.role} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[11px] h-5 w-5 rounded-full border-4 border-bg"
                style={{ background: e.a }}
              />
              <Reveal delay={i * 0.05}>
                <div className="card p-6" style={{ ["--a" as string]: e.a }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-bold">{e.role}</h3>
                    <span className="font-mono text-sm font-semibold text-sky-text">{e.period}</span>
                  </div>
                  <p className="mt-0.5 font-medium text-ice-text">{e.org}</p>
                  <ul className="mt-3 space-y-2 text-muted">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: e.a }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div id="education" className="mt-20">
          <SectionHeading eyebrow="Education" title={<>Where the foundations <span className="text-gradient">were built.</span></>} />
          <div className="grid gap-5 sm:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.title} delay={i * 0.08}>
                <div className="card flex h-full items-start gap-4 p-6" style={{ ["--a" as string]: i ? "#2FA36B" : "#48CAE4" }}>
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[#10142a]"
                    style={{ background: i ? "linear-gradient(135deg,#2FA36B,#90E0EF)" : "linear-gradient(135deg,#48CAE4,#0096C7)" }}
                  >
                    <GraduationCap size={24} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{ed.title}</h3>
                    <p className="mt-0.5 font-medium text-ice-text">{ed.org}</p>
                    <p className="mt-1 font-mono text-sm text-muted">{ed.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
