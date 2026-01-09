import CaseStudyCard from "@/components/CaseStudyCard";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#050b1a] pt-36 pb-24 text-white md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-aeonik text-4xl md:text-5xl">
            Customer Stories
          </h1>

          <p className="mt-4 max-w-3xl font-inter text-base leading-relaxed text-gray-400">
            Real-world engagements where DRS Group delivered measurable
            improvements in cost efficiency, operational reliability, and
            long-term system performance.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {customers.slice(0, 9).map((item, index) => (
              <CaseStudyCard
                key={item.slug}
                slug={item.slug}
                industry={item.industry}
                title={item.title}
                summary={item.summary}
                impact={item.results?.[0]}
                coverImage={item.coverImage}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}