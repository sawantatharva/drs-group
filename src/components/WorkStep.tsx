"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WorkStepProps {
  step: number;
  title: string;
  description: string;
  index: number;
}

export default function WorkStep({
  step,
  title,
  description,
  index,
}: WorkStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="
        group relative h-full
        rounded-2xl
        bg-white/5
        p-6 sm:p-8
        backdrop-blur-sm
        border border-white/10
        transition-all
        hover:border-white/20
        hover:bg-white/10
      "
    >
      {/* Step Badge */}
      <div className="
        absolute -top-4 left-6
        rounded-full
        bg-[#4f6ef7]
        px-4 py-1
        text-xs
        font-inter font-medium
        text-white
        shadow-md
      ">
        Step {step}
      </div>

      {/* Title */}
      <h3 className="
        mt-4
        font-aeonik
        text-lg sm:text-xl
        text-white
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        mt-3
        font-inter
        text-sm sm:text-base
        leading-relaxed
        text-gray-400
      ">
        {description}
      </p>

      {/* Subtle footer indicator */}
      <div className="
        mt-6 flex items-center gap-2
        text-xs font-inter
        text-[#4f6ef7]
        opacity-0
        transition
        group-hover:opacity-100
      ">
        Learn more
        <ArrowRight size={14} />
      </div>

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          transition
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_30%_20%,rgba(79,110,247,0.15),transparent_60%)]
        "
      />
    </motion.div>
  );
}