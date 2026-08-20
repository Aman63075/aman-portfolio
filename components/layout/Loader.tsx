"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-8 h-1 w-48 overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full bg-blue-500"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.p
              className="mb-4 text-xs uppercase tracking-[0.45em] text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Initializing Portfolio
            </motion.p>

            <motion.h1
              className="text-5xl font-black text-white md:text-7xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Aman Shukla
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}