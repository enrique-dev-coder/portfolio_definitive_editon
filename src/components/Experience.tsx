'use client';
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lilicon from './Lilicon';

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 w-[80%] last:mb-0  mx-auto flex flex-col items-center justify-between"
    >
      <Lilicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize"
          >
            @{company}
          </a>
          <br />
          <span className="capitalize font-medium text-xl text-dark/75">
            {time} | {address}
          </span>
          <p className="font-medium  text-lg w-full">{work}</p>
        </h3>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  // hook used for register the scrollY value
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'center start'],
    target: ref,
  });

  return (
    <div className=" my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] h-screen mx-auto relative ">
        <motion.div
          // scale line while scrolling
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 w-[4px] top-0 h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            address="Mountain View, CA"
            company="Google"
            companyLink="https://www.google.com/"
            time="2022-Present "
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            address="Mountain View, CA"
            company="Google"
            companyLink="https://www.google.com/"
            time="2022-Present "
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            address="Mountain View, CA"
            company="Google"
            companyLink="https://www.google.com/"
            time="2022-Present "
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            address="Mountain View, CA"
            company="Google"
            companyLink="https://www.google.com/"
            time="2022-Present "
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            address="Mountain View, CA"
            company="Google"
            companyLink="https://www.google.com/"
            time="2022-Present "
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;