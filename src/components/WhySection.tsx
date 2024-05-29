import Image from "next/image";
import React from "react";
import { TitleAndDesc } from "./TitleAndDesc";

type Props = {};

export default function WhySection({}: Props) {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-5 ">
          <Image
            alt="general-worker"
            src={"/images/general-worker-construction.jpg"}
            width={1920}
            height={1080}
            className="h-[400px] w-auto rounded-3xl md:mb-0 mb-5 object-cover shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-5">
          <TitleAndDesc title="How Fieldman streamlines work management?" />
        </div>
      </div>
    </section>
  );
}
