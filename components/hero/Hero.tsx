"use client";
import Magnetic from "@/components/ui/Magnetic";
import CursorGlow from "@/components/ui/CursorGlow";
import AnimatedName from "@/components/ui/AnimatedName";
import Particles from "@/components/ui/Particles";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FloatingNav } from "@/components/ui/floating-navbar";
import NoiseBackground from "@/components/ui/NoiseBackground";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", link: "#home", icon: <IconHome className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4" /> },
    { name: "Skills", link: "#skills", icon: <IconCode className="h-4 w-4" /> },
    { name: "Work", link: "#work", icon: <IconBriefcase className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <IconMail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const rotateX = gsap.quickTo(card, "rotationX", {
      duration: 0.4,
      ease: "power3.out",
    });

    const rotateY = gsap.quickTo(card, "rotationY", {
      duration: 0.4,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(card, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      rotateY((x - 0.5) * 16);
      rotateX(-(y - 0.5) * 16);
      moveY(-6);
    };

    const reset = () => {
      rotateX(0);
      rotateY(0);
      moveY(0);
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <FloatingNav navItems={navItems} />

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_60%)]" />
        <NoiseBackground />
        <Particles />
        <CursorGlow />

        
<div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center px-6 pt-24 pb-12 md:flex-row md:justify-between md:px-10">
  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-10 max-w-xl text-center md:mt-0 md:text-left"
  >
    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-400 md:text-sm">
      Cloud & Creative Developer
    </p>

    <AnimatedName />

    <p className="mt-6 text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
      Designing AI-powered products, cloud solutions and cinematic digital
      experiences.
    </p>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start justify-center">
  <Magnetic>
    <a href="#work">
      <button className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 sm:w-auto">
        View Work
      </button>
    </a>
  </Magnetic>

  <Magnetic>
    <a href="/Aman_Shukla_Resume.pdf" download>
      <button className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold backdrop-blur hover:border-blue-500 sm:w-auto">
        Download Resume
      </button>
    </a>
  </Magnetic>
</div>
  </motion.div>

  {/* Right Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="flex justify-center"
  >
    <div
      ref={cardRef}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-[28px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_0_80px_rgba(37,99,235,0.15)]"
    >
      <img
        src="/aman.png"
        alt="Aman Shukla"
        className="h-[300px] w-[230px] rounded-[22px] object-cover sm:h-[380px] sm:w-[280px] md:h-[560px] md:w-[420px]"
      />
    </div>
  </motion.div>
</div>
      </section>
    </>
  );
}