import { BiteOne, BiteTwo } from "./Svgs";

import Buttons from "./Buttons";
import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {};

export default function CTASection({}: Props) {
  return (
    <section
      className="relative bg-gradient-to-tr from-secondary-dark to-secondary -mb-20 z-10"
      style={{
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
      }}
    >
      <div className="container mx-auto py-20">
        <div className="w-full px-5 flex flex-col items-center mt-10">
          <PresenceAnimation>
            <h3
              className={`font-bold text-center text-slate-950 xl:text-6xl lg:text-5xl md:text-4xl text-2xl mb-3`}
            >
              Thinking About Renovating? Let BeavrBuddy Chew Through the
              Hassles!
            </h3>
          </PresenceAnimation>
          <Buttons
            label="Gnaw More!"
            design="secondary"
            className="mt-5"
          />
        </div>
      </div>
      <div className="absolute -top-[30px] left-0 right-0">
        <BiteOne
          width={190}
          className="absolute top-0 left-12"
        />
        <BiteTwo
          width={190}
          className="absolute -top-[30px] right-12"
        />
      </div>
      <div className="w-full h-20" />
    </section>
  );
}
