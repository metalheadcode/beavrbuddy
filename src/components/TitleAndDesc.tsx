import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {
  title: string;
  desc?: string;
  dark?: boolean;
};

export function TitleAndDesc({
  dark = true,
  title = "This Is Title",
  desc = "Lorem fugiat commodo ex elit ex ex exercitation laborum duis consequat magna incididunt nostrud. Duis et qui deserunt aliquip ullamco labore in do fugiat veniam ea ullamco esse. Consectetur eu ullamco ea adipisicing minim do adipisicing. Anim proident elit proident veniam velit ad ullamco aute magna sunt aliqua proident anim. Voluptate do minim id officia anim enim irure officia id incididunt et et reprehenderit et. Tempor duis et do Lorem mollit elit adipisicing pariatur excepteur dolore veniam et nostrud commodo. Ipsum aute ipsum dolore magna eu esse irure sint deserunt.",
}: Props) {
  return (
    <>
      <PresenceAnimation>
        <h3
          className={` ${
            dark ? "text-slate-950" : "text-white"
          } xl:text-5xl lg:text-4xl md:text-3xl text-2xl leading-tight mb-3 font-semibold`}
        >
          {title}
        </h3>
      </PresenceAnimation>
      <PresenceAnimation delay={0.2}>
        <p
          className={` ${
            dark ? "text-slate-950" : "text-white/80"
          } leading-relaxed md:text-lg text-md font-light `}
        >
          {desc}
        </p>
      </PresenceAnimation>
    </>
  );
}
