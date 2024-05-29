"use client";

import React, { useEffect, useRef, useState } from "react";

import Buttons from "./Buttons";
import Image from "next/image";
import { TitleAndDesc } from "./TitleAndDesc";

type Props = {};

const tabsTitles = [
  "Expert Consultation",
  "Bill of Quantities",
  "Contractor Matchmaking",
];

export default function FeaturesSection({}: Props) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="relative flex flex-col items-center">
      <div
        ref={ref}
        className="flex w-3/4 relative z-20 overflow-y-scroll no-scrollbar rounded-t-full"
      >
        {tabsTitles.map((tab, index) => (
          <div
            onClick={() => {
              // UNCOMMENT BELOW BLOCK IF THEY WANT SCROLL FEATURES
              // const width = ref.current?.scrollWidth;
              // if (ref.current !== null) {
              //   if (index === 0) {
              //     ref.current.scrollLeft = 0;
              //   }
              //   if (index === 1) {
              //     ref.current.scrollLeft = Number(width) / 4;
              //   }
              //   if (index === 2) {
              //     ref.current.scrollLeft = Number(width);
              //   }
              // }
              setActiveTab(index);
            }}
            key={index}
            className={`${
              activeTab === index
                ? "bg-primary-dark"
                : "bg-gradient-to-t from-primary-regular to-primary-light overflow-hidden"
            } relative w-full py-3 px-7 rounded-t-full flex justify-center items-center `}
          >
            {/* <div className="absolute left-0 right-0 z-50 bg-gradient-to-b from-black/10 via-transparent to-transparent w-full h-full" /> */}
            <p className=" text-center text-white  xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold tracking-wide truncate">
              {tab}
            </p>
          </div>
        ))}
      </div>
      <div
        className="w-full py-10 bg-gradient-to-t from-primary-regular to-primary-dark relative z-20 overflow-hidden"
        style={{ borderRadius: "60px" }}
      >
        <div className="relative z-30 px-5">
          {activeTab === 0 && <TabOne />}
          {activeTab === 1 && <TabTwo />}
          {activeTab === 2 && <TabThree />}
          <div className="container mx-auto px-5 flex flex-col lg:items-start md:items-center items-full w-full">
            <Buttons
              label="Book a Demo"
              className="mt-10"
            />
          </div>
        </div>
        <Image
          alt="pattern-faetures-deck"
          src={`/images/bg-pattern-hero.png`}
          width={1920}
          height={1080}
          className="absolute inset-0 z-10 h-auto w-full object-contain"
        />
        <div className="z-20 absolute inset-0 h-full w-full bg-gradient-to-r from-primary-dark to-transparent" />
        <div className="z-20 absolute inset-0 h-full w-full bg-gradient-to-b from-primary-dark via-transparent to-transparent" />
      </div>

      <div className="z-10 absolute -bottom-5 left-0 right-0 h-20 bg-gradient-to-r from-secondary-dark to-secondary" />
    </section>
  );
}

const TabOne = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="w-full md:w-1/2 px-5">
        <TitleAndDesc
          dark={false}
          title="Expert Consultation"
          desc="Receive personalized advice from our renovation experts to kick-start your project with confidence. This ensures that every project begins with a clear understanding of the client's needs and preferences, setting a solid foundation for success."
        />
      </div>
      <div className="w-full h-full md:mt-0 mt-5 border-white md:w-1/2 px-5 ">
        <Image
          alt="general-worker"
          src={"/images/consultation.jpg"}
          width={1920}
          height={1080}
          className="w-auto h-auto object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};
const TabTwo = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="w-full md:w-1/2 px-5">
        <TitleAndDesc
          dark={false}
          desc="Get a detailed Bill of Quantities that outlines all materials, labor, and costs, providing transparency and precision. This standardizes project details, offering a clear and agreed-upon scope, and reducing the risk of unexpected costs."
          title="Accurate Bill of Quantities"
        />
      </div>
      <div className="w-full h-full md:mt-0 mt-5 border-white md:w-1/2 px-5">
        <Image
          alt="general-worker"
          src={"/images/bill.jpg"}
          width={1920}
          height={1080}
          className="w-auto h-auto object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};
const TabThree = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="w-full md:w-1/2 px-5">
        <TitleAndDesc
          dark={false}
          desc="Connect with vetted contractors who submit competitive quotes based on your BQ, ensuring quality and value. This provides clients with easy access to reliable contractors, simplifying the selection process and ensuring competitive pricing."
          title="Seamless Contractor Matching"
        />
      </div>
      <div className="w-full h-full md:mt-0 mt-5 border-white md:w-1/2 px-5">
        <Image
          alt="general-worker"
          src={"/images/general-worker-construction.jpg"}
          width={1920}
          height={1080}
          className="w-auto h-auto object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};
