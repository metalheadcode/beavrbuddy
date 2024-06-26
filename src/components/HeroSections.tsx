import Buttons from "./Buttons";
import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {
  id: string;
};

export default function HeroSections({ id }: Props) {
  return (
    <section
      id={id}
      className=" pt-[100px] pb-[30px] bg-gradient-to-tl from-primary-regular to-primary-light relative overflow-hidden rounded-b-4xl"
    >
      <div className="h-10" />
      <div className="container mx-auto relative z-20 flex flex-col-reverse md:flex-row flex-wrap items-center justify-center">
        <div className="md:w-1/2 w-full px-[25px] flex flex-col items-center gap-10 md:items-start">
          <PresenceAnimation>
            <h3 className=" text-wrap md:text-left text-center font-black md:text-8xl text-5xl text-white leading-tight">
              Let Us Chopped Down Your Renovation Worries
            </h3>
          </PresenceAnimation>
          <PresenceAnimation delay={0.2}>
            <p className="font-light md:text-left text-center text-slate-950 md:text-3xl text-xl leading-normal">
              Find top contractors who work as hard as a{" "}
              <span className="text-secondary">beaver</span> to bring your
              vision to life.
            </p>
          </PresenceAnimation>
          <Buttons
            label="Get Started"
            href="https://forms.gle/AxBTc1yQ865zFvLX6"
            target="_blank"
          />
        </div>
        <div className="md:w-1/2 w-full px-5 flex items-end justify-center relative">
          <Image
            src="/images/beaver-matt.png"
            alt="workker-transparent"
            height={940}
            width={854}
            className="w-full h-auto"
          />
        </div>
      </div>

      <Image
        alt="bg-pattern"
        priority
        src={"/images/bg-pattern-hero.png"}
        width={1616}
        height={1015}
        className="absolute top-0 right-0 bottom-0 z-10 w-auto h-full object-cover opacity-45"
      />

      {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary to-secondary/10" /> */}
    </section>
  );
}
