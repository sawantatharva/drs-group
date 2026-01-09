"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050b1a] py-24 sm:py-32 text-white">
      
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(9,38,99,0.45),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(79,110,247,0.25),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Heading */}
          <h2 className="
            font-aeonik 
            text-3xl sm:text-4xl md:text-5xl
            leading-tight
          ">
            Ready to Build Systems That
            <br />
            <span className="
              bg-linear-to-r
              from-[#4f6ef7]
              via-[#7aa2ff]
              to-[#4f6ef7]
              bg-clip-text
              text-transparent
              drop-shadow-[0_2px_12px_rgba(79,110,247,0.35)]
            ">
              Deliver Real Impact
            </span>
            ?
          </h2>

          {/* Body */}
          <p className="
            mt-5 sm:mt-6
            font-inter
            text-sm sm:text-base
            leading-relaxed
            text-gray-400
          ">
            Whether you’re exploring strategic consulting, intelligent systems,
            or long-term operational transformation, DRS Group partners with you
            from clarity to execution.
          </p>

          {/* CTAs */}
          <div className="
            mt-10 sm:mt-12
            flex flex-col sm:flex-row
            justify-center
            gap-4
          ">
            {/* Primary */}
            <Link
              href="/contact"
              className="
                group inline-flex
                items-center justify-center
                gap-3
                rounded-xl
                bg-(--color-primary)
                px-9 py-4
                text-sm font-medium
                text-white
                shadow-[0_14px_40px_rgba(9,38,99,0.55)]
                transition
                hover:brightness-110
              "
            >
              Connect With Us

              {/* Animated arrow */}
              <span className="relative h-5 w-5 overflow-hidden">
                <span className="
                  absolute inset-0
                  flex items-center justify-center
                  transition-transform duration-300
                  group-hover:translate-x-6
                ">
                  →
                </span>
                <span className="
                  absolute inset-0
                  flex items-center justify-center
                  -translate-x-6
                  transition-transform duration-300
                  group-hover:translate-x-0
                ">
                  →
                </span>
              </span>
            </Link>

            {/* Secondary */}
            <Link
              href="/consulting"
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-white/20
                px-9 py-4
                text-sm font-medium
                text-gray-200
                transition
                hover:border-white/40
                hover:text-white
              "
            >
              Explore Our Approach
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}