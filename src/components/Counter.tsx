'use client';
import { useRef, useEffect } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';

const Counter = ({ number, title }: { number: number; title: string }) => {
  // type the use ref
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  // animate just once per view
  const isElementInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isElementInView) {
      motionValue.set(number);
    }
  }, [isElementInView, number, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= number) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, number]);

  return (
    <div className="flex flex-col items-end justify-center md:items-center">
      <div>
        <span
          className="inline-block text-7xl font-bold md:text-6xl  sm:text-5xl xs:text-4xl"
          ref={ref}
        >
          {number}
        </span>
        <span className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
          +
        </span>
      </div>
      <h2
        className="text-xl  font-medium capitalize text-dark dark:text-light  
      2xl:text-center md:text-lg sm:text-base xs:text-sm"
      >
        {title}
      </h2>
    </div>
  );
};

export default Counter;
