"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX - 160);
    mouseY.set(e.clientY - 160);
  };

  return (
    <div onMouseMove={handleMove} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-blue-500/20 blur-[110px]"
      />
    </div>
  );
}