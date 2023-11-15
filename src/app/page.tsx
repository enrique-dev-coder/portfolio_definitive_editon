import GeneralWrapper from '@/components/Wrappers/General';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';
import { GithubIcon } from '@/components/Icons';
import Dude from '@/3dModels/Dude';

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex  items-center text-dark  dark:text-light w-full min-h-screen sm:min-h-[65vh]">
        <GeneralWrapper className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full md:flex-col">
            <div className="w-1/2 h-[460px] sm:hidden lg:inline-block">
              <Dude />
            </div>
            <div className="flex flex-col items-center self-center lg:w-1/2 md:w-full lg:text-center ">
              <AnimatedText
                text="Hello! I´m Enrique, welcome to my portfolio."
                className="!text-4xl !text-left lg:!text-center  sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start m-2 lg:self-center sm:flex-col">
                <Link
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold
               border-2 border-solid border-transparent transition-all duration-150 
               hover:border-dark hover:dark:border-light hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light 
               md:p-2 md:px-4 md:text-base 
               "
                  href="/archivo.pdf"
                  download
                  target={'_blank'}
                >
                  CV / Resume
                </Link>
                <Link
                  href="mailto:titealvarado@gmail.com"
                  className="ml-4 text-xl font-bold capitalize md:text-base sm:mt-4"
                >
                  Checkout my projects!
                </Link>
              </div>
              <div className="flex items-center self-start gap-6  my-4 sm:flex-col sm:self-center">
                <div className="w-12  ">
                  <GithubIcon />
                </div>
                <div
                  className="
                  text-xl font-bold  sm:text-xs
                  bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-700 
                  dark:from-sky-300  dark:via-cyan-300 dark:to-sky-300
                  inline-block text-transparent bg-clip-text"
                >
                  <p>Feel free to get the source code of my portfolio</p>
                  <p>
                    please dont forget to give a star{' '}
                    <span className=" text-2xl sm:text-lg">⭐</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GeneralWrapper>
        <HireMe />
      </main>
    </>
  );
}
