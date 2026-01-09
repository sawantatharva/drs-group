import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* Aeonik — Headings */
const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aeonik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aeonik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

/* Inter — Body */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DRS Group | Operational Excellence & Consulting",
  description: "DRS Group delivers execution-driven consulting, smart infrastructure solutions, and operational excellence services across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${aeonik.variable} ${inter.variable}`}
    >
      <body className="font-inter antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}