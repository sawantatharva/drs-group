import { customers } from "@/data/customers";

export default async function CustomerDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const caseStudy = customers.find(
    (item) => item.slug === slug
  );

  if (!caseStudy) {
    return (
      <main className="p-20">
        <h1 className="text-2xl font-aeonik">
          Case study not found
        </h1>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-sm text-gray-500">{caseStudy.industry}</p>
          <h1 className="mt-2 font-aeonik text-3xl text-gray-900">
            {caseStudy.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {caseStudy.summary}
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-10">
          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Challenge
            </h2>
            <p className="mt-2 text-gray-600">
              The client faced rising operational costs, fragmented vendor
              structures, and limited performance visibility across locations.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              DRS Intervention
            </h2>
            <p className="mt-2 text-gray-600">
              DRS conducted a comprehensive technical and commercial assessment,
              implemented process restructuring, and introduced governance and
              monitoring frameworks.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Outcome
            </h2>
            <p className="mt-2 text-gray-600">
              The engagement delivered{" "}
              <strong>{caseStudy.impact}</strong>, improved compliance, and
              ensured sustainable operational efficiency without disruption.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}