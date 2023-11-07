import React, { MutableRefObject } from 'react';
import { motion, useScroll } from 'framer-motion';

const Lilicon = ({ reference }: { reference: MutableRefObject<null> }) => {
  // hook used for register the scrollY value
  const { scrollYProgress } = useScroll({
    offset: ['center end', 'center center'],
    target: reference,
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light md:-left-[0px] sm:-left-[10px] ">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width={'75'}
        height={'75'}
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          // el pathlenght aumente con scroll
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px]  fill-light dark:fill-dark"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse  stroke-1  fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default Lilicon;
