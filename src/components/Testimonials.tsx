"use client";

import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "DRS brought strong execution discipline and clarity to a complex operational challenge.",
    name: "Senior Operations Leader",
    role: "Head of Operations",
    company: "Infrastructure Enterprise",
  },
  {
    quote:
      "Their team translated strategy into practical, on-ground solutions with measurable results.",
    name: "Program Director",
    role: "Transformation Lead",
    company: "Public Sector Organization",
  },
  {
    quote:
      "DRS combines consulting expertise with hands-on execution – a reliable long-term partner.",
    name: "Technology Head",
    role: "CTO",
    company: "Enterprise Services Company",
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
            label="Testimonials"
            title="Trusted by"
            highlight="Organizations That Deliver Impact"
            description="Across sectors and engagement types, our clients value DRS Group for its clarity of thought, execution discipline, and long-term partnership mindset."
          />

          {/* TESTIMONIALS */}
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