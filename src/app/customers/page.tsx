"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/customers/logos/logo-1.png",
  "/customers/logos/logo-2.png",
  "/customers/logos/logo-3.png",
  "/customers/logos/logo-4.png",
  "/customers/logos/logo-5.png",
  "/customers/logos/logo-6.png",
  "/customers/logos/logo-7.png",
  "/customers/logos/logo-8.png",
  "/customers/logos/logo-9.png",
  "/customers/logos/logo-10.png",
  "/customers/logos/logo-11.png",
  "/customers/logos/logo-12.png",
  "/customers/logos/logo-13.png",
  "/customers/logos/logo-14.png",
  "/customers/logos/logo-15.png",
  "/customers/logos/logo-16.png",
  "/customers/logos/logo-17.png",
  "/customers/logos/logo-18.png",
  "/customers/logos/logo-19.png",
  "/customers/logos/logo-20.png",
  "/customers/logos/logo-21.png",
];

export default function CustomersPage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-[#050b1a] pt-28 sm:pt-36 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-3xl sm:text-4xl md:text-5xl"
          >
            Our Customers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-4xl font-inter text-sm sm:text-base leading-relaxed text-gray-400"
          >
            The DRS Group has been associated with the following clients through
            structured engagements, supporting their operational requirements
            and long-term objectives. Our involvement focuses on consistent
            support, strong domain understanding, and value-driven outcomes
            tailored to each client’s needs.
          </motion.p>

        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              font-aeonik
              text-xl sm:text-2xl
              text-gray-900
              leading-relaxed
            "
          >
            “We believe strong partnerships are built on trust, performance and
            long-term commitment — not transactions.”
          </motion.p>

          <p className="mt-4 font-inter text-sm text-gray-500">
            — DRS Group
          </p>

        </div>
      </section>

      {/* LOGO GRID */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="font-aeonik text-2xl text-gray-900 mb-16 text-center">
            Organizations We Work With
          </h2>

          <div
            className="
              grid grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-x-12 gap-y-16
              items-center
              justify-items-center
            "
          >
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="
                  flex items-center justify-center
                  w-full
                "
              >
                <Image
                  src={logo}
                  alt={`Customer logo ${i + 1}`}
                  width={180}
                  height={90}
                  className="
                    object-contain
                    opacity-70
                    hover:opacity-100
                    hover:scale-105
                    transition
                    duration-300
                  "
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}