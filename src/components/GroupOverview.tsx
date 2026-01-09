"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Layers, Rocket, TrendingUp } from "lucide-react";

const pillars = [
  {
    title: "Integrated Thinking",
    description:
      "Strategy, technology, and execution brought together under one unified group structure.",
    icon: Layers,
  },
  {
    title: "Execution Focus",
    description:
      "We don’t stop at recommendations — we stay involved through delivery and implementation.",
    icon: Rocket,
  },
  {
    title: "Long-Term Impact",
    description:
      "Systems designed for sustainability, scalability, and operational longevity.",
    icon: TrendingUp,
  },
];

export default function GroupOverview() {
  return (
    <section className="relative bg-[#050b1a] py-20 md:py-28 text-white">
      {/* soft divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <SectionHeader
            label="Group Overview"
            title="Building Systems That"
            highlight="Power Progress"
            description="DRS Group is a multidisciplinary organization operating at the intersection of infrastructure, technology, and consulting. We design, deploy, and operate systems that are resilient, efficient, and future-ready."
          />

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="
                    group
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur
                    transition
                    hover:bg-white/10
                  "
                >
                  {/* ICON */}
                  <div className="
                    mb-4
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-[#4f6ef7]/15
                    text-[#4f6ef7]
                  ">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-aeonik text-lg">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-relaxed text-gray-400">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}