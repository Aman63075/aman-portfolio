"use client";

import { motion } from "framer-motion";

export default function NoiseBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient Mesh */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[120px]"
      />

      {/* Film Grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(circle, white 0.7px, transparent 0.7px)
          `,
          backgroundSize: "7px 7px",
        }}
      />
    </div>
  );
}