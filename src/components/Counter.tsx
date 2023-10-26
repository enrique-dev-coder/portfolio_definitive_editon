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
    <div className="flex flex-col items-end justify-center">
      <div>
        <span className="inline-block text-7xl font-bold " ref={ref}>
          {number}
        </span>
        <span className="text-7xl font-bold">+</span>
      </div>
      <h2 className="text-xl  font-medium capitalize text-dark">{title}</h2>
    </div>
  );
};

export default Counter;
