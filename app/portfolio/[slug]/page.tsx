import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  projects,
  getProjectBySlug,
  getNextProject,
} from "@/content/projects";

import { Section, Eyebrow, GhostLink } from "@/components/UI";
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

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  const facts = [
    { label: "Location", value: project.location },
    { label: "Service type", value: project.serviceLabel },
    { label: "Year completed", value: project.year },
  ];

  return (
    <>
      {/* 1. HEADER — project name, location, large hero photo */}
      <section className="relative bg-ink text-white">
        <div className="relative aspect-square overflow-hidden bg-ink/5 md:aspect-[21/9]">
          {project.heroPhoto ? (
            <Image
              src={project.heroPhoto}
              alt={project.name}
              fill
              sizes="100vw"
              className="object-cover opacity-90"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-ink/10 text-sm text-white/50">
              No project image available
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-rccl pb-8 md:pb-12">
            <span className="mb-3 block text-xs uppercase tracking-[0.14em] text-white/70">
              {project.serviceLabel} &middot; {project.location}
            </span>

            <h1 className="max-w-3xl font-display text-3xl font-bold leading-[1.02] md:text-6xl">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. PROJECT SUMMARY + FACTS SIDEBAR */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="space-y-16">
            <div>
              <Eyebrow>About this project</Eyebrow>
              <p className="max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
                {project.resultLine}
              </p>
            </div>

            {/* CLIENT QUOTE */}
            {project.quote && (
              <blockquote className="border-l-2 border-signal py-1 pl-6">
                <p className="font-display text-xl leading-snug md:text-2xl">
                  {project.quote.text}
                </p>

                <footer className="mt-3 text-xs uppercase tracking-[0.1em] text-ink/55">
                  {project.quote.attribution}
                </footer>
              </blockquote>
            )}
          </div>

          {/* FACTS SIDEBAR */}
          <aside className="h-fit border border-line p-6 lg:sticky lg:top-28 md:p-8">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
              Project facts
            </h2>

            <dl className="space-y-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex justify-between gap-4 border-b border-line pb-3 text-sm last:border-none last:pb-0"
                >
                  <dt className="text-ink/55">{f.label}</dt>

                  <dd className="text-right font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href={`/services/${project.serviceSlug}`}
              className="mt-8 inline-block border-b border-ink pb-1 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:border-signal hover:text-signal"
            >
              View this service
            </Link>
          </aside>
        </div>
      </Section>

      {/* PHOTO GALLERY */}
      <ProjectGallery images={project.images} />

      <div className="container-rccl pb-12">
        <GhostLink href="/portfolio">
          &larr; Back to all projects
        </GhostLink>
      </div>

      {/* NEXT PROJECT */}
      <NextProjectTeaser project={nextProject} />

      <CTABand heading="Want a project like this one?" />
    </>
  );
}
