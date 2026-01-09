"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NO_HIDE_ROUTES = [
  "/contact",
  "/privacy",
  "/terms",
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Do not hide header on specific pages
    if (NO_HIDE_ROUTES.includes(pathname)) {
      setHide(false);
      return;
    }

    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.header
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            sticky top-0 z-50 w-full bg-white
            lg:relative lg:top-auto
          "
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-28 md:h-32 items-center justify-between">
              
              {/* LOGO */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/logo-blue.svg"
                  alt="DRS Group"
                  width={260}
                  height={120}
                  priority
                  className="h-20 md:h-24 w-auto"
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-10 rounded-full bg-gray-100 px-12 py-4 font-inter text-[15px] font-medium text-gray-800">
                {[
                  { label: "About", href: "/about" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Consulting", href: "/consulting" },
                  { label: "Customers", href: "/customers" },
                  { label: "Impact", href: "/impact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-(--color-primary)"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* DESKTOP CTA */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center gap-3
                    rounded-xl bg-(--color-primary)
                    px-7 py-3 text-[15px] font-medium text-white
                    transition hover:brightness-110
                  "
                >
                  Connect With Us →
                </Link>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden rounded-xl border border-gray-200 p-3 text-gray-700"
                aria-label="Open menu"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

{/* MOBILE MENU */}
<AnimatePresence>
  {open && (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
      />

      {/* MENU PANEL */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          fixed inset-x-0 top-0 z-50
          bg-white shadow-xl lg:hidden
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <p className="font-aeonik text-lg">Menu</p>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-lg border p-2 text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 px-6 py-8 font-inter text-[16px] font-medium text-gray-800">
          {[
            { label: "About", href: "/about" },
            { label: "Solutions", href: "/solutions" },
            { label: "Consulting", href: "/consulting" },
            { label: "Customers", href: "/customers" },
            { label: "Impact", href: "/impact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#4f6ef7]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              mt-4 rounded-xl
              bg-[#4f6ef7]
              px-5 py-3
              text-center text-white
            "
          >
            Connect With Us →
          </Link>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

        </motion.header>
      )}
    </AnimatePresence>
  );
}