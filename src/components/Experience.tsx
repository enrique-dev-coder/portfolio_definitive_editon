"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Lilicon from "./Lilicon";

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
      className=" my-8 first:mt-0 w-[60%] md:w-[80%] last:mb-0  mx-auto flex flex-col items-center justify-between"
    >
      <Lilicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
          <br />
          <span className="capitalize font-medium text-xl text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {address}
          </span>
          <p className="font-medium  text-lg w-full md:text-sm">{work}</p>
        </h3>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  // hook used for register the scrollY value
  const { scrollYProgress } = useScroll({
    offset: ["start end", "center start"],
    target: ref,
  });

  return (
    <div className=" my-24">
      <AnimatedText
        text="Experience"
        className=" mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl  sm:mb-4"
      />
      <div
        ref={ref}
        className="w-[75%]  mx-auto relative lg:w-[90%] md:w-full h-auto  "
      >
        <motion.div
          // scale line while scrolling
          className="absolute left-9 w-[4px] top-0 h-full bg-dark dark:bg-light origin-top
          md:w-[2px] md:left-[30px] xs:left-[10px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Web developer"
            address="London, UK"
            company="Proxify"
            companyLink="https://proxify.io/"
            time="2022-Present "
            work="Worked on a team responsible for developing projects to 
            customers located in Europe and USA, we use nodejs,nextjs, aws  as default but we adapt to customers needs
            ."
          />
          <Details
            position="Front End Engineer"
            address="Spain"
            company="Chatcenter Network"
            companyLink="https://chatcenter.net/"
            time="2020-2022"
            work="Team colaboration for updating and improving current UI of the app, craft and design of new UI Features,overall improve of UI with a redesign of every screen, unit testing of components, test e2e, use of react context api for state management, development of wordpress plugins."
          />
          <Details
            position="Lead Developer"
            address="Buenos Aires, Argentina"
            company="Launchy"
            companyLink="https://launchy.me/"
            time="2018-2020"
            work="In my role at Launchy, I led a team dedicated to creating effective web pages designed for startups. Drawing on my solid grasp of front-end technologies and user-friendly design principles, I played a key role in turning creative ideas into visually appealing and functional digital space."
          />
          <Details
            position="Quality Engineer"
            address="Coahuila, México"
            company="Cooper Standard"
            companyLink="/"
            time="2014-2018 "
            work="Process Quality Engineer for a manufacturing company of fuel lines for General Motors, Stellantis,Ford,Toyota and Rivian.
            My job consisted on discussing quality issues of products with the customer representatives.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
