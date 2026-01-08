"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero3D from "@/components/Hero3D";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-aeonik text-4xl md:text-5xl leading-tight text-gray-900">
                Driving Operational Excellence
                <br />
                <span className="text-(--color-primary)">
                  Through Intelligent Solutions
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 font-inter max-w-xl">
                DRS Group partners with enterprises across India to deliver
                execution-driven infrastructure solutions and strategic
                consulting that improve performance, reliability, and cost
                efficiency.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/smart-solutions"
                  className="rounded-lg bg-(--color-primary) px-6 py-3 text-white font-medium"
                >
                  Explore Solutions
                </Link>

                <Link
                  href="/consulting"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-gray-800 font-medium hover:border-gray-400"
                >
                  Consulting Services
                </Link>
              </div>
            </motion.div>

            {/* RIGHT: 3D (Desktop only) */}
            <div className="relative h-140 hidden md:flex items-center justify-center">
              <div className="w-full h-full max-w-130">
                <Hero3D />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Certifications />
    </main>
  );
}