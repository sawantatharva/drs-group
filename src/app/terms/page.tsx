"use client";

export default function TermsPage() {
  return (
    <main>
      <section className="relative bg-[#050b1a] pt-24 pb-24 text-white md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          {/* TITLE */}
          <h1 className="font-aeonik text-4xl md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 font-inter text-base leading-relaxed text-gray-400">
            These Terms & Conditions govern access to and use of the DRS Group
            website, services, and related communications. By using this
            website, you agree to the terms set forth below.
          </p>

          {/* CONTENT */}
          <div className="mt-12 space-y-12">
            {[
              {
                title: "Nature of Services",
                content:
                  "DRS Group provides consulting, infrastructure, facility management, and execution-led operational improvement services. All information presented on this website is intended to provide a general overview of our capabilities and does not constitute a binding offer, proposal, or guarantee of results.",
              },
              {
                title: "Use of Website Content",
                content:
                  "All content on this website is provided for informational purposes only. Users may not copy, reproduce, distribute, modify, or commercially exploit any content without prior written consent from DRS Group.",
              },
              {
                title: "Engagement & Performance Outcomes",
                content:
                  "Any consulting, optimization, or performance-linked engagement described on this website is subject to a separate written agreement. Actual outcomes depend on site conditions, scope definition, data accuracy, and client participation, and may vary across engagements.",
              },
              {
                title: "Intellectual Property",
                content:
                  "All intellectual property rights, including methodologies, frameworks, designs, text, graphics, logos, and proprietary processes, are owned by DRS Group unless explicitly stated otherwise.",
              },
              {
                title: "Limitation of Liability",
                content:
                  "DRS Group shall not be liable for any direct, indirect, incidental, consequential, or business-related damages arising from the use of this website or reliance on its content.",
              },
              {
                title: "Third-Party Links",
                content:
                  "This website may contain links to third-party websites for reference or convenience. DRS Group does not control or endorse the content or practices of such external sites.",
              },
              {
                title: "Confidentiality & Data Use",
                content:
                  "Information shared through this website is handled in accordance with our Privacy Policy. Confidential business information is governed only by formal contractual agreements.",
              },
              {
                title: "Modifications to Terms",
                content:
                  "DRS Group reserves the right to modify these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.",
              },
              {
                title: "Governing Law & Jurisdiction",
                content:
                  "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-aeonik text-xl text-white">
                  {section.title}
                </h2>
                <p className="mt-3 font-inter text-sm leading-relaxed text-gray-400">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}