"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: JSX.Element[] | JSX.Element;
  delay?: number;
  once?: boolean;
};

function PresenceAnimation({ children, delay = 0, once = true }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once });

  const variant = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    reveal: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "reveal" : "visible"}
      transition={{
        ease: "easeIn",
        delay,
      }}
    >
      {children}
    </motion.span>
  );
}

export default PresenceAnimation;
