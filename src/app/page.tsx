import CTASection from "@/components/CTASection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import TestimonialSection from "@/components/TestimonialSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <HeroSections />
      <WhySection />
      <FeaturesSection />
      <TestimonialSection />
      <CaseStudiesSection />
      <CTASection />
    </>
  );
}

export const metadata: Metadata = {
  title: "BeavrBuddy:Home",
};
