export type RCCLEvent = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
};

// [X] — RCCL's company profile did not list specific events, so these are
// placeholder entries matching the kinds of events a firm with an active
// apprenticeship programme and public-sector portfolio typically runs.
// Replace with real dates and details before publishing.
export const events: RCCLEvent[] = [
  {
    slug: "rammed-earth-apprenticeship-open-day",
    title: "Rammed Earth Apprenticeship Open Day",
    date: "[X]",
    location: "Juba, South Sudan",
    description: "An introduction to RCCL's apprenticeship programme for anyone interested in training in rammed earth construction.",
    status: "upcoming",
  },
  {
    slug: "site-visit-current-build",
    title: "Site Visit — Current Rammed Earth Build",
    date: "[X]",
    location: "[X], Juba",
    description: "A guided walkthrough of an active rammed earth site for prospective clients, NGOs, and partners.",
    status: "upcoming",
  },
  {
    slug: "construction-materials-expo",
    title: "South Sudan Construction & Materials Expo",
    date: "[X]",
    location: "Juba, South Sudan",
    description: "RCCL exhibits its rammed earth and construction materials supply capability.",
    status: "past",
  },
];
