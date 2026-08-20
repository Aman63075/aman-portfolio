"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 1600,
      y: Math.random() * 900,
      opacity: Math.random() * 0.5 + 0.2,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 4,
    }));

    setParticles(data);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]"
          initial={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: p.y - 120,
            opacity: [p.opacity, 0.9, p.opacity],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}