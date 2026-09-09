import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import FeaturedProjects from "@/components/FeaturedProjects";
import TeamSection from "@/components/TeamSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessStrip from "@/components/ProcessStrip";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <FeaturedProjects />
      <ProcessStrip />
      <ServicesGrid />
      <TeamSection />
      <CTABand />
    </>
  );
}