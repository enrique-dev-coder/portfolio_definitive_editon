import React from 'react';
import GeneralWrapper from './Wrappers/General';
import Link from 'next/link';

//TODO: agregar link de whats app con un iconito
//TODO quitar el allrights reserved

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <GeneralWrapper className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build by me with nextjs
          <span className=" text-red-500 text-lg px-1">&#9825;</span>
        </div>
        <div>
          <Link href="/">WhatsApp</Link>
          <Link href="/">Mail</Link>
        </div>
      </GeneralWrapper>
    </footer>
  );
};

export default Footer;
