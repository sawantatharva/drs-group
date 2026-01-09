"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl"
    >
      {/* LABEL */}
      <div className="mb-3 flex items-center gap-3">
        <span className="h-0.5 w-8 bg-[#4f6ef7]" />
        <span className="font-inter text-xs tracking-widest uppercase text-gray-400">
          {label}
        </span>
      </div>

      {/* TITLE */}
      <h2
        className="
          font-aeonik
          text-3xl
          leading-tight
          text-white
          sm:text-4xl
          md:text-5xl
        "
      >
        {title}

        {highlight && (
          <>
            <br />
            <span className="
              bg-linear-to-r
              from-[#4f6ef7]
              via-[#7aa2ff]
              to-[#4f6ef7]
              bg-clip-text
              text-transparent
            ">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p
          className="
            mt-5
            font-inter
            text-sm
            leading-relaxed
            text-gray-400
            sm:text-base
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}