import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import GeneralWrapper from "@/components/Wrappers/General";
import Counter from "@/components/Counter";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import profilePic from "../../../../public/images/profile/developer-pic-2.jpg";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

// NOTE use this to change metadata of the current page

// TODO cambiar la descripcion de la biografia
// TODO cambiar la foto por una mia

export const metadata: Metadata = {
  title: "About Me",
  description: "About my web developer experience",
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <GeneralWrapper className="pt-16">
          <AnimatedText
            text="About Me"
            className=" mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl  sm:mb-4"
          />
          {/*intro section */}
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start
          2xl:col-span-4 md:order-2 md:col-span-8 "
            >
              <p className="font-medium my-4">
                Hi,I&apos;m Enrqiue, a Full-Stack Developer with a deep passion
                for front-end technologies, I bring five years of dedicated
                experience in web development to the table. Originally
                graduating with a degree in Industrial Engineering, I embarked
                on a transformative journey to pursue my love for coding.
              </p>
              <p className="font-medium my-4">
                My career shift allowed me to seamlessly blend analytical
                problem-solving from my engineering background with the
                creativity and precision required in front-end development. I
                thrive on crafting intuitive user experiences that seamlessly
                marry form and function. Join me as I continue to innovate and
                create in the ever-evolving landscape of web development.
              </p>
            </div>
            {/*profile image
          NOTE: user order-1 to change layout order in a a grid layout for responsive design
          */}
            <div
              className="col-span-3 relative h-max  rounded-2xl border-2 border-solid border-dark dark:border-light
          bg-light dark:bg-dark p-8 
          2xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Enrique Alvarado"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
            {/*counters*/}
            <article
              className="col-span-2 flex flex-col items-end justify-between
                2xl:col-span-8 2xl:flex-row 2xl:items-center md:order-3"
            >
              <Counter number={50} title="satisfied clients" />
              <Counter number={40} title="Projects completed" />
              <Counter number={5} title="Years of experience" />
            </article>
          </div>
          {/* my skills section */}
          <Skills />
          {/* my experience section */}
          <Experience />
          <Education />
        </GeneralWrapper>
      </main>
    </>
  );
};

export default page;
