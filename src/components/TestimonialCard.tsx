"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="
        group
        relative
        rounded-2xl
        bg-white/5
        border border-white/10
        p-7
        sm:p-8
        backdrop-blur
        transition
        hover:bg-white/10
        hover:shadow-xl
      "
    >
      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#4f6ef7]" />

      {/* Quote icon */}
      <div className="mb-4 text-4xl text-[#4f6ef7] opacity-90">
        “
      </div>

      {/* Quote */}
      <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-300">
        {quote}
      </p>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-white/10" />

      {/* Author */}
      <div>
        <p className="font-aeonik text-sm text-white">
          {name}
        </p>

        <p className="mt-1 font-inter text-xs sm:text-sm text-gray-400">
          {role}
        </p>

        <p className="font-inter pt-1 text-xs text-[#4f6ef7]">
          {company}
        </p>
      </div>
    </motion.div>
  );
}