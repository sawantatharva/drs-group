"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#050b1a] pt-36 pb-24 text-white md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-aeonik text-4xl md:text-5xl"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl font-inter text-base leading-relaxed text-gray-400"
          >
            Reach out to DRS Group for consulting, execution partnerships,
            or operational discussions. Our team responds with clarity
            and intent.
          </motion.p>
        </div>
      </section>

      {/* DETAILS + MAP */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-16 md:grid-cols-2">
          
          {/* CONTACT DETAILS */}
          <div>
            <h2 className="font-aeonik text-2xl text-gray-900">
              Get in Touch
            </h2>

            <div className="mt-6 space-y-6 font-inter text-gray-700">
              <p className="leading-relaxed">
                <span className="block font-medium text-gray-900">
                  Office Address
                </span>
                Plot no. KAC-35, TTC Industrial Area, Opp. Digha<br />
                Railway Station, Digha-Airoli, Navi Mumbai – 400708.
              </p>

              <p>
                <span className="block font-medium text-gray-900">
                  Email
                </span>
                <a
                  href="mailto:info@drsss.net"
                  className="text-(--color-primary) hover:underline"
                >
                  info@drsss.net
                </a>
              </p>

              <p>
                <span className="block font-medium text-gray-900">
                  Phone
                </span>
                <a
                  href="tel:7710002293"
                  className="text-(--color-primary) hover:underline"
                >
                  +91-7710002293
                </a>
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917710002293"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-xl bg-(--color-primary)
                  px-6 py-4 text-sm font-medium text-white
                  transition hover:brightness-110
                "
              >
                Talk on WhatsApp
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>

              {/* Call Back */}
              <a
                href="mailto:info@drsss.net?subject=Request%20a%20Call%20Back"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-xl border border-gray-300
                  px-6 py-4 text-sm font-medium text-gray-800
                  transition hover:border-gray-400
                "
              >
                Request a Call Back
                <svg
                  className="h-4 w-4 text-gray-600 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="w-full h-90 md:h-105 rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="DRS Group Location"
              src="https://www.google.com/maps?q=Top%20Heights%20Airoli%20Sector%2019&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}