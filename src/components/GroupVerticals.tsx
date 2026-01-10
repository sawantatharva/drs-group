"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, Cpu } from "lucide-react";
import Link from "next/link";

const verticals = [
  {
    title: "DRS Consulting Services",
    description:
      "Strategic advisory and execution-led consulting focused on operational excellence, infrastructure optimization, and enterprise transformation.",
    href: "/consulting",
    icon: Briefcase,
  },
  {
    title: "DRS Smart Solutions",
    description:
      "Technology-driven solutions that enable intelligent systems, data-driven decision-making, and scalable digital infrastructure.",
    href: "/solutions",
    icon: Cpu,
  },
];

export default function GroupVerticals() {
  return (
    <section className="relative bg-[#050b1a] py-20 md:py-28 text-white">
      {/* divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 md:gap-20">

          {/* HEADER */}
          <SectionHeader
            label="Our Verticals"
            title="Focused Expertise."
            highlight="Unified Vision."
            description="DRS Group operates through specialized verticals, each designed to address a critical aspect of enterprise and infrastructure transformation — working independently or together as required."
          />

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;

              return (
                <motion.div
                  key={vertical.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={vertical.href}
                    className="
                      group
                      block h-full
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      p-8
                      backdrop-blur
                      transition
                      hover:bg-white/10
                      hover:shadow-xl
                    "
                  >
                    {/* ICON */}
                    <div className="
                      mb-5
                      flex h-12 w-12
                      items-center justify-center
                      rounded-xl
                      bg-[#4f6ef7]/15
                      text-[#4f6ef7]
                    ">
                      <Icon size={22} />
                    </div>

                    <h3 className="font-aeonik text-xl">
                      {vertical.title}
                    </h3>

                    <p className="mt-4 font-inter text-sm leading-relaxed text-gray-400">
                      {vertical.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#4f6ef7]">
                      Explore
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}