import Image from 'next/image';
import GeneralWrapper from '@/components/Wrappers/General';
import AnimatedText from '@/components/AnimatedText';
import profileImg from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <main className="flex  items-center text-dark  dark:text-light w-full min-h-screen">
      <GeneralWrapper className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={profileImg}
              alt="Enrique Alvarado"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium ">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start m-2">
              <Link
                className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold
               border-2 border-solid border-transparent transition-all duration-150 
               hover:border-dark hover:dark:border-light hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light "
                href="/archivo.pdf"
                download
                target={'_blank'}
              >
                CV / Resume
              </Link>
              <Link
                href="mailto:titealvarado@gmail.com"
                className="ml-4 text-xl font-bold capitalize"
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
