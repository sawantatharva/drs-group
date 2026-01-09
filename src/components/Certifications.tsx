"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  HardHat,
  CheckCircle2,
} from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management Systems",
    icon: <Leaf size={26} />,
  },
  {
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety",
    icon: <HardHat size={26} />,
  },
];

const trustPoints = [
  "PAN-India Service Network",
  "Certified & Compliant Operations",
  "Trusted by Enterprise Clients",
];

export default function Certifications() {
  return (
    <section className="relative bg-[#050b1a] py-24 text-white">

      {/* Soft divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION TITLE */}
        <div className="mb-14 text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gray-400">
            Trust & Compliance
          </p>
          <h2 className="mt-3 font-aeonik text-2xl md:text-3xl">
            Certified Excellence
          </h2>
        </div>

        {/* CERTIFICATION CARDS */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
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
              <div className="
                mb-5 flex h-12 w-12
                items-center justify-center
                rounded-xl
                bg-[#4f6ef7]/10
                text-[#4f6ef7]
              ">
                {cert.icon}
              </div>

              <p className="font-aeonik text-lg">
                {cert.title}
              </p>

              <p className="mt-2 font-inter text-sm text-gray-400">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TRUST POINTS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            border-t
            border-white/10
            pt-10
            sm:grid-cols-2
            md:grid-cols-3
          "
        >
          {trustPoints.map((point) => (
            <div
              key={point}
              className="
                flex items-center
                justify-center
                gap-3
                text-sm
                text-gray-300
              "
            >
              <CheckCircle2
                size={18}
                className="text-[#4f6ef7]"
              />
              {point}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}