"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Buttons from "./Buttons";
import FormModal from "./FormModal";
import PresenceAnimation from "./PresenceAnimation";

type Props = {};

export default function CTASection({}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  const biteVariantLeft = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const biteVariantRight = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <FormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section className="relative bg-gradient-to-tr from-secondary-dark to-secondary -mb-20 z-10 rounded-t-4xl">
        <div
          ref={ref}
          className="container mx-auto py-20"
        >
          <div className="w-full px-5 flex flex-col items-center mt-10">
            <PresenceAnimation>
              <h3 className="font-bold text-center text-slate-950 xl:text-6xl lg:text-5xl md:text-4xl text-2xl mb-3 leading-tight">
                Thinking About{" "}
                <span className="text-primary-regular">Renovating?</span> Let
                BeavrBuddy{" "}
                <span className="text-primary-regular">Chew Through</span> the
                <span className="text-primary-regular">Hassles!</span>
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
          {/* <motion.div
            variants={itemVariant}
            initial="hidden"
            animate="show"
          >
            <BiteOne
              width={190}
              className="absolute top-0 left-12"
            />
          </motion.div> */}
          <motion.div
            variants={biteVariantLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="absolute top-0 left-0"
          >
            <motion.div
              variants={itemVariant}
              className="h-[100px] w-[100px] rounded-full bg-white -top-[10px] left-[40px] absolute"
            />
            <motion.div
              variants={itemVariant}
              className="h-[70px] w-[70px] rounded-full bg-white top-[5px] left-[100px] absolute"
            />
            <motion.div
              variants={itemVariant}
              className="h-[60px] w-[60px] rounded-full bg-white top-[5px] left-[150px] absolute"
            />
            <motion.div
              variants={itemVariant}
              className="h-[50px] w-[50px] rounded-full bg-white top-[5px] left-[300px] absolute"
            />
          </motion.div>
          <motion.div
            variants={biteVariantRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="absolute top-0 right-0"
          >
            <motion.div
              variants={itemVariant}
              className="border-black h-[100px] w-[100px] rounded-full bg-white -top-[10px] right-[40px] absolute"
            />
            <motion.div
              variants={itemVariant}
              className="border-black h-[60px] w-[60px] rounded-full bg-white top-[5px] right-[120px] absolute"
            />
            <motion.div
              variants={itemVariant}
              className="border-black h-[50px] w-[50px] rounded-full bg-white top-[5px] right-[150px] absolute"
            />
          </motion.div>
          {/* <BiteTwo
            width={190}
            className=""
          /> */}
        </div>
        <div className="w-full h-20" />
      </section>
    </>
  );
}
