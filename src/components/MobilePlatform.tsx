"use client";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useInView,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

type Props = {
  scrollYProgress: MotionValue;
};
type LableAndInputFakeProps = {
  label: string;
  value: string;
};

const LabelAndInputFake = ({ label, value }: LableAndInputFakeProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  return (
    <div
      ref={ref}
      className="min-w-[200px] mb-2"
    >
      <p className="mb-2 w-full text-slate-400 text-sm">{label}</p>
      <div className="bg-slate-100 px-5 py-2 rounded-xl w-full">
        {value.split("").map((char, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            key={index}
            transition={{
              delay: (index + 1) * 0.1,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default function MobilePlatform({ scrollYProgress }: Props) {
  const [listOfElement, setListOfElement] = useState<
    { label: string; value: string }[]
  >([{ label: "Location", value: "Kuala Lumpur" }]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0.3 && !listOfElement.some((i) => i.label === "Budget")) {
      setListOfElement([
        ...listOfElement,
        { label: "Budget", value: "100,000" },
      ]);
    }

    if (value > 0.4 && !listOfElement.some((i) => i.label === "Types")) {
      setListOfElement([
        ...listOfElement,
        { label: "Types", value: "House Renovation" },
      ]);
    }
  });
  return (
    <motion.div
      className="border-t border-l border-r border-slate-400 pl-2 pr-2 pt-2"
      style={{ borderTopRightRadius: "50px", borderTopLeftRadius: "50px" }}
    >
      <div
        style={{ borderTopRightRadius: "45px", borderTopLeftRadius: "45px" }}
        className="min-h-[500px] px-3 py-8 bg-slate-100 overflow-y-scroll no-scrollbar relative"
      >
        <div className="absolute top-0 left-0 right-0 w-full  flex justify-center">
          <div className="bg-white h-5 w-[180px] rounded-b-2xl" />
        </div>
        <div className="bg-white p-7 rounded-3xl w-full">
          {listOfElement.map((el, i) => (
            <LabelAndInputFake
              key={i}
              label={el.label}
              value={el.value}
            />
          ))}
          <button className="bg-secondary px-5 py-3 w-full rounded-full mt-5">
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
}
