import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            DRS Group delivers execution-driven infrastructure and facility
            management solutions designed to ensure reliability, safety,
            compliance, and operational efficiency across enterprise
            environments.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-10">
            Our Core Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Facility Management Services",
              "Power, Electrical & UPS Solutions",
              "Infrastructure Operations & Maintenance",
              "Reliability & Compliance Audits",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-gray-900">{item}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Enterprise-grade execution with SLA-driven delivery and
                  measurable outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-8">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "IT Parks & Data Centers",
              "Manufacturing & Industrial Facilities",
              "Healthcare & Hospitals",
              "Commercial & Corporate Offices",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-aeonik text-xl text-gray-900">
            Looking for reliable execution partners?
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-(--color-primary) px-6 py-3 text-white font-medium"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}