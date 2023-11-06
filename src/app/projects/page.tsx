import React from 'react';
import type { Metadata } from 'next';
import GeneralWrapper from '@/components/Wrappers/General';
import AnimatedText from '@/components/AnimatedText';
import FeatureProject, { Project } from '@/components/FeatureProject';
import project1 from '../../../public/images/projects/crypto-screener-cover-image.jpg';

export const metadata: Metadata = {
  title: 'Projects | Enrique Alvarado',
  description: 'Checkout my latest projects',
};

// TODO: agregar el techused a cada proyecto , una estrellita para featured, explicacion de que se hixo en front y back
// TODO separar por titulos los proyectos algo como start up apps, business pages, ecommerce

const page = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center ">
      <GeneralWrapper className="pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className=" mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl  sm:mb-4 "
        />
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4  gap-24 gap-y-32 md:gap-y-10">
          <FeatureProject
            type="Featured"
            title="Crypto Screener Application"
            githubLink="/"
            link="/"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currenc"
          />

          <Project
            type="Featured"
            title="Crypto Screener Application"
            githubLink="/"
            link="/"
            img={project1}
          />

          <Project
            type="Featured"
            title="Crypto Screener Application"
            githubLink="/"
            link="/"
            img={project1}
          />

          <FeatureProject
            type="Featured"
            title="Crypto Screener Application"
            githubLink="/"
            link="/"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currenc"
          />

          <Project
            type="Featured"
            title="Crypto Screener Application"
            githubLink="/"
            link="/"
            img={project1}
          />
          <Project
            type="Featured"
            title="Crypto Screener Application"
            githubLink="/"
            link="/"
            img={project1}
          />
        </div>
      </GeneralWrapper>
    </main>
  );
};

export default page;
