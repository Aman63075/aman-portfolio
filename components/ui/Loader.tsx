"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black tracking-wide text-white"
            >
              Aman Shukla
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-sm uppercase tracking-[0.4em] text-blue-400"
            >
              Cloud • AI • Creative
            </motion.p>

            <div className="mx-auto mt-8 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-24 bg-cyan-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}