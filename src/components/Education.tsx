'use client';
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Lilicon from './Lilicon';

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details = ({ type, time, place, info }: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 w-[60%] md:w-[80%] last:mb-0  mx-auto flex flex-col items-center justify-between"
    >
      <Lilicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}

          <br />
          <span className="capitalize font-medium text-xl text-dark/75 dark:text-primaryDark xs:text-sm">
            {time} | {place}
          </span>
          <p className="font-medium  text-lg w-full md:text-sm">{info}</p>
        </h3>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  // hook used for register the scrollY value
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'center start'],
    target: ref,
  });

  return (
    <div className=" my-24">
      <AnimatedText
        text="Education"
        className=" mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl  sm:mb-4"
      />
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full h-auto "
      >
        <motion.div
          // scale line while scrolling
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 w-[4px] top-0 h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[10px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Courses in many platforms like udemy,AWS,BEDU,platzi,stack skills etc"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, javascript mastery,back end , front end, aws"
            place="Udemy,AWS,BEDU,platzi,stack skills etc"
            time="2016-2020"
          />
          <Details
            type="College Degree at industrial and process engineering"
            info="Relevant courses included Statistics, process analisis, problem solving methodologies"
            place="Instituto de Estudios Superiores de Monterrey (ITESM)"
            time="2016-2020"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
