export type ServiceStep = {
  title: string;
  detail: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  flagship?: boolean;
  definition: string;
  whoFor: string;
  whoForList?: string[];
  process: ServiceStep[];
  materials: string[];
  relatedProjectSlugs: string[];
  ctaLabel: string;
  metaDescription: string;
  // Rammed Earth only — the sustainability + performance case
  whyItMatters?: { sustainability: string; performance: string };
  // General Construction only — building types/scales handled
  capabilities?: string[];
  // Architectural Design only — ties design to material honesty / climate response
  designPhilosophy?: string;
  // Project Management & Consultation only — concrete client-facing benefits
  whatClientsGet?: string[];
};

export const services: Service[] = [
  {
    slug: "rammed-earth-construction",
    name: "Rammed Earth Construction",
    shortName: "Rammed Earth",
    oneLiner: "Compacted earth walls, engineered to modern load and climate standards.",
    flagship: true,
    definition:
      "Rammed earth construction compacts moistened local soil, in layers, inside temporary formwork until it cures into a solid load-bearing wall. RCCL engineers the mix, the compaction ratio, and the wall section to meet the same structural standards as concrete or block — while cutting embodied carbon and holding a stable indoor temperature through Juba's heat.",
    whoFor:
      "Clients who need a building to perform for decades in South Sudan's climate without a high energy bill attached to it.",
    whoForList: [
      "Residential clients building a family home meant to last generations, not just a mortgage term.",
      "Institutional and NGO builds — clinics, offices, training centres — with public accountability for sustainability spend.",
      "Low-carbon developments where embodied carbon is tracked and reported, not just implied.",
    ],
    whyItMatters: {
      sustainability:
        "A rammed earth wall uses the soil already on site, so most of the embodied carbon a concrete or block wall carries — extraction, firing, cement manufacture, haulage — simply doesn't happen. Only the stabilizer fraction, typically 5–8% by volume, needs to travel any distance at all.",
      performance:
        "Thick compacted earth has the thermal mass to absorb daytime heat and release it slowly overnight, flattening the indoor temperature swing that a thin block or sheet-metal building tracks almost in real time with the outside air — without a generator running to compensate.",
    },
    process: [
      { title: "Soil testing", detail: "We test local soil composition, grain size, and moisture content to confirm suitability and set the stabilization mix." },
      { title: "Structural engineering", detail: "Wall thickness, footing depth, and reinforcement are calculated against local building code and load requirements." },
      { title: "Formwork setup", detail: "Reusable steel or timber formwork is set to the engineered wall geometry on site." },
      { title: "Layer compaction", detail: "Stabilized soil is placed and mechanically compacted in 100–150mm lifts until the wall is fully built." },
      { title: "Curing and finishing", detail: "Walls cure over 2–4 weeks under controlled conditions before openings, lintels, and finishes are completed." },
      { title: "Handover inspection", detail: "An independent structural check and a full documentation package are delivered with every handover." },
    ],
    materials: [
      "Locally sourced subsoil (low organic content, engineered grain distribution)",
      "Cement or lime stabilizer at 5–8% by volume, per structural spec",
      "Reusable steel/timber formwork system",
      "Mechanical pneumatic rammers for consistent compaction density",
    ],
    relatedProjectSlugs: [],
    ctaLabel: "Ask about a rammed earth feasibility assessment",
    metaDescription:
      "Rammed earth construction in Juba, South Sudan — low-carbon, thermally intelligent walls engineered to modern structural standards by RCCL.",
  },
  {
    slug: "general-construction",
    name: "General Construction",
    shortName: "General Construction",
    oneLiner: "Conventional residential, commercial, and institutional building, done to spec.",
    definition:
      "For projects where conventional materials are the right call — block, concrete frame, steel roofing — RCCL runs the same disciplined process as our rammed earth work: engineered drawings, sequenced procurement, and a fixed handover date. We build residential, commercial, and institutional structures across Juba and the surrounding region.",
    whoFor:
      "Clients with a fixed brief and timeline who need conventional construction delivered without surprises.",
    whoForList: [
      "Private developers building to a fixed budget and a fixed date.",
      "Retail and office fit-outs inside an existing shell.",
      "Institutional clients expanding an existing facility.",
      "Hybrid projects that pair rammed earth walls with a conventional frame, roof, or fit-out.",
    ],
    capabilities: [
      "Villa and Home Construction",
      "Road Construction",
      "Bridge Construction",
      "Renovation Works",
      "Civil & MEP Engineering",
      "Construction Materials Supply",
      "Commercial — retail, office, and warehouse/logistics space",
      "Institutional — clinics, schools, and government facilities",
    ],
    process: [
      { title: "Site survey", detail: "Topographic and soil survey to confirm foundation design and site logistics." },
      { title: "Drawings and permits", detail: "Structural and architectural drawings finalized and submitted for local approval." },
      { title: "Procurement", detail: "Materials and subcontractors are locked in against a fixed project schedule before groundbreaking." },
      { title: "Construction", detail: "Phased build with weekly progress reporting and an on-site project manager." },
      { title: "Snagging", detail: "A full defects check is run before the client walkthrough." },
      { title: "Handover", detail: "As-built drawings, warranties, and maintenance guidance are delivered at close-out." },
    ],
    materials: [
      "Reinforced concrete frame and footings",
      "Sandcrete or fired-clay block walling",
      "Steel truss or IBR roofing systems",
      "Standard MEP fit-out to client specification",
    ],
    relatedProjectSlugs: ["thongpiny-apartments", "mr-pach-bill-family-residence"],
    ctaLabel: "Get a General Construction Quote",
    metaDescription:
      "General construction services in Juba, South Sudan — residential, commercial, and institutional building from RCCL.",
  },
  {
    slug: "architectural-design",
    name: "Architectural Design",
    shortName: "Architectural Design",
    oneLiner: "Concept to construction drawings, built by the firm that has to build it.",
    definition:
      "RCCL's design team takes a brief from first concept sketch through to fully coordinated construction drawings. Because our designers work alongside the people who build the wall, every drawing is checked against buildability and cost before it's signed off — not after tender.",
    whoFor:
      "Clients who need a design that's grounded in what's actually constructible in Juba — from a single institutional building to a multi-phase masterplan.",
    whoForList: [
      "Clients who need design services only, with construction tendered separately.",
      "Clients starting a full build, where design is phase one of an RCCL-delivered project.",
      "Multi-phase masterplans needing a coordinated design strategy across several buildings.",
    ],
    designPhilosophy:
      "Good design here starts with the climate and the material, not the render. We design for orientation, shade, and cross-ventilation before we design for appearance — and we treat material honesty as a discipline: a wall should look like what it's made of, whether that's rammed earth, block, or concrete. That's the same ethos behind our rammed earth work, applied to every drawing that leaves this studio.",
    process: [
      { title: "Brief and site analysis", detail: "Client goals, budget envelope, and site conditions are documented and agreed in writing." },
      { title: "Concept design", detail: "Massing, orientation, and material strategy are developed and presented as options." },
      { title: "Design development", detail: "The selected concept is resolved into detailed plans, sections, and elevations." },
      { title: "Technical coordination", detail: "Structural, mechanical, and electrical drawings are coordinated into a single construction-ready set." },
      { title: "Approvals support", detail: "RCCL prepares and submits the drawing package required for local permitting." },
      { title: "Construction handoff", detail: "The design team stays engaged through early construction to resolve on-site queries." },
    ],
    materials: [
      "CAD and BIM-coordinated drawing sets",
      "Material and cost-option studies at concept stage",
      "Passive-design analysis for orientation, shading, and cross-ventilation",
    ],
    relatedProjectSlugs: ["peace-garden-arts-center", "south-sudan-national-archives-proposal"],
    ctaLabel: "Start a Design Consultation",
    metaDescription:
      "Architectural design services in Juba, South Sudan — concept to construction drawings from RCCL's in-house design team.",
  },
  {
    slug: "project-management-consultation",
    name: "Project Management & Consultation",
    shortName: "PM & Consultation",
    oneLiner: "Feasibility, cost control, and timeline oversight for someone else's build.",
    definition:
      "Not every client needs RCCL to lay the walls. Some need an independent, technically literate eye on a project someone else is building — a feasibility study before land is bought, a cost audit mid-build, or a client-side project manager holding a contractor to the programme, whether the underlying build is ours or a third party's.",
    whoFor:
      "Developers, NGOs, and government clients who need independent oversight or a feasibility assessment before committing capital.",
    whoForList: [
      "Developers evaluating a site or a contractor's proposal before commitment.",
      "NGOs and donors requiring independent technical oversight of funded construction.",
      "Government clients running procurement that needs a documented, defensible feasibility case.",
      "Clients running multi-contractor projects who need a single point of accountability.",
    ],
    whatClientsGet: [
      "Cost transparency — an independent benchmark against regional rates, not the contractor's own number.",
      "Risk flagged early — monthly variance reporting catches problems while they're still cheap to fix.",
      "A single point of accountability — one report, one contact, across every contractor on site.",
      "A written record — feasibility studies and close-out reports suitable for a donor or board file.",
    ],
    process: [
      { title: "Scoping call", detail: "We confirm what decision the client needs to make and by when." },
      { title: "Feasibility or audit", detail: "Site, cost, and programme review delivered as a written report with clear recommendations." },
      { title: "Ongoing oversight setup", detail: "Reporting cadence, cost-control thresholds, and escalation triggers are agreed." },
      { title: "Site monitoring", detail: "Scheduled site visits track progress, quality, and spend against the approved programme." },
      { title: "Cost and timeline reporting", detail: "Monthly reports flag variances early, while they're still cheap to fix." },
      { title: "Close-out review", detail: "A final report confirms the build matches spec before final payment is released." },
    ],
    materials: [
      "Independent cost benchmarking against regional rates",
      "Programme and critical-path scheduling tools",
      "Site quality-assurance checklists",
    ],
    relatedProjectSlugs: [],
    ctaLabel: "Request a Project Consultation",
    metaDescription:
      "Project management and construction consultation in Juba, South Sudan — feasibility, cost control, and timeline oversight from RCCL.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
