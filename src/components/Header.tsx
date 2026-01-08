import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-aeonik text-xl text-(--color-primary)">
          DRS Group
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-inter text-gray-700">
        <Link href="/about">About</Link>
        <Link href="/smart-solutions">Solutions</Link>
        <Link href="/consulting">Consulting</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/impact">Impact</Link>
        <Link
            href="/contact"
            className="text-(--color-primary) font-medium"
        >
            Contact
        </Link>
        </nav>
      </div>
    </header>
  );
}