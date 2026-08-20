"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Bot,
  Film,
  Code2,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    title: "AWS & Cloud",
    icon: Cloud,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cyber Security",
    icon: Shield,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "AI Development",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Motion Editing",
    icon: Film,
    color: "from-red-500 to-orange-400",
  },
  {
    title: "Next.js & React",
    icon: Code2,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Git Workflow",
    icon: GitBranch,
    color: "from-zinc-400 to-zinc-200",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-4xl font-black md:text-6xl"
        >
          Tools that power my workflow.
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 blur-2xl transition duration-500 group-hover:opacity-20`}
                />

                <div className="relative">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold">{skill.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Building scalable, modern and visually immersive digital
                    experiences.
                  </p>

                  <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}