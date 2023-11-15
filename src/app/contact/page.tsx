import React from 'react';
import GeneralWrapper from '@/components/Wrappers/General';
import TransitionEffect from '@/components/TransitionEffect';
TransitionEffect;
const page = () => {
  return (
    <>
      <TransitionEffect />
      <GeneralWrapper>
        <section className="flex">
          <div className="w-1/2">
            <div className="flex flex-col my-2">
              <label className=" text-dark dark:text-light font-semibold text-lg">
                Name *
              </label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="form-input placeholder:dark:text-light/70 w-full my-1 px-3 py-1 rounded-md bg-transparent  text-dark dark:text-light
               focus:!ring-primary  focus:border-primary  focus:dark:!ring-primaryDark  focus:dark:border-primaryDark"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className=" text-dark dark:text-light font-semibold text-lg">
                Email *
              </label>
              <input
                required
                placeholder="email@yourcompany.com"
                type="email"
                className="form-input placeholder:dark:text-light/70 w-full my-1 px-3 py-1 rounded-md bg-transparent text-dark dark:text-light 
               focus:!ring-primary  focus:border-primary  focus:dark:!ring-primaryDark  focus:dark:border-primaryDark"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className=" text-dark dark:text-light font-semibold text-lg">
                Leave me a message
              </label>
              <textarea
                required
                placeholder="Hi! lets work together . . ."
                className="form-textarea resize-none placeholder:dark:text-light/70
              w-full my-1 px-3 py-1 rounded-md bg-transparent  text-dark dark:text-light
               focus:!ring-primary  focus:border-primary  focus:dark:!ring-primaryDark  focus:dark:border-primaryDark"
              />
            </div>
            <div>
              <button
                className="
              w-full
              bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800
            dark:from-sky-300  dark:via-cyan-300 dark:to-sky-300
              font-bold mt-4 text-lg py-1 rounded-lg text-light dark:text-dark/75
              transition-all duration-300 ease-in-out 
            hover:shadow-lg dark:hover:shadow-cyan-500/50 hover:shadow-purple-400
              "
              >
                Send
              </button>
            </div>
          </div>
          <div>{/*3d model*/}</div>
        </section>
      </GeneralWrapper>
    </>
  );
};

export default page;
