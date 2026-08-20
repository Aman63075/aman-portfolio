"use client";

import { motion, type Variants } from "framer-motion";

const letters = "AMAN SHUKLA".split("");

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const child: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
    rotateX: -90,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function AnimatedName() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="whitespace-nowrap text-5xl font-black leading-[0.9] text-white sm:text-7xl md:text-8xl lg:text-[5.5rem]"
      style={{ perspective: 1000 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}