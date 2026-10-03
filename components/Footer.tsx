import { ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";
import { socialIcons } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} <strong className="text-fg">Hadson Mumo</strong> · HKTechhh Solutions · Nairobi, Kenya
        </p>
        <ul className="flex items-center gap-2" aria-label="Social links">
          {socials.map((s) => {
            const Icon = socialIcons[s.id];
            return (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-coral-text"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
          <li>
            <a href="#top" aria-label="Back to top" className="btn-ghost ml-2 grid h-10 w-10 place-items-center rounded-full">
              <ArrowUp size={18} aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
