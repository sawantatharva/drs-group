export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600">
            This Privacy Policy explains how DRS Group collects, uses, and
            protects information provided by users of this website.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-10 text-gray-700">
          
          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Information We Collect
            </h2>
            <p className="mt-2">
              We may collect personal information such as name, email address,
              phone number, and company details when you voluntarily submit
              information through contact forms or direct communication.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Use of Information
            </h2>
            <p className="mt-2">
              The information collected is used solely to respond to enquiries,
              provide requested services, improve our offerings, and maintain
              communication related to business operations.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Data Protection
            </h2>
            <p className="mt-2">
              DRS Group implements appropriate technical and organizational
              measures to safeguard personal information against unauthorized
              access, disclosure, alteration, or misuse.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Cookies
            </h2>
            <p className="mt-2">
              This website may use cookies to enhance user experience and
              analyze website traffic. Cookies do not collect personally
              identifiable information unless explicitly provided by the user.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Third-Party Links
            </h2>
            <p className="mt-2">
              Our website may contain links to third-party websites. DRS Group
              is not responsible for the privacy practices or content of
              external websites.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Policy Updates
            </h2>
            <p className="mt-2">
              This Privacy Policy may be updated periodically to reflect
              changes in legal, regulatory, or operational requirements.
            </p>
          </div>

          <div>
            <h2 className="font-aeonik text-xl text-gray-900">
              Contact Information
            </h2>
            <p className="mt-2">
              For any questions regarding this Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:info@drsss.net"
                className="text-(--color-primary)"
              >
                info@drsss.net
              </a>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}