import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import React from "react";
import { TitleAndDesc } from "./TitleAndDesc";

type Props = {};

export default function TestimonialSection({}: Props) {
  return (
    <section className="relative bg-gradient-to-r from-secondary-dark to-secondary rounded-b-4xl">
      <div className="flex items-center container mx-auto py-20">
        <div className="w-full px-5 flex flex-col items-center">
          <PresenceAnimation>
            <p
              className={` text-center text-slate-950 leading-relaxed md:text-lg text-md mb-5`}
            >
              {`Smart meter deployment solution for multiple AMI upgrade projects`}
            </p>
            <h3
              className={` text-center text-slate-950 xl:text-5xl lg:text-4xl md:text-3xl text-2xl leading-tight mb-3`}
            >
              {`”Fieldman's standout feature is its offline capability, allowing our installers to log meter data without cell service or WiFi. Plus, Fieldman's customer service provides unparalleled support.”`}
            </h3>
          </PresenceAnimation>

          <div className="flex items-center gap-3 mt-5">
            <Image
              alt="general-worker"
              src={"/images/general-worker-construction.jpg"}
              width={1920}
              height={1080}
              className="h-[100px] w-[100px] rounded-full"
            />
            <div>
              <p
                className={` text-slate-950 leading-relaxed md:text-lg text-md`}
              >
                {`Charles Bowden`}
              </p>
              <p
                className={` text-slate-950 leading-relaxed md:text-lg text-md`}
              >
                {`President`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
