"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LaptopMockup from "@/components/ui/LaptopMockup";
import TextScramble from "@/components/ui/TextScramble";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    title: "LPCPS Career Hub",
    tag: "Full Stack Platform",
    color: "from-blue-600 to-cyan-500",
    desc: "A modern career portal for students with authentication, dashboard and resources.",
    tech: ["Next.js", "React", "Tailwind", "Firebase"],
  },
  {
    title: "Vibe Code Editor",
    tag: "AI Development",
    color: "from-violet-600 to-fuchsia-500",
    desc: "An AI-powered coding workspace focused on productivity and clean UI.",
    tech: ["Next.js", "AI", "TypeScript"],
  },
  {
    title: "Vocal Pad",
    tag: "Voice Productivity",
    color: "from-orange-500 to-red-500",
    desc: "Voice-first notes application with a minimal and distraction-free interface.",
    tech: ["Speech API", "React", "Tailwind"],
  },
  {
    title: "Mail System",
    tag: "Communication UI",
    color: "from-emerald-500 to-teal-500",
    desc: "Modern email interface inspired by productivity applications.",
    tech: ["React", "UI/UX", "Motion"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section id="work" className="bg-[#050816] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-5xl font-black">Featured Projects</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="h-64 bg-[#09090f]">
                  <LaptopMockup
                    title={project.title}
                    color={project.color}
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm uppercase tracking-widest text-blue-300">
                    {project.tag}
                  </p>

                  <div className="mt-2">
                    <TextScramble
                      text={project.title}
                      className="text-2xl font-bold"
                    />
                  </div>

                  <p className="mt-3 text-zinc-400">{project.desc}</p>

                  <div className="mt-5 flex items-center gap-2 text-blue-400">
                    View Details
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1020] text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <p className="text-sm text-blue-400">{selected.tag}</p>
                  <h2 className="text-3xl font-black">{selected.title}</h2>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid gap-8 p-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-[#09090f]">
                  <LaptopMockup
                    title={selected.title}
                    color={selected.color}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Project Overview</h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {selected.desc}
                  </p>

                  <h4 className="mt-8 text-sm uppercase tracking-widest text-blue-300">
                    Tech Stack
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {selected.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-4">
  <a
    href="https://github.com/Aman63075"
    target="_blank"
    className="rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
  >
    GitHub
  </a>

  <a
    href="mailto:amanshukla63075@gmail.com"
    className="rounded-full border border-white/10 px-6 py-3 font-semibold hover:border-blue-400"
  >
    Contact Me
  </a>
</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}