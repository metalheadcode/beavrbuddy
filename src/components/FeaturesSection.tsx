"use client";

import React, { useState } from "react";

import Buttons from "./Buttons";
import Image from "next/image";
import { TitleAndDesc } from "./TitleAndDesc";

type Props = {};

export default function FeaturesSection({}: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <section className="relative flex flex-col items-center">
      <div className="flex w-3/4 relative z-20">
        {["Work Management", "Asset Management", "Smart Meter Deployment"].map(
          (tab, index) => (
            <div
              onClick={() => setActiveTab(index)}
              key={index}
              className={`${
                activeTab === index ? "bg-gray-700" : "bg-gray-500"
              } w-1/3 py-5 px-5 rounded-t-full flex justify-center`}
            >
              <p className="text-white  xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
                {tab}
              </p>
            </div>
          )
        )}
      </div>
      <div
        className="w-full py-20 bg-gray-700 relative z-20"
        style={{ borderRadius: "65px" }}
      >
        {activeTab === 0 && <TabOne />}
        {activeTab === 1 && <TabTwo />}
        {activeTab === 2 && <TabThree />}
      </div>

      <div className="z-10 absolute -bottom-5 left-0 right-0 h-20 bg-gradient-to-r from-secondary-dark to-secondary" />
    </section>
  );
}

const TabOne = () => {
  return (
    <div className="container mx-auto flex items-center">
      <div className="w-full md:w-1/2 px-5">
        <TitleAndDesc
          dark={false}
          title="How Fieldman streamlines work management?"
        />
        <Buttons
          label="Book a Demo"
          className="mt-5"
        />
      </div>
      <div className="w-full md:w-1/2 px-5">
        <Image
          alt="general-worker"
          src={"/images/general-worker-construction.jpg"}
          width={1920}
          height={1080}
          className="h-[400px]"
        />
      </div>
    </div>
  );
};
const TabTwo = () => {
  return (
    <div className="container mx-auto flex items-center">
      <div className="w-full md:w-1/2 px-5">
        <TitleAndDesc
          dark={false}
          title="Asset Management"
        />
        <Buttons
          label="Book a Demo"
          className="mt-5"
        />
      </div>
      <div className="w-full md:w-1/2 px-5">
        <Image
          alt="general-worker"
          src={"/images/general-worker-construction.jpg"}
          width={1920}
          height={1080}
          className="h-[400px]"
        />
      </div>
    </div>
  );
};
const TabThree = () => {
  return (
    <div className="container mx-auto flex items-center">
      <div className="w-full md:w-1/2 px-5">
        <TitleAndDesc
          dark={false}
          title="Smart Meter Deployment"
        />
        <Buttons
          label="Book a Demo"
          className="mt-5"
        />
      </div>
      <div className="w-full md:w-1/2 px-5">
        <Image
          alt="general-worker"
          src={"/images/general-worker-construction.jpg"}
          width={1920}
          height={1080}
          className="h-[400px]"
        />
      </div>
    </div>
  );
};
