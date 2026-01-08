export default function Certifications() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div>
            <p className="font-aeonik text-lg text-gray-900">
              ISO 9001:2015
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Quality Management Systems
            </p>
          </div>

          <div>
            <p className="font-aeonik text-lg text-gray-900">
              ISO 14001:2015
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Environmental Management Systems
            </p>
          </div>

          <div>
            <p className="font-aeonik text-lg text-gray-900">
              ISO 45001:2018
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Occupational Health & Safety
            </p>
          </div>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <p className="text-sm text-gray-700">
            PAN-India Service Network
          </p>
          <p className="text-sm text-gray-700">
            Certified & Compliant Operations
          </p>
          <p className="text-sm text-gray-700">
            Trusted by Enterprise Clients
          </p>
        </div>
      </div>
    </section>
  );
}