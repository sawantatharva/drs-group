import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <p className="font-aeonik text-lg text-(--color-primary)">
            DRS Group
          </p>
          <p className="mt-2">
            Operational Excellence & Consulting Services across India.
          </p>
        </div>

        <div>
        <p className="font-medium text-gray-900 mb-2">Company</p>
        <ul className="space-y-2">
            <li>
            <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/smart-solutions">Solutions</Link>
            </li>
            <li>
            <Link href="/consulting">Consulting</Link>
            </li>
            <li>
            <Link href="/customers">Customers</Link>
            </li>
            <li>
            <Link href="/impact">Impact</Link>
            </li>
            <li>
            <Link href="/foundation">Foundation</Link>
            </li>
            <li>
            <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
            <Link href="/terms">Terms & Conditions</Link>
            </li>
        </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 mb-2">Contact</p>
          <p>📍 Mumbai, India</p>
          <p>📞 +91 7710002293</p>
          <p>✉️ info@drsss.net</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} DRS Group. All rights reserved.
      </div>
    </footer>
  );
}