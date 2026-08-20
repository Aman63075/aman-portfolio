"use client";

import { motion } from "framer-motion";

export default function NoiseBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Golden Orb */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-8%] top-[-10%] h-[430px] w-[430px] rounded-full bg-[#D4AF37]/18 blur-[120px]"
      />

      {/* Amber Orb */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-12%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#F59E0B]/14 blur-[120px]"
      />

      {/* Film Grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 0.7px, transparent 0.7px)",
          backgroundSize: "7px 7px",
        }}
      />
    </div>
  );
}