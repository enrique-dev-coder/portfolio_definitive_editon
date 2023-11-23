import React from "react";
import { CircularText } from "./Icons";
import { Link } from "@/navigation";

// TODO agregar imagen del whats

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto"
    >
      <div
        className="w-48  h-auto fñex items-center justify-center relative  
      md:w-24"
      >
        <CircularText />
        <Link
          href="/contact"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-light dark:text-dark shadow-md border border-solid w-20 h-20 rounded-full font-semibold
          hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-dark dark:border-light hover:dark:border-light  bg-dark dark:bg-light
          md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
