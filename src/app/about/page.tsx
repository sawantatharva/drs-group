export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            About DRS Group
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            DRS Group is an enterprise-focused organization delivering
            execution-driven infrastructure solutions and strategic consulting
            services to organizations across India. We help clients improve
            operational performance, reduce costs, and achieve sustainable
            efficiency.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="max-w-4xl text-gray-600">
            With a strong PAN-India service network and a team of experienced
            engineers and consultants, DRS Group supports mission-critical
            environments across industries. Our expertise spans facility
            management, power infrastructure, operational audits, and
            performance optimization for enterprise clients.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-aeonik text-xl text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a trusted partner for organizations seeking intelligent,
              reliable, and sustainable operational excellence.
            </p>
          </div>

          <div>
            <h3 className="font-aeonik text-xl text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver data-driven solutions and consulting services that
              enhance performance, ensure compliance, and create measurable
              value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-aeonik text-2xl text-gray-900 mb-8">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Integrity & Transparency",
              "Customer-Centric Execution",
              "Quality & Compliance Excellence",
              "Continuous Improvement",
              "Technology-Driven Delivery",
              "Accountability & Ownership",
            ].map((value) => (
              <div
                key={value}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="font-medium text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}