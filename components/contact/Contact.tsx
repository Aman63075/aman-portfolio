"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.35em] text-blue-400"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-black md:text-6xl"
        >
          Let’s build something great.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          Available for freelance projects, cloud-based products and creative
          collaborations.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href="mailto:amanshukla63075@gmail.com"
            className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-blue-400" />
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <h3 className="font-semibold">amanshukla63075@gmail.com</h3>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Aman63075"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <IconBrandGithub className="h-6 w-6 text-blue-400" />
              <div>
                <p className="text-sm text-zinc-500">GitHub</p>
                <h3 className="font-semibold">@Aman63075</h3>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/aman-shukla-090767341"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <IconBrandLinkedin className="h-6 w-6 text-blue-400" />
              <div>
                <p className="text-sm text-zinc-500">LinkedIn</p>
                <h3 className="font-semibold">Aman Shukla</h3>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <div>
                <p className="text-sm text-zinc-500">Location</p>
                <h3 className="font-semibold">Lucknow, Uttar Pradesh</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © 2026 Aman Shukla · Cloud & Creative Developer
        </div>
      </div>
    </section>
  );
}