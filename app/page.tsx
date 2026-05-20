import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { Footer } from "@/sections/footer";
import { HealthcareSection } from "@/sections/healthcare-section";
import { HeroSection } from "@/sections/hero-section";
import { IndustriesSection } from "@/sections/industries-section";
import { Navbar } from "@/sections/navbar";
import { ProjectsSection } from "@/sections/projects-section";
import { ServicesSection } from "@/sections/services-section";
import { StatsTestimonialsSection } from "@/sections/stats-testimonials-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HealthcareSection />
        <IndustriesSection />
        <ProjectsSection />
        <StatsTestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
