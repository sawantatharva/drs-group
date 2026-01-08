import Link from "next/link";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  return (
    <main>
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            Customer Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Real-world engagements where DRS Group delivered measurable
            improvements in cost, efficiency, and operational performance.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((item) => (
              <Link
                key={item.slug}
                href={`/customers/${item.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition"
              >
                <p className="text-sm text-gray-500">{item.industry}</p>
                <h3 className="mt-2 font-aeonik text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm font-medium text-(--color-primary)">
                  Impact: {item.impact}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}