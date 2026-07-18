export type ProjectQuote = {
  text: string;
  attribution: string;
};

export type OutcomeStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  serviceSlug: string;
  serviceLabel: string;
  location: string;
  sizeSqm: string;
  duration: string;
  year: string;
  resultLine: string;
  challenge: string;
  approach: string;
  technique: string;
  outcome: string;
  outcomeStat?: OutcomeStat;
  quote?: ProjectQuote;
  /**
   * Photo gallery — plain list of captions. Each entry renders as one image
   * slot on the project page. To add a photo, add a caption string here; no
   * layout or component changes are needed.
   */
  gallery: string[];
};

// Sourced from RCCL's company profile (Portfolio 2023 / 2024 / 2025).
// Project name, location, and year are as stated in that document.
// Everything else — challenge, approach, outcome detail, size, duration,
// quotes — was not included in the source material, so it's marked [X]
// for RCCL to confirm rather than invented.

export const projects: Project[] = [
  // — Portfolio 2025 —
  {
    slug: "peace-garden-arts-center",
    name: "PEACE Garden Arts Center",
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Luri County, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2025",
    resultLine: "A community arts center designed for Luri County, Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Institutional/cultural building design. [X] — construction technique and materials to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Exterior render, entrance approach", "Site landscaping and courtyard"],
  },
  {
    slug: "thongpiny-apartments",
    name: "THONGPINY Apartments",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Thongpiny, Juba South",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2025",
    resultLine: "A multi-storey residential apartment building in Thongpiny.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Multi-storey residential construction with landscaped balcony terraces. [X] — structural system to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Facade detail, planted balconies", "Building elevation, street view"],
  },
  {
    slug: "entrepreneurship-innovation-hub",
    name: "Entrepreneurship and Innovation HUB",
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Custom, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2025",
    resultLine: "A dedicated hub supporting entrepreneurship and innovation in Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Mixed-use institutional design with landscaped public realm. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Aerial site render", "Landscaped courtyard and pathways"],
  },
  {
    slug: "mr-box-container-offices-retail",
    name: "Mr. BOX Container Offices and Retail",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Opposite Nile Pet, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2025",
    resultLine: "A container-based office and retail development opposite Nile Pet, Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Adaptive container-based construction for commercial and retail use. [X] — technique detail to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Container units, retail frontage", "Courtyard seating area"],
  },

  // — Portfolio 2024 —
  {
    slug: "liberty-apartments-offices",
    name: "Liberty Apartments & Offices",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Monrovia, Liberia",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2024",
    resultLine: "A mixed apartment and office development in Monrovia, Liberia — RCCL's design work beyond South Sudan.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Mixed-use residential and office building with arched, screened facades. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Facade detail, arched screens", "Street-level view"],
  },
  {
    slug: "ayendit-medical-center",
    name: "Ayendit Medical Center for Women & Children",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Bilyang, Bor Road",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2024",
    resultLine: "A medical center for women and children on Bor Road.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Healthcare facility design and construction. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Entrance and approach", "Site context view"],
  },
  {
    slug: "freedom-hall-building-proposal",
    name: "Freedom Hall Building Proposal",
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Customs, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2024",
    resultLine: "A design proposal for a public hall in the Customs area of Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Public building design proposal, site plan and massing study. [X] — further detail to be confirmed.",
    outcome: "Design proposal stage — [X] to be confirmed if progressed to construction.",
    gallery: ["Site plan", "Massing render"],
  },
  {
    slug: "mr-pach-bill-family-residence",
    name: "Mr. Pach Bill Family Residence",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Gudele Block 1, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2024",
    resultLine: "A private family residence in Gudele Block 1, Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Private residential villa construction. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Interior, living space", "Facade detail, timber screens"],
  },

  // — Portfolio 2023 —
  {
    slug: "melut-county-community-hospital",
    name: "Melut County Community Hospital",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Melut County, Upper Nile State",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2023",
    resultLine: "A community hospital serving Melut County, Upper Nile State.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Healthcare facility design and construction. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Exterior approach view", "Landscaped grounds"],
  },
  {
    slug: "south-sudan-national-archives-proposal",
    name: "South Sudan National Archives Building Proposal",
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Customs, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2023",
    resultLine: "A design proposal for South Sudan's National Archives building.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Institutional archive building design proposal. [X] — further detail to be confirmed.",
    outcome: "Design proposal stage — [X] to be confirmed if progressed to construction.",
    gallery: ["Aerial site render", "Building facade study"],
  },
  {
    slug: "hai-jebel-residential-villa",
    name: "01 Hai Jebel Residential Villa",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Hai Jebel, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2023",
    resultLine: "A private residential villa in Hai Jebel, Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Private residential villa construction. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Facade, street view", "Entrance detail"],
  },
  {
    slug: "mia-saba-mixed-use-apartments",
    name: "Mia Saba Mixed Use Apartments",
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Mia Saba, Juba",
    sizeSqm: "[X] m²",
    duration: "[X]",
    year: "2023",
    resultLine: "A mixed-use apartment development in Mia Saba, Juba.",
    challenge: "[X] — project brief and challenge to be confirmed.",
    approach: "[X] — design approach to be confirmed.",
    technique: "Mixed-use residential and ground-floor commercial construction. [X] — construction technique to be confirmed.",
    outcome: "[X] — outcome and impact to be added following delivery.",
    gallery: ["Building elevation", "Ground-floor frontage"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByService(serviceSlug: string) {
  return projects.filter((p) => p.serviceSlug === serviceSlug);
}

/**
 * Returns the next project in the list after the given slug, wrapping
 * around to the first project at the end — used for the "Next project"
 * teaser at the bottom of each project detail page.
 */
export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
