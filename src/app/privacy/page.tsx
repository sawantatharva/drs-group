"use client";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative bg-[#050b1a] pt-24 pb-24 text-white md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          {/* TITLE */}
          <h1 className="font-aeonik text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 font-inter text-base leading-relaxed text-gray-400">
            This Privacy Policy explains how DRS Group collects, uses, and
            protects information provided by users of this website.
          </p>

          {/* CONTENT */}
          <div className="mt-12 space-y-12">
            {[
              {
                title: "Information We Collect",
                content:
                  "We may collect personal information such as name, email address, phone number, and company details when you voluntarily submit information through contact forms or direct communication.",
              },
              {
                title: "Use of Information",
                content:
                  "The information collected is used solely to respond to enquiries, provide requested services, improve our offerings, and maintain communication related to business operations.",
              },
              {
                title: "Data Protection",
                content:
                  "DRS Group implements appropriate technical and organizational measures to safeguard personal information against unauthorized access, disclosure, alteration, or misuse.",
              },
              {
                title: "Cookies",
                content:
                  "This website may use cookies to enhance user experience and analyze website traffic. Cookies do not collect personally identifiable information unless explicitly provided by the user.",
              },
              {
                title: "Third-Party Links",
                content:
                  "Our website may contain links to third-party websites. DRS Group is not responsible for the privacy practices or content of external websites.",
              },
              {
                title: "Policy Updates",
                content:
                  "This Privacy Policy may be updated periodically to reflect changes in legal, regulatory, or operational requirements.",
              },
              {
                title: "Contact Information",
                isEmail: true,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-aeonik text-xl text-white">
                  {section.title}
                </h2>

                <p className="mt-3 font-inter text-sm leading-relaxed text-gray-400">
                  {section.isEmail ? (
                    <>
                      For any questions regarding this Privacy Policy, please
                      contact us at{" "}
                      <a
                        href="mailto:info@drsss.net"
                        className="text-[#7aa2ff] hover:text-white transition"
                      >
                        info@drsss.net
                      </a>.
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}