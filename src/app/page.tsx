import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandIntro } from "@/components/sections/brand-intro";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyNacira } from "@/components/sections/why-nacira";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { MaterialsShowcase } from "@/components/sections/materials-showcase";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ConsultationSection } from "@/components/sections/consultation-section";

// JSON-LD Structured Data for LocalBusiness / ProfessionalService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NACIRA STUDIO",
  description:
    "Studio arsitektur interior & design-build premium yang melayani perancangan residential, komersial, renovasi, dan pertukangan furniture kustom.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  priceRange: "$$$",
  knowsAbout: [
    "Interior Design",
    "Design and Build",
    "Renovation",
    "Custom Furniture",
    "Residential Architecture",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <BrandIntro />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
      <WhyNacira />
      <ProcessTimeline />
      <BeforeAfterSection />
      <MaterialsShowcase />
      <TrustIndicators />
      <TestimonialsSection />
      <FAQAccordion />
      <ConsultationSection />
    </>
  );
}
