import { Metadata } from "next";
import React from "react";
import UnderMaintenanceSection from "@/components/UnderMaintenanceSection";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div>
      <UnderMaintenanceSection />
    </div>
  );
}
export const metadata: Metadata = {
  title: "BeavrBuddy:About",
};
