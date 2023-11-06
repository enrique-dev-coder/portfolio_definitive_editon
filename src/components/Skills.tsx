'use client';
import React from 'react';
import { motion } from 'framer-motion';

// TODO : add more skills

interface SkillTagProps {
  name: string;
  x: string;
  y: string;
}

const SkillTag = ({ name, x, y }: SkillTagProps) => {
  return (
    <motion.div
      className="absolute z-0 flex cursor-pointer items-center justify-center rounded-full font-semibold bg-dark shadow-dark text-light py-3 px-6
      dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light sm:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      // animate when in view
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-32 w-full text-center 
      md:text-6xl md:mt-32 sm:text-4xl sm:mt-10 "
      >
        My Skills
      </h2>
      <div
        className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex z-10 cursor-pointer items-center justify-center rounded-full font-semibold bg-dark shadow-dark text-light p-8 dark:text-dark dark:bg-light 
          lg:p-6 mdp-4 sm:text-xs sm:p-2
          "
          whileHover={{ scale: 1.05 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          Web Full Stack
        </motion.div>
        <SkillTag name="CSS" x="-5vw" y="-10vw" />
        <SkillTag name="NodeJs" x="20vw" y="6vw" />
        <SkillTag name="TailwindCss" x="0vw" y="12vw" />
        <SkillTag name="RactJs" x="-20vw" y="-15vw" />
        <SkillTag name="Git" x="18vw" y="-15vw" />
        <SkillTag name="AWS" x="0vw" y="-20vw" />
        <SkillTag name="Javascript" x="-30vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
