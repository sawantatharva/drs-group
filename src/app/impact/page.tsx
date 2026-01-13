"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#050b1a] pt-28 sm:pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,38,99,0.5),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-3xl sm:text-4xl md:text-5xl"
          >
            Creating Impact That Matters
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-3xl font-inter text-sm sm:text-base leading-relaxed text-gray-400"
          >
            Through DRS Foundation, we extend our philosophy of excellence beyond
            enterprises — working directly with communities to build sustainable,
            inclusive futures.
          </motion.p>
        </div>
      </section>

      {/* ================= FOUNDATION INTRO ================= */}
      <section className="bg-white py-24 sm:py-28">
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

            <h2 className="font-aeonik text-2xl sm:text-3xl text-gray-900">
              DRS Foundation
            </h2>

            <p className="mt-6 font-inter text-base leading-relaxed text-gray-600">
              DRS Foundation is our dedicated social impact arm focused on
              empowering underserved communities across India.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              We work at the grassroots level to improve access to education,
              promote women empowerment, and support senior citizens through
              structured programs and community initiatives.
            </p>

            <p className="mt-4 font-inter text-base leading-relaxed text-gray-600">
              Our mission is simple — create real change where it matters most.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-4/3 rounded-3xl overflow-hidden"
          >
            <Image
              src="/about/impact.png"
              alt="DRS Foundation"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">

          <h3 className="font-aeonik text-2xl text-gray-900 mb-12">
            Focus Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Education */}
            <div className="rounded-2xl border bg-white p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f6ef7]/10 text-[#4f6ef7]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M5 10v5c0 2 14 2 14 0v-5" />
                </svg>
              </div>

              <h4 className="font-aeonik text-lg text-gray-900">
                Education Support for Children
              </h4>

              <p className="mt-4 font-inter text-sm leading-relaxed text-gray-600">
                Scholarships, digital learning tools and school infrastructure
                support for underprivileged children.
              </p>
            </div>

            {/* Women */}
            <div className="rounded-2xl border bg-white p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f6ef7]/10 text-[#4f6ef7]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M12 11v10" />
                  <path d="M9 18h6" />
                </svg>
              </div>

              <h4 className="font-aeonik text-lg text-gray-900">
                Women Empowerment
              </h4>

              <p className="mt-4 font-inter text-sm leading-relaxed text-gray-600">
                Skill training, entrepreneurship programs and employment
                opportunities for women.
              </p>
            </div>

            {/* Elderly */}
            <div className="rounded-2xl border bg-white p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f6ef7]/10 text-[#4f6ef7]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 19v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <h4 className="font-aeonik text-lg text-gray-900">
                Elderly Care
              </h4>

              <p className="mt-4 font-inter text-sm leading-relaxed text-gray-600">
                Healthcare support, social engagement programs and wellbeing
                initiatives for senior citizens.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EVENTS SECTION ================= */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">

          <h3 className="font-aeonik text-2xl text-gray-900 mb-12">
            Upcoming Events
          </h3>

          {/* EVENT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-3xl border bg-gray-50 overflow-hidden"
          >
            {/* COVER */}
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src="/events/elderthon3o.jpg"
                alt="Elderthon Event"
                fill
                className="object-contain bg-black"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 flex flex-col justify-center">

              <span className="inline-block mb-3 rounded-full bg-[#4f6ef7]/10 px-6 py-3 text-xs font-medium text-[#4f6ef7]">
                Season 3
              </span>

              <h4 className="font-aeonik text-2xl text-gray-900">
                ELDERTHON – Walkathon for Seniors
              </h4>

              <p className="mt-4 font-inter text-sm leading-relaxed text-gray-600">
                A 3 KM walkathon dedicated exclusively to senior citizens —
                promoting active ageing, community bonding and wellness.
              </p>

              {/* DETAILS */}
              <div className="mt-6 space-y-2 text-sm text-gray-700">
                <p><strong>Date:</strong> Sunday, 8 February 2026</p>
                <p><strong>Time:</strong> 06:00 AM</p>
                <p><strong>Venue:</strong> Icchapurti Ganesh Mandir, Airoli</p>
              </div>

              {/* ACTION */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/events/elderthon3o.pdf"
                  target="_blank"
                  className="rounded-xl bg-[#4f6ef7] px-6 py-3 text-sm font-medium text-white hover:brightness-110"
                >
                  View Event PDF
                </Link>
                <a
                  href="tel:9930099368"
                  className="
                    rounded-xl 
                    border 
                    px-6 py-3 
                    text-sm 
                    font-medium
                    flex items-center gap-2
                    hover:bg-gray-50
                    transition
                  "
                >
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#4f6ef7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5A2.5 2.5 0 015.5 3h1.7c.8 0 1.5.5 1.7 1.3l.6 2.4a1.8 1.8 0 01-.5 1.8l-1.2 1.2a14.3 14.3 0 006.4 6.4l1.2-1.2a1.8 1.8 0 011.8-.5l2.4.6a1.8 1.8 0 011.3 1.7v1.7A2.5 2.5 0 0118.5 21h-1C9.5 21 3 14.5 3 6.5v-1z"
                    />
                  </svg>

                  Call to Register
                </a>
                              </div>
            </div>
          </motion.div>

          {/* CALENDAR MOCK */}
          <div className="mt-16">
            <h4 className="font-aeonik text-lg mb-6 text-gray-900">
              February 2026
            </h4>

            <div className="grid grid-cols-7 gap-3 text-center text-xs">
              {["S","M","T","W","T","F","S"].map((d, i)=>(
                <div
                  key={`${d}-${i}`}
                  className="font-medium text-gray-500"
                >
                  {d}
                </div>
              ))}

              {Array.from({ length: 28 }).map((_, i) => {
                const day = i + 1;
                const isEvent = day === 8;

                return (
                  <div
                    key={day}
                    className={`rounded-lg py-3 ${
                      isEvent
                        ? "bg-[#4f6ef7] text-white font-medium"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#050b1a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <p className="font-aeonik text-xl">
            Want to partner with us for social impact?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#4f6ef7] px-8 py-4 text-sm font-medium text-white hover:brightness-110"
          >
            Connect With Us →
          </Link>
        </div>
      </section>

    </main>
  );
}