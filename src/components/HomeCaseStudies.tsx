"use client";

import SectionHeader from "./SectionHeader";
import HomeCaseStudyCard from "./HomeCaseStudyCard";
import { customers } from "@/data/customers";
import Link from "next/link";

export default function HomeCaseStudies() {
  return (
    <section className="relative bg-[#050b1a] py-28 text-white">
      {/* subtle divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20">

          {/* HEADER */}
          <SectionHeader
            label="Case Studies"
            title="Delivering Measurable"
            highlight="Real-World Impact"
            description="A snapshot of how DRS Group partners with organizations to solve complex challenges, improve operations, and deliver lasting value."
          />

          {/* CASE STUDIES GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {customers.slice(0, 3).map((item, index) => (
              <HomeCaseStudyCard
                key={item.slug}
                slug={item.slug}
                industry={item.industry}
                title={item.title}
                summary={item.summary}
                coverImage={item.coverImage}
                index={index}
                /* impact optional now */
              />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/customers"
              className="group inline-flex items-center gap-3 rounded-xl bg-(--color-primary) px-8 py-4 text-sm font-medium text-white shadow-[0_12px_36px_rgba(9,38,99,0.45)] transition hover:brightness-110"
            >
              View All Case Studies
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}