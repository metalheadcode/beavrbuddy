"use client";

import { BiteOne, BiteTwo } from "./Svgs";
import React, { useState } from "react";

import Buttons from "./Buttons";
import FormModal from "./FormModal";
import PresenceAnimation from "./PresenceAnimation";

type Props = {};

export default function CTASection({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <FormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section className="relative bg-gradient-to-tr from-secondary-dark to-secondary -mb-20 z-10 rounded-t-4xl">
        <div className="container mx-auto py-20">
          <div className="w-full px-5 flex flex-col items-center mt-10">
            <PresenceAnimation>
              <h3 className="font-bold text-center text-slate-950 xl:text-6xl lg:text-5xl md:text-4xl text-2xl mb-3 leading-tight">
                Thinking About Renovating? Let BeavrBuddy Chew Through the
                Hassles!
              </h3>
            </PresenceAnimation>
            <Buttons
              label="Gnaw More!"
              design="secondary"
              className="mt-5"
              onClick={() => setIsOpen(true)}
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
    </>
  );
}
