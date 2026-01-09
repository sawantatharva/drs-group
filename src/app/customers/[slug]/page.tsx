import Image from "next/image";
import { customers } from "@/data/customers";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

/* REQUIRED FOR STATIC ROUTES */
export function generateStaticParams() {
  return customers.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const caseStudy = customers.find(
    (item) => item.slug === slug
  );

  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#050b1a] pt-24 pb-36 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm uppercase tracking-wide text-gray-400">
            {caseStudy.industry}
          </p>

          <h1 className="mt-3 font-aeonik text-4xl md:text-5xl">
            {caseStudy.title}
          </h1>

          <p className="mt-6 font-inter text-lg leading-relaxed text-gray-400">
            {caseStudy.summary}
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 mt-20">
          <div className="relative h-90 md:h-105 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 space-y-16">
          
          <div>
            <h2 className="font-aeonik text-2xl text-gray-900">
              Engagement Overview
            </h2>
            <p className="mt-4 font-inter text-gray-700 leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-2xl text-gray-900">
              Key Challenges
            </h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              {caseStudy.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-aeonik text-2xl text-gray-900">
              Our Approach
            </h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              {caseStudy.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-aeonik text-2xl text-gray-900">
              Outcomes & Impact
            </h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
              {caseStudy.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}