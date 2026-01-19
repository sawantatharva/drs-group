"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ConsultingPage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-[#050b1a] pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,38,99,0.45),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-4xl md:text-5xl"
          >
            DRS Consulting Services
          </motion.h1>

          <p className="mt-5 max-w-3xl text-gray-400">
            A specialized operational excellence partner delivering measurable
            cost optimization and FM transformation across India.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-aeonik">
              Operational Excellence
              <span className="block text-[#4f6ef7]">
                Delivered With Accountability
              </span>
            </h2>

            <p className="mt-6 text-gray-600">
              Our team of seasoned professionals conducts deep operational
              assessments using historical data, site audits, and performance
              benchmarks to identify savings opportunities without compromising
              service quality.
            </p>

            <p className="mt-4 text-gray-600">
              We specialize in financial institutions and banks, delivering
              technology-enabled FM transformation at zero additional cost.
            </p>
          </div>

          <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
            <Image
              src="/consulting/consulting.jpg"
              alt="DRS Consulting Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

     {/* VISION & MISSION */}
<section className="bg-gray-50 py-28">
  <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* IMAGE / GRAPHIC */}
    <div className="order-1 md:order-1 relative aspect-4/3 rounded-3xl overflow-hidden bg-white flex items-center justify-center">
      <img
        src="/consulting/7.png"
        alt="Vision & Mission"
        className="object-cover w-full h-full"
      />
    </div>

    {/* CONTENT */}
    <div className="order-2 md:order-2 space-y-8">

      {[
        {
          title: "Our Vision",
          desc:
            "To deliver intelligent and sustainable FM transformation that reduces operational costs and enhances performance.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-[#4f6ef7]"
            >
              <path
                d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
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
          title: "Our Mission",
          desc:
            "To empower organizations with data-driven strategies, trust-based partnerships, and continuous improvement.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-[#4f6ef7]"
            >
              <path
                d="M12 2l4 8 8 1-6 6 1 8-7-4-7 4 1-8-6-6 8-1 4-8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-8 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            {item.icon}
            <h3 className="font-aeonik text-xl text-gray-900">
              {item.title}
            </h3>
          </div>

          <p className="mt-4 font-inter text-sm leading-relaxed text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SERVICES
  <section className="bg-white py-28">
    <div className="mx-auto max-w-7xl px-6">

      <h2 className="text-3xl md:text-4xl font-aeonik mb-16">
        Our Consulting Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            title: "Cost Optimisation",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 6h8M8 12h8M8 18h8" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ),
          },
          {
            title: "Electrical Audits for Safety",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ),
          },
          {
            title: "Automation & Digital Transformation",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ),
          },
          {
            title: "Operational Excellence by New Technology",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              </svg>
            ),
          },
        ].map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border p-8 hover:shadow-xl transition"
          >
            <div className="h-12 w-12 rounded-xl bg-[#4f6ef7]/10 flex items-center justify-center text-[#4f6ef7] group-hover:bg-[#4f6ef7] group-hover:text-white transition">
              {s.icon}
            </div>

            <p className="mt-6 font-medium text-lg">
              {s.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>  
  */}

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
        Cost Optimisation Framework
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        A structured, technology-driven approach focused on
        cost optimisation with enhanced solutions.
      </p>
    </div>

    {/* Timeline */}
    <div className="mt-24 relative">

      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-white/10" />

      {[
        {
          title: "Site Assessment",
          desc:
            "Detailed on-ground infrastructure audit and baseline performance study.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M10 2h4l1 3h3l2 2v4l-2 2h-3l-1 3h-4l-1-3H6l-2-2V7l2-2h3l1-3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Cost & Usage Analysis",
          desc:
            "Identification of high-cost areas, wastage and inefficiencies.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M3 3v18h18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 14l3-3 4 4 4-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Energy Optimisation",
          desc:
            "Evaluation of electrical, UPS and HVAC systems for efficiency improvement.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Enhanced Solution Design",
          desc:
            "Cost optimisation using advanced technology and smarter systems.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 7v10M8 11h8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          title: "Implementation",
          desc:
            "Execution through certified teams and trusted partners.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          ),
        },
        {
          title: "Monitoring & Savings Tracking",
          desc:
            "Continuous monitoring to ensure sustained cost savings.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ),
        },
      ].map((step, i) => (
        <div
          key={step.title}
          className={`relative mb-24 flex flex-col md:flex-row ${
            i % 2 === 0 ? "md:justify-start" : "md:justify-end"
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

      {/* SECTORS */}
<section className="bg-gray-50 py-28">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-3xl md:text-4xl font-aeonik mb-16">
      Sectors We Serve
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "UPS & Inverter Optimization",
          img: "/sectors/7.png",
        },
        {
          title: "HVAC System Optimization",
          img: "/sectors/8.png",
        },
        {
          title: "Electricity Expense Management",
          img: "/sectors/9.png",
        },
        {
          title: "Battery Health Monitoring",
          img: "/sectors/11.png",
        },
        {
          title: "Sustainability Projects",
          img: "/sectors/10.png",
        },
        {
          title: "CCTV & Security Infrastructure",
          img: "/sectors/12.png",
        },
      ].map((sector) => (
        <div
          key={sector.title}
          className="group rounded-2xl overflow-hidden bg-white border hover:shadow-xl transition"
        >
          {/* IMAGE */}
          <div className="relative h-52">
            <img
              src={sector.img}
              alt={sector.title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* TEXT */}
          <div className="p-6">
            <p className="font-medium text-lg">
              {sector.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ENGAGEMENT MODEL */}
      <section className="bg-[#050b1a] pt-28 pb-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-aeonik mb-6">
            Performance-Based Engagement
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Guaranteed savings</li>
            <li>✔ Savings exceed implementation cost</li>
            <li>✔ Fees linked to performance</li>
            <li className="text-[#4f6ef7] font-medium">
              No Savings = Zero Fees
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-xl font-aeonik">
            Ready to optimize your operations?
          </p>

          <Link
            href="/contact"
            className="rounded-xl bg-[#4f6ef7] px-8 py-4 text-white"
          >
            Request a Consultation →
          </Link>
        </div>
      </section>

    </main>
  );
}