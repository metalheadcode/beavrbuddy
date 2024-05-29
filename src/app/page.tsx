import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSections from "@/components/HeroSections";
import { Metadata } from "next";
import PartnershipSection from "@/components/PartneshipSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSections />
      <WhySection />
      <FeaturesSection />
      <PartnershipSection />
      <CTASection />
    </div>
  );
}

export const metadata: Metadata = {
  title: "BeavrBuddy:Home",
};
