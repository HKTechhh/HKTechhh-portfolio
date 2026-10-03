"use client";

import { useState } from "react";
import { Download, Mail, Send } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { DiscordIcon, socialIcons } from "./Icons";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-coral";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(profile.discord);
    } catch {
      /* clipboard unavailable — username is still visible on the button */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] p-[2px]">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-gold via-coral to-teal" />
        <div className="relative rounded-[calc(2.5rem-2px)] bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div aria-hidden className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div aria-hidden className="absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-sm font-semibold tracking-widest text-coral-text uppercase">Contact</p>
              <h2 className="font-display mt-2 text-4xl leading-tight font-bold sm:text-5xl">
                Got a project? <span className="text-gradient">Let&apos;s build it.</span>
              </h2>
              <p className="mt-4 text-lg text-muted">
                Web development, Python/JavaScript, automation, simulation, data entry, AI, SPSS, Matlab, Excel, research reports, editing and
                more — at fair rates. Just hit me up! 🚀
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {socials.map((s) => {
                  const Icon = socialIcons[s.id];
                  return (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost flex items-center gap-3 rounded-2xl p-3.5"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: s.color }}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold">{s.label}</span>
                          <span className="block truncate text-sm font-normal text-muted">{s.handle}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
                <li className="sm:col-span-2">
                  <button
                    type="button"
                    onClick={copyDiscord}
                    className="btn-ghost flex w-full items-center gap-3 rounded-2xl p-3.5 text-left"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: "#5865F2" }}>
                      <DiscordIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold">Discord</span>
                      <span className="block truncate text-sm font-normal text-muted">{profile.discord}</span>
                    </span>
                    <span role="status" className="shrink-0 rounded-full bg-bg px-3 py-1 font-mono text-xs font-semibold text-teal-text">
                      {copied ? "Copied ✓" : "Click to copy"}
                    </span>
                  </button>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-3">
                  <Mail size={18} aria-hidden /> {profile.email}
                </a>
                <a href="/Hadson_Mumo_CV.pdf" download className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3">
                  <Download size={18} aria-hidden /> Download CV
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                  Your name
                </label>
                <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                  Your email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={field} />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                  What do you need?
                </label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project…" className={`${field} resize-y`} />
              </div>
              <button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5">
                <Send size={18} aria-hidden /> Send message
              </button>
              <p role="status" className="min-h-5 text-center text-sm text-muted">
                {sent ? "Opening your email app… prefer chat? Message me on WhatsApp." : "Opens your email app with the message ready to send."}
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
