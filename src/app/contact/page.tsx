export default function ContactPage() {
  return (
    <main>
      {/* Intro */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-aeonik text-4xl text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Connect with DRS Group to discuss your operational challenges,
            consulting requirements, or execution needs. Our team will get back
            to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div>
            <h2 className="font-aeonik text-2xl text-gray-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Location:</strong> Mumbai, India
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917710002293" className="text-(--color-primary)">
                  +91 77100 02293
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@drsss.net"
                  className="text-(--color-primary)"
                >
                  info@drsss.net
                </a>
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/917710002293"
                target="_blank"
                className="inline-block rounded-lg bg-(--color-primary) px-6 py-3 text-white font-medium"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Simple Form (mailto) */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="font-aeonik text-xl text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form
              action="mailto:info@drsss.net"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              />

              <button
                type="submit"
                className="rounded-lg bg-(--color-primary) px-6 py-3 text-white font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}