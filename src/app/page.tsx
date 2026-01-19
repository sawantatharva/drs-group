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
import VisionMission from "@/components/VisionMission";

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

      <section className="relative bg-[#050b1a] text-white min-h-[80vh] flex items-center">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(9,38,99,0.45),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(79,110,247,0.25),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="font-aeonik text-3xl sm:text-5xl md:text-6xl leading-tight"
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
              <div className="relative mt-5 h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-aeonik text-base sm:text-lg text-gray-300"
                  >
                    {verticals[active]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-5 max-w-xl font-inter text-sm sm:text-base leading-relaxed text-gray-400"
              >
                DRS Group partners with corporates across India to deliver
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
                className="mt-8 flex flex-col sm:flex-row gap-4"
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

            {/* RIGHT – LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="
                relative
                flex
                justify-center
                md:justify-center
              "
            >
              {/* soft glow */}
              <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-[90px]" />

              <motion.img
                src="/logo/logo-white.svg"
                alt="DRS Group"
                className="
                  relative
                  w-56
                  sm:w-72
                  md:w-90
                "
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <GroupOverview />
      <GroupVerticals />
      <VisionMission />
      <HowWeWork />
      <Testimonials />
      <Certifications />
      <FinalCTA />
    </main>
  );
}