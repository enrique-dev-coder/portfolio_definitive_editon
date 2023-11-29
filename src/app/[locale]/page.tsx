import GeneralWrapper from "@/components/Wrappers/General";
import AnimatedText from "@/components/AnimatedText";
import { useTranslations } from "next-intl";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import Dude from "@/3dModels/Dude";
import { Link } from "@/navigation";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <TransitionEffect />
      <main className="flex  items-center text-dark  dark:text-light w-full min-h-screen sm:min-h-[65vh]">
        {/* <p>{t("title")}</p> */}
        <GeneralWrapper className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full md:flex-col">
            <div className="w-1/2 sm:w-full h-[460px] mx-auto sm:h-[350px] lg:inline-block">
              <Dude />
            </div>
            <div className="flex flex-col items-center self-center w-[60%] lg:w-1/2 md:w-full lg:text-center ">
              <AnimatedText
                text={t("title")}
                className="!text-4xl !text-left lg:!text-center  sm:!text-3xl xs:!text-xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                {t("introP")}
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
                  target={"_blank"}
                >
                  CV / Resume
                </Link>
                <Link
                  href={`/projects`}
                  className="ml-4 text-xl font-bold capitalize md:text-base sm:mt-4"
                >
                  {t("CtA")}
                </Link>
              </div>
              <a
                href="https://github.com/enrique-dev-coder/portfolio_definitive_editon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
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
                    <p>
                      {t("Suggest")}{" "}
                      <span className=" text-2xl sm:text-lg">⭐</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </GeneralWrapper>
        <HireMe />
      </main>
    </>
  );
}
