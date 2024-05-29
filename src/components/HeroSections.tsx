import Buttons from "./Buttons";
import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroSections({}: Props) {
  const titleStrong = "Manage Fieldwork ";
  const titleLight = "& All Infrastructure Assets";
  const desc =
    "Agile, user-friendly software built for utilities, contractors and local governments";
  return (
    <section
      className="py-[100px] bg-gradient-to-r from-secondary-dark to-secondary relative overflow-hidden"
      style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      <div className="h-10" />
      <div className="container mx-auto relative z-20 flex">
        <div className="md:w-1/3 w-full px-[25px] flex flex-col gap-10 items-start">
          <h3 className="text-6xl text-slate-950 leading-none">
            Let Us Chopped Down Your Renovation Worries
          </h3>
          <p className="text-xl text-slate-950 leading-normal">{desc}</p>
          <Buttons label="Book a Demo" />
        </div>
        <div className="md:w-1/2 w-full px-5 flex items-end justify-center relative">
          <Image
            src="/images/beaver-matt.png"
            alt="workker-transparent"
            height={940}
            width={854}
            className="h-[600px] w-auto"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary to-secondary/10" />
    </section>
  );
}
