import { BarChart3, Bot, Cog, Layout, PenTool, Server, ShieldCheck } from "lucide-react";
import { marquee, skillGroups, type SkillGroup } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

const icons = {
  layout: Layout,
  server: Server,
  bot: Bot,
  shield: ShieldCheck,
  cog: Cog,
  chart: BarChart3,
  pen: PenTool,
} as const;

function SkillCard({ g }: { g: SkillGroup }) {
  const Icon = icons[g.icon];
  return (
    <article className="card group relative h-full overflow-hidden p-6" style={{ ["--a" as string]: g.a }}>
      <div
        aria-hidden
        className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-25 blur-2xl transition-opacity group-hover:opacity-60"
        style={{ background: `linear-gradient(135deg, ${g.a}, ${g.b})` }}
      />
      <div
        className="relative grid h-12 w-12 place-items-center rounded-2xl text-[#10142a]"
        style={{ background: `linear-gradient(135deg, ${g.a}, ${g.b})` }}
      >
        <Icon size={24} aria-hidden />
      </div>
      <h3 className="font-display relative mt-5 text-xl font-bold">{g.title}</h3>
      <p className="relative mt-1 text-sm text-muted">{g.blurb}</p>
      <ul className="relative mt-4 flex flex-wrap gap-2">
        {g.skills.map((s) => (
          <li key={s} className="rounded-lg border border-line bg-bg px-2.5 py-1 font-mono text-xs font-medium">
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Skills() {
  const loop = [...marquee, ...marquee];
  return (
    <section id="skills" className="relative py-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface-2/60" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Depth across the <span className="text-gradient">whole stack.</span>
            </>
          }
          desc="Grouped by what I actually do for clients — not just a wall of logos."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08}>
              <SkillCard g={g} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="marquee mt-16 overflow-hidden border-y border-line py-4" aria-hidden>
        <div className="marquee-track flex gap-10">
          {loop.map((m, i) => (
            <span key={i} className="font-display flex items-center gap-10 text-2xl font-bold text-muted/70 whitespace-nowrap">
              {m}
              <span className="text-sky">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
