"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface VerticalCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function VerticalCard({
  title,
  description,
  href,
  index,
}: VerticalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
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
      {/* Title */}
      <h3 className="
        font-aeonik
        text-xl sm:text-2xl
        text-white
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        mt-3 sm:mt-4
        font-inter
        text-sm sm:text-base
        leading-relaxed
        text-gray-400
      ">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="
          mt-6
          inline-flex items-center gap-2
          font-inter text-sm font-medium
          text-[#4f6ef7]
        "
      >
        Learn More
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>

      {/* Subtle hover glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          transition
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_30%_20%,rgba(79,110,247,0.12),transparent_60%)]
        "
      />
    </motion.div>
  );
}