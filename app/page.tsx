import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessStrip from "@/components/ProcessStrip";

import CTABand from "@/components/CTABand";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessStrip />
      
      <CTABand />
    </>
  );
}
