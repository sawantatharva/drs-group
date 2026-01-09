"use client";

import SectionHeader from "./SectionHeader";
import WorkStep from "./WorkStep";

const steps = [
  {
    step: 1,
    title: "Understand & Align",
    description:
      "We begin by deeply understanding your objectives, constraints, and operating environment to ensure strategic alignment from day one.",
  },
  {
    step: 2,
    title: "Design the Solution",
    description:
      "Our teams design tailored strategies and system architectures that balance practicality, scalability, and long-term value.",
  },
  {
    step: 3,
    title: "Execute & Implement",
    description:
      "We move beyond planning into execution — working closely with stakeholders to implement solutions with precision and accountability.",
  },
  {
    step: 4,
    title: "Optimize & Scale",
    description:
      "Post-implementation, we focus on optimization, performance tracking, and continuous improvement to ensure sustained impact.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-[#050b1a] py-20 md:py-28 text-white">
      {/* divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:gap-20">

          {/* HEADER */}
          <SectionHeader
            label="How We Work"
            title="A Structured Approach."
            highlight="Proven Outcomes."
            description="Our approach combines strategic clarity with disciplined execution — ensuring every engagement delivers measurable, real-world results."
          />

          {/* STEPS */}
          <div className="
            grid grid-cols-1 gap-8
            md:grid-cols-4
          ">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="
                  relative rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur
                "
              >
                {/* STEP BADGE */}
                <div className="
                  mb-4 flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#4f6ef7]/10
                  text-sm font-semibold
                  text-[#4f6ef7]
                ">
                  {step.step}
                </div>

                <h3 className="
                  font-aeonik text-lg
                  text-white
                ">
                  {step.title}
                </h3>

                <p className="
                  mt-3 font-inter
                  text-sm leading-relaxed
                  text-gray-400
                ">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}