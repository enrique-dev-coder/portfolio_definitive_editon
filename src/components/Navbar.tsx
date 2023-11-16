'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname, useRouter } from 'next/navigation';
import { TwitterIcon, GithubIcon, Linkedin, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
const MotionLink = motion(Link);

// TODO agregar iconito para el cambio de idioma
// TODO arreglar el iconito cuando se le da click y se hace como una tacha
interface CustomLinkTypes {
  href: string;
  title: string;
  className?: string;
  toggleFunction?: Function;
}
interface MobileCustomLinkTypes {
  href: string;
  title: string;
  className?: string;
  toggleFunction: Function;
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

const MobileCustomLink = ({
  href,
  title,
  className,
  toggleFunction,
}: MobileCustomLinkTypes) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    toggleFunction();
  };
  return (
    <button
      onClick={() => handleClick(href)}
      className={`${className} my-2  text-dark font-bold dark:text-light relative group`}
    >
      {title}
    </button>
  );
};
const MobileMenu = ({
  toggleFunction,
  isOpen,
  mode,
  setMode,
}: {
  toggleFunction: Function;
  isOpen: boolean;
  mode: string;
  setMode: Function;
}) => {
  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          // note : use animate prop when elemented is mounted
          animate={{ scale: 1, opacity: 1 }}
          className={`min-w-[70vw]  flex-col justify-between items-center fixed top-1/2 left-1/2 
      -translate-x-1/2  -translate-y-1/2 z-30  bg-primary/40 dark:bg-primaryDark/50 rounded-lg backdrop-blur-md py-32
    `}
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileCustomLink
              href="/"
              title="Home"
              toggleFunction={toggleFunction}
            />
            <MobileCustomLink
              href="/about"
              title="About"
              toggleFunction={toggleFunction}
            />
            <MobileCustomLink
              href="/projects"
              title="Projects"
              toggleFunction={toggleFunction}
            />
            <MobileCustomLink
              href="/contact"
              title="Contact"
              toggleFunction={toggleFunction}
            />
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
        </motion.div>
      ) : null}
    </>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative md:px-16 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleMenuClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5
          ${openMenu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}
        `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
            openMenu ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm 
          ${openMenu ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}
        `}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
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
      </div>
      <MobileMenu
        mode={mode}
        toggleFunction={() => setOpenMenu(false)}
        isOpen={openMenu}
        setMode={setMode}
      />
      <div className="absolute left-[50%] z-30 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
