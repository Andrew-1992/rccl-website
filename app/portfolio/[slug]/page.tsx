import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, getNextProject } from "@/content/projects";
import { Section, Eyebrow, GhostLink } from "@/components/UI";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import ProjectGallery from "@/components/ProjectGallery";
import NextProjectTeaser from "@/components/NextProjectTeaser";
import CTABand from "@/components/CTABand";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.name} — ${project.serviceLabel} in ${project.location}. ${project.resultLine}`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);

  const facts = [
    { label: "Location", value: project.location },
    { label: "Size", value: project.sizeSqm },
    { label: "Duration", value: project.duration },
    { label: "Service type", value: project.serviceLabel },
    { label: "Year completed", value: project.year },
  ];

  return (
    <>
      {/* 1. HEADER — project name, location, large hero photo */}
      <section className="relative bg-ink text-white">
        <PhotoPlaceholder label={`${project.name} — hero`} aspect="aspect-[16/9] md:aspect-[21/9]" className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-rccl pb-8 md:pb-12">
            <span className="block text-xs uppercase tracking-[0.14em] text-white/70 mb-3">
              {project.serviceLabel} &middot; {project.location}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-6xl leading-[1.02] max-w-3xl">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <div className="space-y-16">
            {/* 3. CHALLENGE + 4. APPROACH */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <Eyebrow>Challenge</Eyebrow>
                <p className="text-sm md:text-base text-ink/75 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <Eyebrow>Approach</Eyebrow>
                <p className="text-sm md:text-base text-ink/75 leading-relaxed">{project.approach}</p>
              </div>
            </div>

            {/* 5. MATERIALS / TECHNIQUE */}
            <div>
              <Eyebrow>Materials &amp; technique</Eyebrow>
              <p className="text-sm md:text-base text-ink/75 leading-relaxed max-w-3xl">{project.technique}</p>
            </div>

            {/* 7. CLIENT QUOTE */}
            {project.quote && (
              <blockquote className="border-l-2 border-signal pl-6 py-1">
                <p className="font-display text-xl md:text-2xl leading-snug">{project.quote.text}</p>
                <footer className="mt-3 text-xs uppercase tracking-[0.1em] text-ink/55">
                  {project.quote.attribution}
                </footer>
              </blockquote>
            )}

            {/* 8. OUTCOME */}
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end border-t border-line pt-10">
              <div>
                <Eyebrow>Outcome</Eyebrow>
                <p className="text-sm md:text-base text-ink/75 leading-relaxed max-w-2xl">{project.outcome}</p>
              </div>
              {project.outcomeStat && (
                <div className="shrink-0 text-left md:text-right">
                  <div className="font-display text-4xl md:text-5xl font-bold text-signal leading-none">
                    {project.outcomeStat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.1em] text-ink/55 mt-2 max-w-[180px] md:ml-auto">
                    {project.outcomeStat.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. FACTS SIDEBAR */}
          <aside className="lg:sticky lg:top-28 h-fit border border-line p-6 md:p-8">
            <h2 className="text-xs uppercase tracking-[0.14em] font-semibold text-ink/60 mb-6">Project facts</h2>
            <dl className="space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 text-sm border-b border-line pb-3 last:border-none last:pb-0">
                  <dt className="text-ink/55">{f.label}</dt>
                  <dd className="font-medium text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={`/services/${project.serviceSlug}`}
              className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.08em] border-b border-ink pb-1 hover:border-signal hover:text-signal transition-colors"
            >
              View this service
            </Link>
          </aside>
        </div>
      </Section>

      {/* 6. PHOTO GALLERY */}
      <ProjectGallery images={project.gallery} />

      <div className="container-rccl pb-12">
        <GhostLink href="/portfolio">&larr; Back to all projects</GhostLink>
      </div>

      {/* 9. NEXT PROJECT */}
      <NextProjectTeaser project={nextProject} />

      <CTABand heading="Want a project like this one?" />
    </>
  );
}
