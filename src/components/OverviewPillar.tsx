"use client";

import { motion } from "framer-motion";

interface OverviewPillarProps {
  title: string;
  description: string;
  index: number;
}

export default function OverviewPillar({
  title,
  description,
  index,
}: OverviewPillarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="
        group
        relative
        rounded-2xl
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur
        transition
        hover:border-[#4f6ef7]/40
        hover:bg-white/10
      "
    >
      {/* INDEX BADGE */}
      <div className="
        mb-4
        flex h-9 w-9
        items-center justify-center
        rounded-xl
        bg-[#4f6ef7]/10
        text-xs font-semibold
        text-[#4f6ef7]
      ">
        {index + 1}
      </div>

      <h3 className="
        font-aeonik
        text-base sm:text-lg
        text-white
      ">
        {title}
      </h3>

      <p className="
        mt-3
        font-inter
        text-sm
        leading-relaxed
        text-gray-400
      ">
        {description}
      </p>

      {/* subtle hover accent */}
      <span className="
        pointer-events-none
        absolute bottom-0 left-0
        h-0.5 w-full
        origin-left scale-x-0
        bg-[#4f6ef7]
        transition-transform
        duration-300
        group-hover:scale-x-100
      " />
    </motion.div>
  );
}