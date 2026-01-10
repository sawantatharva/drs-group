"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hero3D from "@/components/Hero3D";
import Certifications from "@/components/Certifications";
import GroupOverview from "@/components/GroupOverview";
import GroupVerticals from "@/components/GroupVerticals";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import FinalCTA from "@/components/FinalCTA";

const verticals = [
  "DRS Foundation",
  "DRS Consulting Services",
  "DRS Smart Solutions",
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % verticals.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#050b1a] text-white">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(9,38,99,0.45),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(79,110,247,0.25),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-32">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {/* Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="font-aeonik text-[30px] leading-tight 
                sm:text-5xl md:text-6xl"
              >
                Driving Operational
                <br />
                Excellence Through
                <br />
                <span className="bg-linear-to-r from-[#4f6ef7] to-[#7aa2ff] bg-clip-text text-transparent">
                  Intelligent Systems
                </span>
              </motion.h1>

              {/* Animated Verticals */}
              <div className="relative mt-5 h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-aeonik text-lg sm:text-xl text-gray-300"
                  >
                    {verticals[active]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Body */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-5 max-w-xl font-inter text-sm sm:text-base leading-relaxed text-gray-400"
              >
                DRS Group partners with enterprises across India to deliver
                execution-driven infrastructure, smart technology solutions,
                and strategic consulting for long-term performance.
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/solutions"
                  className="inline-flex justify-center items-center gap-2 rounded-xl 
                  bg-[#4f6ef7] px-6 py-4 text-sm font-medium text-white 
                  shadow-lg transition hover:brightness-110"
                >
                  Explore Solutions →
                </Link>

                <Link
                  href="/consulting"
                  className="inline-flex justify-center rounded-xl 
                  border border-white/20 px-6 py-4 text-sm 
                  text-gray-200 transition hover:border-white/40"
                >
                  Consulting Services
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT – 3D MODEL (Mobile + Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="
                relative flex items-center justify-center
                mt-12 md:mt-0
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  h-72 w-72
                  sm:h-96 sm:w-96
                  md:h-105 md:w-105
                  rounded-full
                  bg-[rgba(9,38,99,0.35)]
                  blur-[100px]
                "
              />

              {/* Canvas Wrapper */}
              <div
                className="
                  relative
                  h-72 w-72
                  sm:h-96 sm:w-96
                  md:h-115 md:w-115
                "
              >
                <Hero3D />
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <GroupOverview />
      <GroupVerticals />
      <HowWeWork />
      <Testimonials />
      <Certifications />
      <HomeCaseStudies />
      <FinalCTA />
    </main>
  );
}