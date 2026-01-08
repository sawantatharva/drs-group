export default function ImpactPage() {
  return (
    <main>
      {/* Intro */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            Our Impact
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            DRS Group delivers measurable business outcomes through structured
            execution, data-driven consulting, and governance-led operational
            improvement models.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-10">
            Measurable Results Across Engagements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Administrative Cost Reduction", value: "₹48 Cr+" },
              { label: "HVAC Cost Optimization", value: "20–25%" },
              { label: "UPS & Battery Savings", value: "₹2 Cr+" },
              { label: "Enterprise Locations Supported", value: "PAN-India" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="text-3xl font-aeonik text-(--color-primary)">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-8">
            Areas of Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Optimization",
                desc: "Reduction in operational and administrative expenses through structured assessments and vendor optimization.",
              },
              {
                title: "Operational Reliability",
                desc: "Improved uptime, performance stability, and compliance across mission-critical infrastructure.",
              },
              {
                title: "Governance & Transparency",
                desc: "Implementation of measurable governance frameworks for sustained efficiency and accountability.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-gray-900">{area.title}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-aeonik text-xl text-gray-900">
            Ready to create measurable impact?
          </p>
          <a
            href="/contact"
            className="rounded-lg bg-(--color-primary) px-6 py-3 text-white font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}