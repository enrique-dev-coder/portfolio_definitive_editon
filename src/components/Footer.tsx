import React from "react";
import GeneralWrapper from "./Wrappers/General";
import Link from "next/link";
import { WhatsIon } from "./Icons";

//TODO: agregar link de whats app con un iconito
//TODO quitar el allrights reserved

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base
    "
    >
      <GeneralWrapper className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy;</span>
        <div className="flex items-center lg:py-2 ">
          Build by me with nextjs
          <span className=" text-red-500 text-lg px-1">&#9825;</span>
        </div>
        <div className="flex gap-2 items-center">
          <a
            href="https://api.whatsapp.com/send?phone=5218441753173&text=Hello%2C%20lets%20talk%20about%20your%20next%20project%20%20on%20the%20web%20%2F%20Hola%20vamos%20a%20hablar%20de%20tu%20siguiente%20proyecto"
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsIon className="" />
            <p>+52 844 175 3173</p>
          </a>
        </div>
      </GeneralWrapper>
    </footer>
  );
};

export default Footer;
