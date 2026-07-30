import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/UI";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Portfolio | Rammed Earth Construction Ltd",
  description: "Rammed Earth Construction Limited's project portfolio | rammed earth, general construction, and architectural design work delivered across South Sudan and the region.",
};

// Hidden from the portfolio grid per direction — their individual project
// pages still exist and still work if linked directly, they just don't
// appear in this listing.
const hiddenSlugs = [
  "hai-jebel-residential-villa",
  "mia-saba-mixed-use-apartments",
  "south-sudan-national-archives-proposal",
  "mr-pach-bill-family-residence",
  "entrepreneurship-innovation-hub",
  "mr-box-container-offices-retail",
];

const visibleProjects = projects.filter((p) => !hiddenSlugs.includes(p.slug));

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work we can point to."
        intro="Projects delivered and proposed across South Sudan since 2022 — filter by service to see how each discipline plays out on the ground."
      />
      <Section>
        <ProjectsGrid projects={visibleProjects} services={services} />
      </Section>
      <CTABand heading="Have a site and a brief already?" buttonLabel="Start a project" />
    </>
  );
}