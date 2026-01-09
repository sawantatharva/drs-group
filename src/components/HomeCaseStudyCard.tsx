"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Server,
  ShieldCheck,
} from "lucide-react";

interface HomeCaseStudyCardProps {
  slug: string;
  industry: string;
  title: string;
  summary: string;
  impact?: string; // ✅ optional now
  coverImage?: string;
  index: number;
}

/* Icon mapper */
const getIcon = (industry: string) => {
  if (industry.toLowerCase().includes("bank"))
    return <Building2 size={14} />;
  if (industry.toLowerCase().includes("data"))
    return <Server size={14} />;
  if (industry.toLowerCase().includes("security"))
    return <ShieldCheck size={14} />;
  return <Briefcase size={14} />;
};

export default function HomeCaseStudyCard({
  slug,
  industry,
  title,
  summary,
  impact,
  coverImage,
  index,
}: HomeCaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/customers/${slug}`}
        className="
          group block h-full
          overflow-hidden rounded-2xl
          border bg-white
          transition-all
          hover:shadow-xl
          active:scale-[0.98]
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-16/10 bg-gray-100">
          {coverImage && coverImage.startsWith("/") ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
              Case Study
            </div>
          )}

          {/* Industry Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <span className="text-[#4f6ef7]">
              {getIcon(industry)}
            </span>
            {industry}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 sm:p-6">
          <h3 className="
            font-aeonik text-base sm:text-lg
            leading-snug text-gray-900
          ">
            {title}
          </h3>

          <p className="
            mt-2 sm:mt-3
            font-inter text-sm
            text-gray-600
            line-clamp-3
          ">
            {summary}
          </p>

          {/* Impact */}
          {impact && (
            <div className="mt-4">
              <span className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#4f6ef7]/10
                px-4 py-1.5
                text-xs font-medium
                text-[#4f6ef7]
              ">
                ⚡ {impact}
              </span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#4f6ef7]">
            View Case Study
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}