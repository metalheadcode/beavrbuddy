import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import PartnershipSection from "@/components/PartneshipSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <HeroSections />
      <WhySection />
      <FeaturesSection />
      {/* <TestimonialSection /> */}
      <PartnershipSection />
      <CTASection />
    </>
  );
}

export const metadata: Metadata = {
  title: "BeavrBuddy:Home",
};
