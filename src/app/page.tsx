import Image from 'next/image';
import GeneralWrapper from '@/components/Wrappers/General';
import AnimatedText from '@/components/AnimatedText';
import profileImg from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <main className="flex  items-center text-dark  dark:text-light w-full min-h-screen sm:min-h-[65vh]">
      <GeneralWrapper className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full md:flex-col">
          <div className="w-full sm:hidden lg:inline-block">
            <Image
              src={profileImg}
              alt="Enrique Alvarado"
              className=" h-auto w-full"
              priority
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col items-center self-center lg:w-1/2 md:w-full lg:text-center ">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
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
                className="ml-4 text-xl font-bold capitalize md:text-base"
              >
                Checkout my projects!
              </Link>
            </div>
          </div>
        </div>
      </GeneralWrapper>
      <HireMe />
    </main>
  );
}
