import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import GeneralWrapper from '@/components/Wrappers/General';
import Counter from '@/components/Counter';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import profilePic from '../../../public/images/profile/developer-pic-2.jpg';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

// NOTE use this to change metadata of the current page

// TODO cambiar la descripcion de la biografia
// TODO cambiar la foto por una mia

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About my web developer experience',
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
              <p className="font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.{' '}
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
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
