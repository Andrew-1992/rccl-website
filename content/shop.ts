export type ShopCategory = {
  slug: string;
  name: string;
  description: string;
};

// Construction Materials Supply is one of RCCL's core services per the
// company profile; the profile doesn't list specific product SKUs, so
// these are the general material categories a construction materials
// supply line would carry — marked for RCCL to confirm exact stock.
export const shopCategories: ShopCategory[] = [
  {
    slug: "rammed-earth-stabilizer-mix",
    name: "Rammed Earth Stabilizer Mix",
    description: "Cement and lime stabilizer blends for rammed earth wall construction, mixed to RCCL's structural spec.",
  },
  {
    slug: "aggregate-subsoil",
    name: "Aggregate & Subsoil",
    description: "Tested, graded subsoil and aggregate for rammed earth and general construction use.",
  },
  {
    slug: "formwork-rental",
    name: "Formwork Rental",
    description: "Reusable steel and timber formwork systems for rammed earth and concrete pours.",
  },
  {
    slug: "roofing-materials",
    name: "Roofing Materials",
    description: "IBR sheeting, steel truss components, and roofing accessories.",
  },
  {
    slug: "doors-windows",
    name: "Doors & Windows",
    description: "Steel and timber door and window sets for residential, commercial, and institutional builds.",
  },
  {
    slug: "finishes-fixtures",
    name: "Finishes & Fixtures",
    description: "Interior and exterior finishing materials, from plasters to fixtures.",
  },
];
