"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* Routes */
const VERTICAL_ROUTES = ["/impact", "/consulting", "/solutions"];
const NO_HIDE_ROUTES = ["/contact", "/privacy", "/terms"];

export default function Header() {
  const pathname = usePathname();

  const isVertical = VERTICAL_ROUTES.some((r) =>
    pathname.startsWith(r)
  );

  if (isVertical) {
    return <VerticalHeader pathname={pathname} />;
  }

  return <DefaultHeader pathname={pathname} />;
}

/* ================= DEFAULT HEADER ================= */

function DefaultHeader({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (NO_HIDE_ROUTES.includes(pathname)) {
      setHide(false);
      return;
    }

    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { threshold: 0 }
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
          transition={{ duration: 0.25 }}
          className="sticky top-0 z-50 w-full bg-white"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-28 items-center justify-between">

              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo/logo-blue.svg"
                  alt="DRS Group"
                  width={260}
                  height={120}
                  className="h-20 w-auto"
                />
              </Link>

              {/* NAV */}
              <nav className="hidden lg:flex gap-12 rounded-full bg-gray-100 px-12 py-4 font-inter text-[15px]">
                {[
                  ["About", "/about"],
                  ["Smart Solutions", "/solutions"],
                  ["Consulting", "/consulting"],
                  ["Foundation", "/impact"],
                  ["Customers", "/customers"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="hover:text-[#4f6ef7] transition"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="
                    group inline-flex items-center gap-3
                    rounded-xl bg-[#4f6ef7]
                    px-7 py-3 text-sm font-medium text-white
                    shadow-lg transition hover:brightness-110
                  "
                >
                  Connect With Us →
                </Link>
              </div>

              {/* MOBILE */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden border p-3 rounded-xl"
              >
                ☰
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {open && (
              <>
                <div
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 bg-black/40 z-40"
                />

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="fixed top-0 inset-x-0 bg-white z-50"
                >
                  <div className="flex justify-between px-6 py-5 border-b">
                    Menu
                    <button onClick={() => setOpen(false)}>✕</button>
                  </div>

                  <div className="flex flex-col gap-6 px-6 py-8">
                    {[
                      ["About", "/about"],
                      ["Smart Solutions", "/solutions"],
                      ["Consulting", "/consulting"],
                      ["Foundation", "/impact"],
                      ["Customers", "/customers"],
                    ].map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}

                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="bg-[#4f6ef7] text-white text-center py-3 rounded-xl"
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

/* ================= VERTICAL HEADER ================= */

function VerticalHeader({
  pathname,
}: {
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  const verticals = [
    {
      id: "home",
      label: "Home",
      href: "/",
      logo: "/logo/logo-blue.svg",
    },
    {
      id: "solutions",
      label: "Smart Solutions",
      href: "/solutions",
      logo: "/logo/solutions.svg",
    },
    {
      id: "consulting",
      label: "Consulting",
      href: "/consulting",
      logo: "/logo/consulting.svg",
    },
    {
      id: "foundation",
      label: "Foundation",
      href: "/impact",
      logo: "/logo/foundation.svg",
    },
  ];

  const active = verticals.find(
    (v) => v.id !== "home" && pathname.startsWith(v.href)
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image
              src={active?.logo || "/logo/logo-blue.svg"}
              alt="Vertical Logo"
              width={220}
              height={80}
              className="h-14 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 font-inter text-[15px]">
            {verticals.map((v) => {
              const isActive =
                v.id !== "home" &&
                pathname.startsWith(v.href);

              return (
                <Link
                  key={v.id}
                  href={v.href}
                  className={`transition ${
                    isActive
                      ? "text-[#4f6ef7] font-semibold"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {v.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:block rounded-xl bg-[#4f6ef7] px-6 py-3 text-sm text-white"
          >
            Connect With Us →
          </Link>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden border p-3 rounded-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-0 inset-x-0 bg-white z-50"
            >
              <div className="flex justify-between px-6 py-5 border-b">
                Menu
                <button onClick={() => setOpen(false)}>✕</button>
              </div>

              <div className="flex flex-col gap-6 px-6 py-8">
                {verticals.map((v) => {
                  const isActive =
                    v.id !== "home" &&
                    pathname.startsWith(v.href);

                  return (
                    <Link
                      key={v.id}
                      href={v.href}
                      onClick={() => setOpen(false)}
                      className={`${
                        isActive
                          ? "text-[#4f6ef7] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {v.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="bg-[#4f6ef7] text-white text-center py-3 rounded-xl"
                >
                  Connect With Us →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}