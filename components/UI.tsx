import Link from "next/link";
import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-signal mb-3">
      {children}
    </span>
  );
}

export function SectionKicker({ index, label, tone = "light" }: { index: string; label: string; tone?: "light" | "dark" }) {
  const labelColor = tone === "dark" ? "text-white/50" : "text-ink/50";
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-display text-xs font-bold text-signal">{index}</span>
      <span className="w-8 h-px bg-signal" aria-hidden="true" />
      <span className={`text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold ${labelColor}`}>{label}</span>
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-rccl">{children}</div>
    </section>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-signal text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink transition-colors duration-200 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-ink text-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 -mx-4 -my-2 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-signal hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
