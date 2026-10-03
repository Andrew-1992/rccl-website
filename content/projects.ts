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
  heroPhoto?: string;
  images: string[];
  serviceSlug: string;
  serviceLabel: string;
  location: string;
  year: string;
  resultLine: string;
  quote?: ProjectQuote;
};

export const projects: Project[] = [
  {
    slug: "rivonia-luxury-apartment",
    name: "Rivonia Luxury Apartment",
    heroPhoto: "/projects/rivonia-luxury-apartments.jpg",
    images: [
      "/projects/rivonia-luxury-apartments.jpg",
      "/projects/rivonia-luxury-apartments-2.jpg",
      "/projects/rivonia-luxury-apartments-3.jpg",
      "/projects/rivonia-luxury-apartments-4.jpg",
    ],
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Balpam, Juba",
    year: "2026",
    resultLine: "A luxurious residential apartment, Juba.",
  },
  {
    slug: "peace-garden-arts-center",
    name: "Peace Garden Arts Center",
    heroPhoto: "/projects/peace-gardens.jpg",
    images: [
      "/projects/peace-gardens.jpg",
      "/projects/peace-gardens-2.jpg",
      "/projects/peace-gardens-3.jpg",
      "/projects/peace-gardens-4.jpg",
    ],
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Luri County, Juba",
    year: "2025",
    resultLine: "A community arts center designed for Luri County, Juba.",
  },
  {
    slug: "thongpiny-apartments",
    name: "Thongpiny Apartments",
    heroPhoto: "/projects/thongpiny-apartments.jpg",
    images: [
      "/projects/thongpiny-apartments.jpg",
      "/projects/thongpiny-apartments-2.jpg",
      "/projects/thongpiny-apartments-3.jpg",
      "/projects/thongpiny-apartments-4.jpg",
    ],
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Thongpiny, Juba South",
    year: "2025",
    resultLine: "A multi-storey residential apartment building in Thongpiny.",
  },
  {
    slug: "mr-box-container-offices-retail",
    name: "Mr. Box Container Offices and Retail",
    heroPhoto: "/projects/mr-box-container-offices.jpg",
    images: [
      "/projects/mr-box-container-offices.jpg",
      "/projects/mr-box-container-offices-2.jpg",
      "/projects/mr-box-container-offices-3.jpg",
      "/projects/mr-box-container-offices-4.jpg",
      "/projects/mr-box-container-offices-5.jpg",
    ],
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Opposite Nile Pet, Juba",
    year: "2025",
    resultLine: "A container-based office and retail development opposite Nile Pet, Juba.",
  },
  {
    slug: "entrepreneurship-innovation-hub",
    name: "Entrepreneurship & Innovation Hub",
    heroPhoto: "/projects/entrepreneurship-hub.jpg",
    images: [
      "/projects/entrepreneurship-hub.jpg",
      "/projects/entrepreneurship-hub-2.jpg",
      "/projects/entrepreneurship-hub-3.jpg",
      "/projects/entrepreneurship-hub-4.jpg",
    ],
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Custom, Juba",
    year: "2025",
    resultLine: "A dedicated hub supporting entrepreneurship and innovation in Juba.",
  },
  {
    slug: "liberty-apartments-offices",
    name: "Liberty Apartments & Offices",
    heroPhoto: "/projects/liberty-apartments.jpg",
    images: [
      "/projects/liberty-apartments.jpg",
      "/projects/liberty-apartments-2.jpg",
      "/projects/liberty-apartments-3.jpg",
    ],
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Monrovia, Liberia",
    year: "2024",
    resultLine: "A mixed apartment and office development in Monrovia, Liberia — RCCL's design work beyond South Sudan.",
  },
  {
    slug: "ayendit-medical-center",
    name: "Ayendit Medical Center for Women & Children",
    heroPhoto: "/projects/ayendit-medical-center.jpg",
    images: [
      "/projects/ayendit-medical-center.jpg",
      "/projects/ayendit-medical-center-2.jpg",
      "/projects/ayendit-medical-center-3.jpg",
      "/projects/ayendit-medical-center-4.jpg",
      "/projects/ayendit-medical-center-5.jpg",
      "/projects/ayendit-medical-center-6.jpg",
    ],
    serviceSlug: "general-construction",
    serviceLabel: "General Construction",
    location: "Bilyang, Bor Road",
    year: "2023",
    resultLine: "A medical center for women and children on Bor Road.",
  },
  {
    slug: "nyakuron-west-villa",
    name: "Nyakuron West Villa",
    heroPhoto: "/projects/nyakuron-west-villa.jpg",
    images: [
      "/projects/nyakuron-west-villa.jpg",
      "/projects/nyakuron-west-villa-2.jpg",
      "/projects/nyakuron-west-villa-3.jpg",
      "/projects/nyakuron-west-villa-4.jpg",
      "/projects/nyakuron-west-villa-5.jpg",
      "/projects/nyakuron-west-villa-6.jpg",
    ],
    serviceSlug: "architectural-design",
    serviceLabel: "Architectural Design",
    location: "Nyakuron West, Juba",
    year: "2023",
    resultLine: "A private residential villa in Nyakuron West, Juba.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.serviceSlug === serviceSlug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return projects[0];
  }
  return projects[(index + 1) % projects.length];
}
