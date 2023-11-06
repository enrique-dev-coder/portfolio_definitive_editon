import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
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
      <body
        className={`${montse.className} bg-light dark:bg-dark w-full min-h-screen`}
      >
        {/* <Script strategy="beforeInteractive" id="theme-switcher">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
