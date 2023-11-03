import React, { MutableRefObject } from 'react';
import { motion, useScroll } from 'framer-motion';

const Lilicon = ({ reference }: { reference: MutableRefObject<null> }) => {
  // hook used for register the scrollY value
  const { scrollYProgress } = useScroll({
    offset: ['center end', 'center center'],
    target: reference,
  });
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg
        className="-rotate-90"
        width={'75'}
        height={'75'}
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          // el pathlenght aumente con scroll
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px]  fill-light"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse  stroke-1  fill-primary"
        />
      </svg>
    </figure>
  );
};

export default Lilicon;
