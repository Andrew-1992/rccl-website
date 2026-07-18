import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/UI";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "RCCL's project portfolio — rammed earth, general construction, and architectural design work delivered across South Sudan and the region.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work we can point to."
        intro="Projects delivered and proposed across South Sudan since 2022 — filter by service to see how each discipline plays out on the ground."
      />
      <Section>
        <ProjectsGrid projects={projects} services={services} />
      </Section>
      <CTABand heading="Have a site and a brief already?" buttonLabel="Start a project" />
    </>
  );
}
