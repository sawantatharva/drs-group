"use client";

import Image from "next/image";

export default function CustomersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#050b1a] pt-36 pb-24 text-white md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-aeonik text-4xl md:text-5xl">
            Our Customers
          </h1>

          <p className="mt-4 max-w-3xl font-inter text-base leading-relaxed text-gray-400">
            Real-world engagements where DRS Group delivered measurable
            improvements in cost efficiency, operational reliability, and
            long-term system performance.
          </p>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="relative w-full aspect-16/7 rounded-3xl overflow-hidden border">
            <Image
              src="/customers/customers.jpeg"   // client image
              alt="Our Customers"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

    </main>
  );
}