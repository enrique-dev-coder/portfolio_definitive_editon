'use client';
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';
import TechStack from './TechStack';

interface FeatureProjectProps {
  type: string;
  title: string;
  summary?: string;
  img: StaticImageData | string;
  link: string;
  githubLink: string;
}

// darle props de motion a  el componente que quieras
const FramerImage = motion(Image);

export const Project = ({
  type,
  title,
  summary,
  img,
  link,
  githubLink,
}: FeatureProjectProps) => {
  return (
    <div className="col-span-6 md:col-span-8 sm:col-span-4">
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative
    "
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl " />

        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4   ">
          <span className=" text-primary dark:text-primaryDark font-medium  text-xl">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light md:text-2xl sm:text-lg">
              {title}
            </h2>
          </Link>
          {summary ? (
            <p className="my-2 font-medium text-dark text-lg dark:text-light md:text-2xl sm:text-lg">
              {summary}
            </p>
          ) : null}
          <div className="mt-2 flex items-center">
            <Link href={githubLink} target="_blank" className="w-8">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 underline font-bold text-2xl dark:text-light"
            >
              Visit
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const FeatureProject = ({
  type,
  title,
  summary,
  img,
  link,
  githubLink,
}: FeatureProjectProps) => {
  return (
    <div className="col-span-12 md:col-span-8  sm:col-span-4">
      <article
        className="relative w-full flex flex-col items-center justify-between rounded-3xl border border-solid
     border-dark dark:border-light bg-light dark:bg-dark  shadow-2xl p-12  rounded-br-2xl
     md:flex-col md:p-6 xs:p-2
     "
      >
        <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:right-0" />
        {/* project description*/}
        <div className="flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg md:w-full "
          >
            <FramerImage
              src={img}
              alt={title}
              className="w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          <div className="w-1/2 flex flex-col items-start justify-between pl-6   md:w-full md:pl-0 ">
            <span className=" text-primary dark:text-primaryDark font-medium  text-xl">
              {type}
            </span>
            <Link
              href={link}
              target="_blank"
              className="hover:underline  underline-offset-2"
            >
              <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light md:text-2xl sm:text-lg">
                {title}
              </h2>
            </Link>
            <p className="my-2 font-medium text-dark text-lg dark:text-light md:text-base sm:text-sm">
              {summary}
            </p>
            <div className="mt-2 flex items-center">
              <Link href={githubLink} target="_blank" className="w-10">
                <GithubIcon />
              </Link>
              <Link
                href={link}
                target="_blank"
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </div>
        {/*tech used*/}
        <div className="w-full">
          <p className="  text-primary dark:text-primaryDark   font-bold  text-2xl pt-5 ">
            Tech Used
          </p>
          <TechStack techUsed={['aws', 'css', 'git', 'html', 'js', 'next']} />
        </div>
      </article>
    </div>
  );
};

export default FeatureProject;
