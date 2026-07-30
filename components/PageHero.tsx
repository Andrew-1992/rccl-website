import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-rccl pt-28 pb-14 md:pt-40 md:pb-20">
        <span className="block text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-white/60 mb-5">
          {eyebrow}
        </span>
        <h1 className="font-display font-bold leading-[1.02] text-4xl md:text-6xl max-w-3xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
