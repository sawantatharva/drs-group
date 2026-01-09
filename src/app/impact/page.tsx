"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#050b1a] pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,38,99,0.5),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-4xl md:text-5xl"
          >
            Creating Impact That Matters
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-3xl font-inter text-base leading-relaxed text-gray-400"
          >
            At DRS Group, impact goes beyond operational excellence. Through our
            foundation and enterprise engagements, we create meaningful change
            for businesses and communities alike.
          </motion.p>
        </div>
      </section>

      {/* ================= FOUNDATION ================= */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-inter text-xs tracking-widest uppercase text-gray-500">
              Social Responsibility
            </p>

            <h2 className="font-aeonik text-2xl md:text-3xl text-gray-900">
              DRS Foundation
            </h2>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-600">
              DRS Foundation is our social impact arm, created to extend our
              philosophy of excellence beyond enterprises and into society.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              We actively work across education, skill development, and
              community upliftment to empower individuals and build sustainable
              futures.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              Our belief is simple — true success is measured by the lives we
              improve, not just the numbers we achieve.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-4/3 rounded-3xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm"
          >
            <Image
              src="/about/impact.png"
              alt="DRS leadership and operations"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FOUNDATION PROGRAMS ================= */}

      {/* ================= FOUNDATION PROGRAMS ================= */}
<section className="bg-gray-50 py-28">
  <div className="mx-auto max-w-7xl px-6">

    <h3 className="font-aeonik text-2xl text-gray-900 mb-12">
      Focus Areas
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Education Support",
          desc:
            "Scholarships, digital learning initiatives, and infrastructure support for underprivileged students.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path
                d="M3 7l9-4 9 4-9 4-9-4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 10v5c0 2 14 2 14 0v-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          title: "Skill Development",
          desc:
            "Vocational training programs designed to improve employability and career readiness.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path
                d="M3 12h18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 3v18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          title: "Community Welfare",
          desc:
            "Healthcare camps, awareness drives, and sustainable livelihood initiatives.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path
                d="M12 21s-7-4.5-7-10a4 4 0 018-1 4 4 0 018 1c0 5.5-7 10-7 10z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="
            group
            rounded-2xl 
            border border-gray-200 
            bg-white 
            p-8
            transition
            hover:shadow-lg
          "
        >
          {/* ICON */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f6ef7]/10 text-[#4f6ef7]">
            {item.icon}
          </div>

          <h4 className="font-aeonik text-lg text-gray-900">
            {item.title}
          </h4>

          <p className="mt-4 font-inter text-sm leading-relaxed text-gray-600">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ================= ENTERPRISE IMPACT ================= */}
      <section className="bg-[#050b1a] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-3 font-inter text-xs tracking-widest uppercase text-gray-400">
            Business Outcomes
          </p>

          <h3 className="font-aeonik text-2xl md:text-3xl mb-12">
            Enterprise Impact
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { label: "Admin Cost Reduction", value: "₹48 Cr+" },
              { label: "HVAC Optimization", value: "20–25%" },
              { label: "UPS Savings", value: "₹2 Cr+" },
              { label: "Locations Supported", value: "PAN-India" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <p className="font-aeonik text-[#4f6ef7] text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 font-inter text-sm text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <p className="font-aeonik text-xl text-gray-900">
            Want to collaborate on social or business impact?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-8 py-4 text-sm font-medium text-white shadow-[0_12px_36px_rgba(9,38,99,0.35)] transition hover:brightness-110"
          >
            Connect With Us →
          </Link>
        </div>
      </section>

    </main>
  );
}