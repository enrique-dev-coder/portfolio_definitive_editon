import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const montse = Montserrat({ subsets: ['latin'] });

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
      <body className={`${montse.className} bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
