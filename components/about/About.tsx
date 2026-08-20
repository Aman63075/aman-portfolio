"use client";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Film, Cloud } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: MapPin,
      title: "Based in",
      value: "Lucknow, UP",
    },
    {
      icon: GraduationCap,
      title: "Education",
      value: "BCA · 2026",
    },
    {
      icon: Film,
      title: "Editing",
      value: "5+ Years",
    },
    {
      icon: Cloud,
      title: "Learning",
      value: "AWS & Cloud",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#050816] px-6 py-28 text-white"
    >
      <Reveal>
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl text-4xl font-black leading-tight md:text-6xl"
        >
          Blending creativity with cloud technology.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          I'm Aman Shukla from Lucknow. With 5 years of experience in video
          editing and motion design, I'm now building AI-powered products and
          exploring modern cloud technologies through AWS and full-stack
          development.
        </motion.p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <Icon className="mb-5 h-7 w-7 text-blue-400" />

                <p className="text-sm text-zinc-500">{card.title}</p>

                <h3 className="mt-2 text-xl font-bold">{card.value}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
      </Reveal>
    </section>
  );
}