import { MessageCircle } from "lucide-react";
import { services, socials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Availability() {
  return (
    <section aria-labelledby="available-title" className="px-5 py-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-[2px]">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-gold via-coral to-teal" />
        <div className="relative rounded-[calc(2rem-2px)] bg-surface px-6 py-10 sm:px-12">
          <div aria-hidden className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-coral/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="font-mono text-sm font-semibold tracking-widest text-gold-text uppercase">Open for work 🚀</p>
              <h2 id="available-title" className="font-display mt-2 text-3xl leading-tight font-bold sm:text-4xl">
                Available for Computer Science &amp; IT tasks <span className="text-gradient">at fair rates.</span>
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services offered">
                {services.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-coral">
                    {s}
                  </li>
                ))}
                <li className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted">…and more</li>
              </ul>
            </div>
            <div className="lg:text-right">
              <p className="font-display text-2xl font-bold">Just hit me up! 🚀</p>
              <p className="mt-1 text-muted">Tell me what you need — I&apos;ll reply fast.</p>
              <a
                href={socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 inline-flex items-center gap-2 rounded-full px-7 py-3.5"
              >
                <MessageCircle size={18} aria-hidden /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
