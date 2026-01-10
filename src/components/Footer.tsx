"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="site-footer" className="relative bg-white text-gray-700">
      {/* top divider */}
      <div className="border-t border-gray-200" />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <Image
              src="/logo/logo-blue.svg"
              alt="DRS Group"
              width={260}
              height={120}
              className="h-30 w-auto"
              priority
            />

            <p className="mt-6 max-w-sm font-inter text-1xl leading-relaxed text-gray-600">
              Delivering operational excellence, intelligent systems, and
              consulting-led transformation across India.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <p className="mb-5 font-aeonik text-xl text-gray-900">
              Company
            </p>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 font-inter text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Smart Solutions", href: "/solutions" },
                { label: "Consulting", href: "/consulting" },
                { label: "Customers", href: "/customers" },
                { label: "Foundation", href: "/impact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-(--color-primary)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-5 font-aeonik text-xl text-gray-900">
              Contact
            </p>

            <div className="space-y-4 font-inter text-sm text-gray-600">
              <p className="leading-relaxed">
                Plot no. KAC-35, TTC Industrial Area, <br />
                Opp. Digha Railway Station, Digha-Airoli,<br />
                Navi Mumbai – 400708
              </p>

              <div>
                <p className="text-gray-900 font-medium">Email</p>
                <a
                  href="mailto:info@drsss.net"
                  className="hover:text-(--color-primary) transition"
                >
                  info@drsss.net
                </a>
              </div>

              <div>
                <p className="text-gray-900 font-medium">Phone</p>
                <a
                  href="tel:917710002293"
                  className="hover:text-(--color-primary) transition"
                >
                  +91-7710002293
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 py-6 text-center">
        <p className="font-inter text-xs text-gray-500">
          © {new Date().getFullYear()} DRS Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
