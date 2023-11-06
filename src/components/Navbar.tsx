'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { TwitterIcon, GithubIcon, Linkedin, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
const MotionLink = motion(Link);

// TODO agregar iconito para el cambio de idioma

interface CustomLinkTypes {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className }: CustomLinkTypes) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${className} mx-4 dark:text-light relative group`}
    >
      {title}
      <span
        className={`h-[2px] inline-block   bg-dark dark:bg-light absolute left-0 -bottom-2
      group-hover:w-full transition-[width] ease-in-out duration-300 
      ${path === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const IconLInk = ({ children }: { children: React.ReactNode }) => (
  <MotionLink
    href="/"
    target={'_blank'}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="w-9 mx-3"
  >
    {' '}
    {children}
  </MotionLink>
);

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/contact" title="Contact" />
      </nav>

      <motion.nav className="flex items-center justify-center flex-wrap">
        <IconLInk>
          <TwitterIcon />
        </IconLInk>
        <IconLInk>
          <GithubIcon />
        </IconLInk>
        <IconLInk>
          <Linkedin />
        </IconLInk>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark dark:bg-light text-light dark:text-dark "
        >
          {mode === 'dark' ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </motion.nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
