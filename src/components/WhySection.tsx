"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import MobilePlatform from "./MobilePlatform";
import Platform from "./Platform";

type Props = {};

export default function WhySection({}: Props) {
  const [mobile, setMobile] = useState<boolean>(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.5) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="relative container mx-auto h-[3000px] my-10 py-20"
      ref={ref}
    >
      <div className="sticky top-10 left-0 right-0 flex flex-col justify-center items-center h-screen">
        {mobile ? (
          <div className="py-10">
            <h3 className="font-semibold md:text-5xl text-5xl text-center mb-5 text-primary-regular">
              User Platform
            </h3>
            <MobilePlatform scrollYProgress={scrollYProgress} />
          </div>
        ) : (
          <div className="py-10">
            <h3 className="font-semibold md:text-5xl text-5xl text-center mb-5 text-primary-regular">
              Centralize Your Renovation Process
            </h3>
            <Platform scrollYProgress={scrollYProgress} />
          </div>
        )}
      </div>
    </section>
  );
}
