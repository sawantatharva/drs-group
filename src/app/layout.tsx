import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DRS Group",
  description: "Operational Excellence & Consulting Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}