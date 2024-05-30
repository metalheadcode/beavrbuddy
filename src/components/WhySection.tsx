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
      className="relative container mx-auto py-20 h-[3000px]"
      ref={ref}
    >
      <div className="sticky top-20 left-0 right-0 flex flex-col justify-center items-center h-screen">
        {/* <div className="absolute top-0 left-0 right-0 w-full">
          <motion.div
            className=" origin-left mt-10 rounded-xl h-[5px] bg-gradient-to-r from-secondary-dark to-secondary"
            style={{ width }}
          />
        </div> */}
        {mobile ? (
          <MobilePlatform scrollYProgress={scrollYProgress} />
        ) : (
          <Platform scrollYProgress={scrollYProgress} />
        )}
      </div>
    </section>
  );
}
