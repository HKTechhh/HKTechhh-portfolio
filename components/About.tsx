import { stats } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            A builder who <span className="text-gradient">ships real products.</span>
          </>
        }
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m <strong className="text-fg">Hadson Mumo (HKTechhh)</strong> — a full-stack software developer and freelance writer based in
            Nairobi, Kenya. I hold a BSc in Computer Science from <strong className="text-fg">Maseno University</strong>, and I&apos;m comfortable
            across the whole stack: database design, APIs, automation and the final polish on the UI.
          </p>
          <p>
            I run <strong className="text-fg">HKTechhh Solutions</strong>, a digital services venture offering web &amp; app development, AI
            subscriptions, proxies and virtual numbers. I&apos;m also building{" "}
            <strong className="text-fg">Write Chap Chap</strong>, a freelance writing marketplace with M-Pesa payments for the Kenyan market.
          </p>
          <p>
            I like owning problems end to end — founder mindset, engineering depth, and a habit of automating anything I have to do twice.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="card p-6"
                style={{ ["--a" as string]: ["#FFB400", "#FF5A5F", "#14B8A6", "#FF8A3D"][i] }}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl font-bold text-gradient">{s.value}</dd>
                <p aria-hidden className="mt-1 text-sm font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
