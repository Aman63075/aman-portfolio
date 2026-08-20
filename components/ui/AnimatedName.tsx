"use client";

import { motion } from "framer-motion";

const letters = "AMAN SHUKLA".split("");

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const child = {
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
      ease: "easeOut",
    },
  },
};

export default function AnimatedName() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-5xl font-black leading-none text-white sm:text-7xl md:text-8xl"
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