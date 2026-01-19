"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const directions = [
  {
    title: "Our Vision",
    description:
      "To build intelligent, sustainable systems that empower enterprises to operate efficiently, scale confidently, and adapt to future challenges.",
    icon: <Eye size={26} />,
  },
  {
    title: "Our Mission",
    description:
      "To deliver execution-led consulting and technology solutions that create measurable impact through strong governance, innovation, and long-term partnerships.",
    icon: <Target size={26} />,
  },
];

export default function VisionMission() {
  return (
    <section className="relative bg-[#050b1a] py-24 text-white">

      {/* Soft divider */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-linear-to-b
          from-[#020617]
          via-[#020617]/70
          to-transparent
          blur-[1px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION TITLE */}
        <div className="mb-14 text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gray-400">
            Our Direction
          </p>
          <h2 className="mt-3 font-aeonik text-2xl md:text-3xl">
            Vision & Mission
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {directions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                group
                rounded-2xl
                bg-white/5
                p-8
                backdrop-blur
                border border-white/10
                transition
                hover:bg-white/10
              "
            >
              {/* ICON */}
              <div
                className="
                  mb-5 flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#4f6ef7]/10
                  text-[#4f6ef7]
                "
              >
                {item.icon}
              </div>

              <p className="font-aeonik text-lg">
                {item.title}
              </p>

              <p className="mt-3 font-inter text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}