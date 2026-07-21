import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import OurStory from "@/components/OurStory";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessStrip from "@/components/ProcessStrip";
import PartnerLogos from "@/components/PartnerLogos";
import TestimonialBlock from "@/components/TestimonialBlock";
import CTABand from "@/components/CTABand";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <OurStory />
      <FeaturedProjects />
      <ProcessStrip />
      <PartnerLogos />
      <TestimonialBlock testimonial={testimonials[0]} />
      <CTABand />
    </>
  );
}
