export type Testimonial = {
  quote: string;
  attribution: string;
  org?: string;
};

// [X] — placeholder pending real client testimonials from RCCL. Not
// fabricated: RCCL's company profile did not include client quotes, so
// this stays an explicit placeholder rather than an invented quote
// attributed to a real client or project.
export const testimonials: Testimonial[] = [
  {
    quote: "[X] — add a client testimonial here once available.",
    attribution: "[Client name / role]",
    org: "[Client organization]",
  },
];
