"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/content/projects";
import { Service } from "@/content/services";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function ProjectsGrid({
  projects,
  services,
}: {
  projects: Project[];
  services: Service[];
}) {
  const [activeSlug, setActiveSlug] = useState<string | "all">("all");
  const filtered = activeSlug === "all" ? projects : projects.filter((p) => p.serviceSlug === activeSlug);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by service">
        <FilterButton active={activeSlug === "all"} onClick={() => setActiveSlug("all")}>
          All work
        </FilterButton>
        {services.map((s) => (
          <FilterButton key={s.slug} active={activeSlug === s.slug} onClick={() => setActiveSlug(s.slug)}>
            {s.shortName}
          </FilterButton>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink/60 py-12">No projects in this category yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                {p.heroPhoto ? (
                  <Image
                    src={`/${p.heroPhoto}`}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <PhotoPlaceholder label={p.name} aspect="aspect-[4/3]" className="transition-transform duration-500 group-hover:scale-[1.03]" />
                )}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.1em] text-signal font-semibold">{p.serviceLabel}</span>
                  <h3 className="font-display text-xl font-bold mt-1 group-hover:text-signal transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink/60 mt-1">{p.location} &middot; {p.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.08em] border transition-colors duration-200 ${
        active ? "bg-ink text-white border-ink" : "border-line text-ink/70 hover:border-ink"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
