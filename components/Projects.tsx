import { projects, type Project } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

function Block({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color }}>
        {label}
      </p>
      <div className="mt-1 text-[0.95rem] leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function ProjectCard({ p, wide }: { p: Project; wide?: boolean }) {
  return (
    <article
      className={`card relative flex h-full flex-col overflow-hidden ${wide ? "lg:col-span-2" : ""}`}
      style={{ ["--a" as string]: p.a }}
    >
      <div aria-hidden className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${p.a}, ${p.b})` }} />
      <div
        aria-hidden
        className="absolute -right-10 top-4 select-none font-display text-[9rem] leading-none font-bold opacity-[0.07]"
      >
        {p.n}
      </div>

      <div className="relative flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest text-muted uppercase">{p.tag}</p>
            <h3 className="font-display mt-1 text-2xl font-bold sm:text-3xl">{p.title}</h3>
          </div>
          <span
            className="shrink-0 rounded-full px-3 py-1 text-xs font-bold text-[#10142a]"
            style={{ background: `linear-gradient(90deg, ${p.a}, ${p.b})` }}
          >
            {p.status}
          </span>
        </div>

        <div className={`mt-6 grid gap-5 ${wide ? "lg:grid-cols-2" : ""}`}>
          <Block label="Problem" color="var(--sky-text)">
            {p.problem}
          </Block>
          <Block label="Outcome" color="var(--leaf-text)">
            {p.outcome}
          </Block>
        </div>

        <div className="mt-6 flex-1" />
        <Block label="Stack" color="var(--ice-text)">
          <ul className="mt-2 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="rounded-lg border border-line bg-bg px-2.5 py-1 font-mono text-xs font-medium text-fg">
                {s}
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Featured projects"
        title={
          <>
            Case studies, <span className="text-gradient">not screenshots.</span>
          </>
        }
        desc="Each build: the problem I started with, the stack I chose, and what came out the other side."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.n} delay={(i % 2) * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard p={p} wide={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
