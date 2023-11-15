import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const montse = Montserrat({ subsets: ['latin'] });

// TODO: Add meta description for every page
export const metadata: Metadata = {
  title: 'Enrique Alvarado',
  description: 'Full stack web developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montse.className} bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
