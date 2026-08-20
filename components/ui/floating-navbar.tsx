"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("home");

  // Navbar hide/show
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const previous = scrollYProgress.getPrevious() ?? 0;
    const direction = current - previous;

    if (current < 0.05) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
  });

  // Active section detection
  useEffect(() => {
    const sections = ["home", "about", "skills", "work", "contact"];

    const handleScroll = () => {
      const scroll = window.scrollY + 150;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (
          scroll >= el.offsetTop &&
          scroll < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -80,
        }}
        transition={{ duration: 0.25 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex w-fit items-center justify-center",
          className
        )}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2 py-2 shadow-2xl backdrop-blur-xl">
          {navItems.map((item, idx) => {
            const id = item.link.replace("#", "");

            return (
              <button
                key={idx}
                onClick={() => {
                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active === id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                )}
              >
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden">{item.icon}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};