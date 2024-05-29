import Image from "next/image";
import React from "react";

type Props = {};

const CardCaseStudies = () => {
  return (
    <div className="bg-slate-100 rounded-3xl">
      <Image
        alt="general-worker"
        src={"/images/general-worker-construction.jpg"}
        width={1920}
        height={1080}
        className="h-[170px] rounded-3xl"
      />
      <div className="p-5">
        <p className="">
          How the City of Statesville Optimized AMI Installations and Meter
          Reading Program in a Single Platform
        </p>
      </div>
      <div className="p-5">
        <p className=" text-blue-600">Read More</p>
      </div>
    </div>
  );
};

export default function CaseStudiesSection({}: Props) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          <CardCaseStudies />
          <CardCaseStudies />
          <CardCaseStudies />
          <CardCaseStudies />
        </div>
      </div>
    </section>
  );
}
