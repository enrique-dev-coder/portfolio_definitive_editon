import React from 'react';
import type { Metadata } from 'next';
import GeneralWrapper from '@/components/Wrappers/General';
import AnimatedText from '@/components/AnimatedText';
import FeatureProject, { Project } from '@/components/FeatureProject';
import project1 from '../../../public/images/projects/kidden.png';
import project2 from '../../../public/images/projects/celebrate.png';
import project3 from '../../../public/images/projects/chat-pdf.png';
import project4 from '../../../public/images/projects/chat.png';
import natura from '../../../public/images/projects/natura.png';
import tracregio from '../../../public/images/projects/tracregio.png';
import estuche from '../../../public/images/projects/estuche.png';
import constelacion from '../../../public/images/projects/constelacion.png';
import kidden from '../../../public/images/projects/kidden2.png';
import road from '../../../public/images/projects/road.png';
import dutch from '../../../public/images/projects/dutch.png';
import Secretary from '../../../public/images/projects/secretary.png';

import TransitionEffect from '@/components/TransitionEffect';

export const metadata: Metadata = {
  title: 'Projects | Enrique Alvarado',
  description: 'Checkout my latest projects',
};

// TODO: agregar el techused a cada proyecto , una estrellita para featured, explicacion de que se hixo en front y back
// TODO separar por titulos los proyectos algo como start up apps, business pages, ecommerce

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center ">
        <GeneralWrapper className="pt-16">
          {/* full stack */}
          <section>
            <AnimatedText
              text="FullStack Web Apps"
              className=" mb-8 lg:!text-6xl sm:!text-6xl xs:!text-4xl  sm:mb-4 "
            />
            <p className="mb-8 text-center text-primary dark:text-primaryDark text-xl">
              I love to create user experiences with React and Next.js on the
              front end, and to build robust server-side architectures using
              Node.js ✨
            </p>
            <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4  gap-24 gap-y-20 md:gap-y-10">
              <FeatureProject
                type="FullStack Web App"
                title="Online storage management system for dentists companies based on USA and Mexico"
                githubLink="https://github.com/kiddenproyectos/kidden_inventory_api"
                link="/"
                img={project1}
                techUsed={[
                  'git',
                  'html',
                  'css',
                  'js',
                  'react',
                  'mui',
                  'redux',
                  'node',
                  'aws',
                  'dynamoDb',
                ]}
                summary="Developed an intuitive Online Inventory Management System using React and Material UI for the frontend, and Node.js with AWS for the backend. This system simplifies the inventory tracking process, enabling users to seamlessly upload product information, manage product existence, and effortlessly upload and compress product photos."
              />
              <FeatureProject
                type="FullStack Web App"
                title="Digital Event invitation App"
                githubLink="https://github.com/enrique-dev-coder/invitamemx_api"
                link="/"
                img={project2}
                summary="Developed a sophisticated web application for a digital invitation company, combining the power of React and Typescript for the frontend. This application revolutionizes the invitation creation process by seamlessly extracting invite data from templates generated in WordPress. The robust backend, built with Node.js and hosted on AWS, ensures secure and scalable functionality. "
                techUsed={[
                  'html',
                  'css',
                  'ts',
                  'react',
                  'tailwind',
                  'redux',
                  'node',
                  'aws',
                  'dynamoDb',
                  'wp',
                ]}
              />
              <FeatureProject
                type="FullStack Web App"
                title="IA Chat With PDF"
                githubLink="https://github.com/enrique-dev-coder/saas-pdf"
                link="/"
                img={project3}
                summary="Engineered a cutting-edge web application for a SaaS company, leveraging the capabilities of Next.js, Node.js, and Typescript. This innovative platform empowers users to engage in dynamic conversations with PDF documents, integrating OpenAI's advanced natural language processing to enhance the interactive experience."
                // Pendiente agregar openAI y prisma
                techUsed={[
                  'html',
                  'css',
                  'ts',
                  'react',
                  'next',
                  'tailwind',
                  'node',
                  'aws',
                ]}
              />
            </div>
          </section>
          {/* React dev*/}
          <section>
            <AnimatedText
              text="FrontEnd React Developer"
              className=" my-8 lg:!text-6xl sm:!text-6xl xs:!text-4xl  sm:mb-4 "
            />
            <p className="mb-8 text-center text-primary dark:text-primaryDark text-xl">
              I&apos;m really passionate for front-end development,creating,
              testing and developoing interfaces with technologies like React
              and Next.js ⭐
            </p>
            <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4  gap-24 gap-y-20 md:gap-y-10">
              <FeatureProject
                type="FrontEnd Engineer"
                title="FrontEnd Engineer at chatcenter Network"
                link="/"
                img={project4}
                techUsed={[
                  'git',
                  'html',
                  'css',
                  'figma',
                  'js',
                  'ts',
                  'react',
                  'jest',
                  'mui',
                  'node',
                  'sass',
                ]}
                summary="Team colaboration for updating and improving current UI of the app, craft and design of new UI Features,overall improve of UI with a redesign of every screen, unit testing  of components, test e2e, use of react context api for state management, development of wordpress plugins"
              />
            </div>
          </section>
          {/* launchy */}
          <section>
            <AnimatedText
              text="Start up business pages"
              className=" my-8 lg:!text-6xl sm:!text-6xl xs:!text-4xl  sm:mb-4 "
            />
            <p className="mb-8 text-center text-primary dark:text-primaryDark text-xl">
              Great pages for ascending companies, being the dev leader{' '}
              <span>
                <a
                  href="https://launchy.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-dark dark:text-light font-bold text-lg"
                >
                  @launchy
                </a>
              </span>{' '}
              🚀
            </p>
            <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4   gap-16 gap-y-16 md:gap-y-10">
              <Project
                videoLink="https://res.cloudinary.com/dof2dcqoe/video/upload/f_auto:video,q_auto/wft1hb68y7os6e0c2nfx"
                link="https://launchy.me/"
                title="Launchy.me"
                githubLink="https://github.com/enrique-dev-coder/launchy.me"
                type="Startup Page"
                techUsed={['git', 'html', 'css', 'next', 'tailwind']}
              />
              <Project
                videoLink="https://res.cloudinary.com/dof2dcqoe/video/upload/f_auto:video,q_auto/ifqrijz7p0oo1twzqgsr"
                link="https://fichap.com/"
                title="Fichap"
                githubLink="/"
                type="Startup Page"
                techUsed={['git', 'html', 'css', 'next', 'tailwind']}
              />
              <Project
                videoLink="https://res.cloudinary.com/dof2dcqoe/video/upload/f_auto:video,q_auto/h9sxztsxi3a6xm8tcca3"
                link="https://cleartechsite.vercel.app/"
                title="ClearTech"
                githubLink="/"
                type="Startup Page"
                techUsed={['git', 'html', 'css', 'next', 'tailwind']}
              />
              <Project
                videoLink="https://res.cloudinary.com/dof2dcqoe/video/upload/f_auto:video,q_auto/taryeartq5qjgcw6ycxw"
                link="https://thinkweek.company/"
                title="Thinkweek"
                githubLink="https://github.com/enrique-dev-coder/cleartechsite"
                type="Startup Page"
                techUsed={['git', 'html', 'css', 'next', 'tailwind']}
              />
            </div>
          </section>
          {/* Wp-woo */}
          <section>
            <AnimatedText
              text="WordPress and Ecommerce"
              className=" my-8 lg:!text-6xl sm:!text-6xl xs:!text-4xl  sm:mb-4 "
            />
            <p className="mb-8 text-center text-primary dark:text-primaryDark text-xl">
              I also can be very efficient using wordpress, elementor,
              woocommerce, managing hosting services and even developing
              wordpress themes and plugins ❤
            </p>
            <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4   gap-16 gap-y-16 md:gap-y-10">
              <Project
                img={natura}
                link="https://natturamty.com/"
                title="Natturamty online store"
                type="Online Shop"
                techUsed={['html', 'css', 'wp', 'woo', 'elementor']}
              />
              <Project
                img={tracregio}
                link="https://www.tracregio.com/"
                title="Autoparts online store"
                type="Online Shop"
                techUsed={['html', 'css', 'wp', 'woo', 'elementor']}
              />
              <Project
                img={estuche}
                link="https://estuchedemonerias.mx/"
                title="Gift online store"
                type="Online Shop"
                techUsed={['html', 'css', 'wp', 'woo', 'elementor']}
              />
              <Project
                img={constelacion}
                link="https://constelaciondigital.com.mx/"
                title="Marketing Agency "
                type="Business Page"
                techUsed={['html', 'css', 'wp', 'figma', 'elementor']}
              />
              <Project
                img={kidden}
                link="https://kidden.com.mx/"
                title="Dentist Page "
                type="Business Page"
                techUsed={['html', 'css', 'wp', 'figma', 'elementor']}
              />
              <Project
                img={road}
                link="https://roadtofit.com.mx/"
                title="Fitness Business"
                type="Business Page"
                techUsed={['html', 'css', 'wp', 'figma', 'elementor']}
              />
              <Project
                img={dutch}
                link="https://thedutchways.com/"
                title="Dutch Classes Company"
                type="Business Page"
                techUsed={['html', 'css', 'wp', 'figma', 'elementor']}
              />
              <Project
                img={Secretary}
                link="https://secretarydo.com/"
                title="IA Saas Company"
                type="Business Page"
                techUsed={['html', 'css', 'wp', 'figma', 'elementor']}
              />
            </div>
          </section>
          <AnimatedText
            text="and many more ..."
            className=" mt-9 mb-8 !text-6xl xs:!text-4xl  sm:mb-4 "
          />
          {/*CTA*/}
          <section className="flex justify-center items-center gap-y-4 flex-col">
            <p className="text-center text-4xl text-dark dark:text-light">
              If you reached the end, then maybe you would want to work with me{' '}
            </p>
            <button
              className="
              bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800
            dark:from-sky-300  dark:via-cyan-300 dark:to-sky-300
              font-bold mt-4 text-4xl px-6 py-2 rounded-lg text-light dark:text-dark/75
              transition-all duration-300 ease-in-out 
              hover:scale-110 hover:shadow-lg dark:hover:shadow-cyan-500/50 hover:shadow-purple-400
              "
            >
              Contact Me
            </button>
          </section>
        </GeneralWrapper>
      </main>
    </>
  );
};

export default page;
