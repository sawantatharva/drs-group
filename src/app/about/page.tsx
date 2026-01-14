"use client";

import Certifications from "@/components/Certifications";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-[#050b1a] py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,38,99,0.45),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-4xl md:text-5xl"
          >
            About DRS Group
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl font-inter text-base leading-relaxed text-gray-400"
          >
            DRS Group is an enterprise-focused organization delivering
            execution-driven infrastructure solutions, strategic consulting,
            and governance-led operational excellence across India.
          </motion.p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-aeonik text-2xl md:text-3xl text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-600">
            DRS Group is a diversified operations and consulting organization, incorporated in 2021, built on the legacy of over a decade of enterprise experience through its parent foundation. The Group brings together engineering, consulting, and technology capabilities within a unified delivery model to support complex, mission-critical environments.            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
            We partner with organizations across India to assess, optimize, and govern operational performance, delivering measurable outcomes in efficiency, compliance, and cost optimization. Our services are delivered through DRS Smart Solutions and DRS Consultancy Services, enabling end-to-end support from strategy to execution. Alongside our commercial operations, DRS Foundation focuses on initiatives that contribute positively to communities and broader societal development.

            </p>
          </div>

          {/* IMAGE SLOT */}
          <div className="relative aspect-4/3 rounded-3xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            <Image
              src="/about/ops.png"
              alt="DRS leadership and operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="bg-[#050b1a] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 font-inter text-xs tracking-widest uppercase text-gray-400">
            Numbers That Define Us
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "14+", label: "Years in Business" },
              { value: "100+", label: "Enterprise Customers" },
              { value: "11+", label: "Core Professionals" },
              { value: "2K+", label: "Assets Protected" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-aeonik text-4xl md:text-5xl">
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

      {/* ================= CONSULTING DIVISION ================= */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-aeonik text-2xl text-gray-900">
              DRS Consulting Services
            </h3>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-600">
              Our consulting division is led by seasoned professionals and
              subject-matter experts from diverse fields. We conduct thorough,
              data-driven assessments of enterprise operations to identify
              inefficiencies, cost leakages, and performance gaps.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              Through meticulous analysis of historical data and operational
              benchmarks, we design structured improvement programs that
              optimize costs while ensuring service quality, uptime, and
              compliance remain uncompromised.
            </p>
          </div>

          {/* GRAPHIC SLOT */}
          <div className="relative aspect-4/3 rounded-3xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
                        <Image
              src="/about/con.png"
              alt="DRS leadership and operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SMART SOLUTIONS ================= */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-4/3 rounded-3xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          <Image
              src="/about/fm.png"
              alt="DRS leadership and operations"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-aeonik text-2xl text-gray-900">
              DRS Smart Solutions
            </h3>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-600">
              DRS Smart Solutions specializes in operational cost optimization
              for financial institutions and banks across India, delivering
              advanced Facility Management (FM) services supported by
              technology-driven execution models.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              Our business model aligns performance outcomes with client value —
              ensuring measurable savings and operational improvements at no
              additional cost to the organization.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDATION ================= */}
      <section className="bg-[#050b1a] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-aeonik text-2xl text-white">
              DRS Foundation
            </h3>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-400">
              Beyond business outcomes, DRS Group is committed to creating
              positive social impact through the DRS Foundation — our social
              responsibility arm focused on community upliftment and
              sustainable initiatives.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-400">
              The foundation works across education, skill development, and
              community welfare programs, guided by the belief that operational
              excellence must extend beyond enterprises and into society.
            </p>
          </div>

          {/* FOUNDATION IMAGE SLOT */}
          <div className="relative aspect-4/3 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-sm">
            <Image
              src="/foundation/1.jpeg"
              alt="DRS leadership and operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

          {/* ================= CORE VALUES ================= */}
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-aeonik text-2xl md:text-3xl text-gray-900 mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Integrity & Transparency",
              icon: (
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M12 3l7 4v6c0 5-7 8-7 8s-7-3-7-8V7l7-4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              desc:
                "We operate with honesty, clarity, and accountability across every engagement and stakeholder interaction.",
            },
            {
              title: "Customer-Centric Execution",
              icon: (
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 21c0-4 14-4 14 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              desc:
                "Client outcomes drive our decisions, execution models, and long-term partnerships.",
            },
            {
              title: "Quality & Compliance Excellence",
              icon: (
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M9 12l2 2 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              desc:
                "We adhere to rigorous quality standards, regulatory compliance, and safety benchmarks.",
            },
            {
              title: "Continuous Improvement",
              icon: (
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M3 12a9 9 0 101-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 4v5h5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              desc:
                "We continuously evolve processes, systems, and capabilities to deliver better outcomes.",
            },
            {
              title: "Technology-Driven Delivery",
              icon: (
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 8h8v8H8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              ),
              desc:
                "Technology and data form the backbone of our operational and governance models.",
            },
            {
              title: "Accountability & Ownership",
              icon: (
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M12 6v6l4 2"
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
              desc:
                "We take complete ownership of outcomes, timelines, and performance commitments.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-200 p-8 transition hover:shadow-md"
            >
              <div className="flex items-center gap-4 text-(--color-primary)">
                {item.icon}
                <h3 className="font-aeonik text-lg text-gray-900">
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
    <Certifications />
    </main>
  );
}