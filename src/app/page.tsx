"use client";

import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSections from "@/components/HeroSections";
import HowItWorksSection from "@/components/HowItWorksSection";
import Lenis from "lenis";
import PartnershipSection from "@/components/PartneshipSection";
import WhySection from "@/components/WhySection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="relative">
      <HeroSections id="hero" />
      <WhySection id="dashboard" />
      <FeaturesSection id="features" />
      <HowItWorksSection id="how-it-works" />
      <PartnershipSection id="partnership" />
      <CTASection />
    </div>
  );
}
