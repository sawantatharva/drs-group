"use client";

import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "DRS brought execution discipline and analytical clarity to a large-scale cost optimization program. Their structured approach delivered tangible savings without disrupting operations.",
    name: "Enterprise Cost Optimization",
    role: "₹48 Cr Annual Savings",
    company: "Administrative Cost Optimization",
  },
  {
    quote:
      "DRS translated strategic intent into commercially sound, data-backed recommendations. Their space-utilization and lease rationalization work resulted in measurable, pan-India impact.",
    name: "Real Estate & Portfolio Rationalization",
    role: "₹14 Cr Annual Savings",
    company: "Office Lease Portfolio",
  },
  {
    quote:
      "DRS combines deep technical expertise with hands-on execution. Their HVAC and power infrastructure optimization delivered sustained savings while maintaining service continuity.",
    name: "Technical Infrastructure Optimization",
    role: "₹4.5 Cr+ Annual Savings",
    company: "HVAC, UPS & Battery Systems",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#050b1a] py-24 sm:py-28 text-white">
      {/* subtle divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 bg-linear-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-16 sm:gap-20">

          {/* HEADER */}
          <SectionHeader
            label="Case Studies"
            title="Proven"
            highlight="Business Impact"
            description="Real-world engagements where DRS Group delivered measurable financial and operational outcomes across industries."
          />

          {/* TILES */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}