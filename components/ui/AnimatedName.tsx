"use client";

import { motion } from "framer-motion";

export default function AnimatedName() {
  const first = "AMAN".split("");
  const last = "SHUKLA".split("");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.25,
      },
    },
  };

  const letter = {
    hidden: {
      y: 120,
      opacity: 0,
      rotateX: -90,
    },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="leading-none">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex overflow-hidden"
      >
        {first.map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className="text-6xl font-black md:text-8xl"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-1 flex overflow-hidden"
      >
        {last.map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className="text-6xl font-black md:text-8xl"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}