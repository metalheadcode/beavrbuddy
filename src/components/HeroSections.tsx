import Buttons from "./Buttons";
import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {};

export default function HeroSections({}: Props) {
  const titleStrong = "Manage Fieldwork ";
  const titleLight = "& All Infrastructure Assets";
  const desc =
    "Agile, user-friendly software built for utilities, contractors and local governments";
  return (
    <section
      className=" py-[100px] bg-gradient-to-tl from-primary-regular to-primary-light relative overflow-hidden"
      style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      <div className="h-10" />
      <div className="  container mx-auto relative z-20 flex">
        <div className="md:w-1/2 w-full px-[25px] flex flex-col gap-10 items-start">
          <PresenceAnimation>
            <h3 className=" text-wrap font-black text-8xl text-white leading-none">
              Let Us Chopped Down Your Renovation Worries
            </h3>
          </PresenceAnimation>
          <PresenceAnimation delay={0.2}>
            <p className="font-light text-slate-950 text-3xl leading-normal">
              Find top contractors who work as hard as a{" "}
              <span className="text-secondary">beaver</span> to bring your
              vision to life.
            </p>
          </PresenceAnimation>
          <Buttons label="Get Started" />
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
        src={"/images/bg-pattern-hero.png"}
        width={1616}
        height={1015}
        className="absolute top-0 right-0 bottom-0 z-10 w-auto h-full object-cover opacity-45"
      />

      {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary to-secondary/10" /> */}
    </section>
  );
}
