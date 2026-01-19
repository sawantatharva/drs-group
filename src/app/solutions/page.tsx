"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsPage() {

  const services = [
    {
      title: "Complete Electrical Solutions",
      desc:
        "Installation, maintenance and optimization of electrical infrastructure across commercial and industrial environments.",
      image: "/solutions/1.jpg",
    },
    {
      title: "UPS Solutions",
      desc:
        "Reliable UPS and battery systems ensuring uninterrupted power supply and protection against outages.",
      image: "/solutions/2.jpg",
    },
    {
      title: "Air Conditioning Solutions",
      desc:
        "Energy-efficient HVAC systems for commercial and industrial environments.",
      image: "/solutions/6.jpg",
    },
    {
      title: "Inverter & Batteries",
      desc:
        "High-performance inverter and battery systems designed for efficiency and long service life.",
      image: "/solutions/4.jpg",
    },
    {
      title: "Data Center Solutions",
      desc:
        "End-to-end data center planning, power infrastructure and facility support.",
      image: "/solutions/8.jpg",
    },
    {
      title: "Complete Security Solutions",
      desc:
        "Integrated surveillance, access control and monitoring systems.",
      image: "/solutions/12.jpg",
    },
    {
      title: "Battery Solutions",
      desc:
        "Advanced energy storage solutions for enterprise power requirements.",
      image: "/solutions/5.jpg",
    },
    {
      title: "Complete Fire Solutions",
      desc:
        "Fire detection, suppression and evacuation systems with AMC support.",
      image: "/solutions/9.jpg",
    },
    {
      title: "Solar Solutions",
      desc:
        "Design and installation of solar power systems for commercial and industrial use.",
      image: "/solutions/13.jpg",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-[#050b1a] pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,38,99,0.45),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-4xl md:text-5xl"
          >
            DRS Smart Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-3xl font-inter text-base leading-relaxed text-gray-400"
          >
            Execution-driven facility management and infrastructure solutions
            designed to ensure reliability, safety, compliance and measurable
            operational performance.
          </motion.p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="font-aeonik text-2xl md:text-3xl text-gray-900">
              Execution-Led Infrastructure Solutions
            </h2>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-600">
              DRS Smart Solutions delivers end-to-end electrical and facility
              management services — from design and installation to
              optimization and long-term support.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              Our approach blends engineering expertise, technology enablement
              and structured execution to deliver consistent outcomes across
              enterprise environments.
            </p>
          </div>

          <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
            <Image
              src="/solutions/solutions.png"
              alt="DRS Solutions Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">

          <h3 className="font-aeonik text-2xl md:text-3xl text-gray-900 mb-12">
            Our Offerings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl bg-white border p-8 transition hover:shadow-lg"
              >
                <div className="relative mb-6 aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
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

{/* METHODOLOGY FLOW */}
{/* FRAMEWORK */}
<section
  id="framework"
  className="relative bg-[#050b1a] py-32 text-white overflow-hidden"
>
  {/* Subtle grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />

  <div className="relative mx-auto max-w-6xl px-6">

    {/* Header */}
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl font-aeonik">
        Our 6-Step Transformation Framework
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        A structured methodology used by DRS Consulting to
        uncover savings and drive operational excellence.
      </p>
    </div>

    {/* Timeline */}
    <div className="mt-24 relative">

      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-white/10" />

      {[
        {
          title: "Site Diagnostics",
          desc:
            "On-ground audits to evaluate infrastructure, vendors and process gaps.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M10 2h4l1 3h3l2 2v4l-2 2h-3l-1 3h-4l-1-3H6l-2-2V7l2-2h3l1-3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          title: "Cost Mapping",
          desc:
            "Detailed spend analysis to identify leakage and optimization scope.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M3 3v18h18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7 14l3-3 4 4 4-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          title: "Energy Assessment",
          desc:
            "HVAC, UPS and power usage evaluation to reduce energy costs.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          title: "ROI Modeling",
          desc:
            "Payback period and financial impact projections.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 7v10M8 11h8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          title: "Execution",
          desc:
            "Implementation through vendors, automation and SOPs.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M5 12l5 5L20 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          ),
        },
        {
          title: "Savings Tracking",
          desc:
            "Continuous monitoring to ensure projected savings are achieved.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
      ].map((step, i) => (
        <div
          key={step.title}
          className={`relative mb-24 flex flex-col md:flex-row ${
            i % 2 === 0
              ? "md:justify-start"
              : "md:justify-end"
          }`}
        >
          {/* Node */}
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2">
            <div className="h-11 w-11 rounded-full bg-[#4f6ef7] flex items-center justify-center text-white">
              {step.icon}
            </div>
          </div>

          {/* Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="ml-16 md:ml-0 md:w-[45%] rounded-3xl bg-white/5 p-8 border border-white/10 backdrop-blur"
          >
            <span className="text-[#4f6ef7] text-xs font-semibold">
              STEP {i + 1}
            </span>

            <h3 className="mt-2 text-xl font-aeonik">
              {step.title}
            </h3>

            <p className="mt-3 text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= SECTORS ================= */}
<section className="bg-white py-28">
  <div className="mx-auto max-w-7xl px-6">

    <h3 className="font-aeonik text-2xl text-gray-900 mb-12">
      Sectors We Serve
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

      {[
        {
          title: "IT Parks & Data Centers",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <rect x="3" y="4" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="3" y="14" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Manufacturing Facilities",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path d="M3 20V10l6 3V10l6 3V4h6v16H3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Healthcare & Hospitals",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path d="M12 3v18M3 12h18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Corporate Offices",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Enterprise Campuses",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path d="M3 10l9-6 9 6v10H3V10z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Retail & Commercial",
          icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path d="M3 9h18l-1 11H4L3 9z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 9V6a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border bg-white p-6 text-center transition hover:shadow-md"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4f6ef7]/10 text-[#4f6ef7]">
            {item.icon}
          </div>

          <p className="font-inter text-sm text-gray-700">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="bg-[#050b1a] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="font-aeonik text-2xl md:text-3xl">
              Why Choose DRS Smart Solutions
            </h3>

            <ul className="mt-6 space-y-4 font-inter text-sm text-gray-400">
              <li>✔ SLA-driven service delivery</li>
              <li>✔ Technology-enabled monitoring</li>
              <li>✔ Compliance-focused operations</li>
              <li>✔ Measurable performance outcomes</li>
              <li>✔ PAN-India service network</li>
              <li>✔ 24/7 professional support</li>
            </ul>
          </div>

          {/* GRAPHIC SLOT */}
          <div className="relative aspect-4/3 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-sm">
          <Image
              src="/solutions/vp.png"
              alt="DRS Solutions Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <p className="font-aeonik text-xl text-gray-900">
            Looking for reliable execution partners?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-8 py-4 text-sm font-medium text-white shadow-[0_12px_36px_rgba(9,38,99,0.35)] transition hover:brightness-110"
          >
            Talk to Our Team →
          </Link>
        </div>
      </section>

    </main>
  );
}