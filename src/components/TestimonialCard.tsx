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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="
        relative
        rounded-2xl
        bg-white/5
        p-6
        sm:p-8
        backdrop-blur-sm
        border border-white/10
        transition
        hover:border-white/20
        hover:bg-white/10
      "
    >
      {/* Quote Icon */}
      <div className="mb-4 text-3xl text-[#4f6ef7] opacity-80">
        “
      </div>

      {/* Quote */}
      <p
        className="
          font-inter
          text-sm
          leading-relaxed
          text-gray-300
          sm:text-base
        "
      >
        {quote}
      </p>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-white/10" />

      {/* Author */}
      <div className="flex flex-col gap-1">
        <p className="font-aeonik text-sm text-white">
          {name}
        </p>

        <p className="font-inter text-xs sm:text-sm text-gray-400">
          {role}, {company}
        </p>
      </div>
    </motion.div>
  );
}