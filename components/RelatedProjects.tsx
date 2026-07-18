import Link from "next/link";
import { Eyebrow, Section, GhostLink } from "./UI";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { getProjectBySlug } from "@/content/projects";

export default function RelatedProjects({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (related.length === 0) return null;

  return (
    <Section>
      <div className="flex items-end justify-between mb-10">
        <div>
          <Eyebrow>Related work</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold">See it built</h2>
        </div>
        <GhostLink href="/portfolio">All projects</GhostLink>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {related.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
            <PhotoPlaceholder label={p.name} aspect="aspect-[4/3]" />
            <div className="mt-3 flex items-baseline justify-between">
              <span className="font-medium group-hover:text-signal transition-colors">{p.name}</span>
              <span className="text-xs uppercase tracking-[0.08em] text-ink/50">{p.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
