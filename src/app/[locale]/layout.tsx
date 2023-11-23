import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montse = Montserrat({ subsets: ["latin"] });

// const locales = ["en", "es"];

// TODO: Add meta description for every page
// TODO: Add whats app to contact page
export const metadata: Metadata = {
  title: "Enrique Alvarado Portfolio",
  description: "Full stack web developer",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={locale}>
      <body
        className={`${montse.className} bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar lang={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
