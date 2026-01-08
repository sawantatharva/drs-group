import Link from "next/link";

export default function ConsultingPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            Consulting
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            DRS Group provides strategic and technical consulting services
            focused on cost optimization, performance improvement, governance,
            and long-term operational efficiency across enterprise facilities.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-10">
            Consulting Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Operational Cost Optimization",
              "Facility Management Transformation",
              "Performance & Compliance Audits",
              "Governance & Benchmarking",
            ].map((service) => (
              <div
                key={service}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-gray-900">{service}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Data-driven analysis and structured frameworks delivering
                  measurable financial and operational impact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-6">
            Our Consulting Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Assess",
                desc: "Detailed analysis of costs, processes, systems, and performance gaps.",
              },
              {
                title: "Optimize",
                desc: "Prioritized improvement roadmap focused on ROI, efficiency, and risk reduction.",
              },
              {
                title: "Sustain",
                desc: "Governance models and monitoring frameworks to ensure long-term results.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-gray-900">{step.title}</p>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-6">
            Engagement Model
          </h2>

          <p className="max-w-3xl text-gray-600">
            DRS Consulting operates on a performance-linked engagement model.
            Our professional fees are aligned with achieved savings and outcomes,
            ensuring zero risk and measurable value for our clients.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-aeonik text-xl text-gray-900">
            Need strategic clarity or cost optimization?
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-(--color-primary) px-6 py-3 text-white font-medium"
          >
            Speak with a Consultant
          </Link>
        </div>
      </section>
    </main>
  );
}