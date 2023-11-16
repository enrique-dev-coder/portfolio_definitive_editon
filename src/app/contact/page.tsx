'use client';
import React, { useState, useRef } from 'react';
import GeneralWrapper from '@/components/Wrappers/General';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedText from '@/components/AnimatedText';
import emailjs from '@emailjs/browser';
import PikaRenderer from '@/components/PikaRenderer';

// TODO: add form validation when message sent succesfully

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Verificar si las variables de entorno están definidas
    // Parece innecesario  pero luego ts se pone a yorar con que las variables de entorno son sting | undefined
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_KEY &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_KEY,
          {
            from_name: formData.name,
            to_name: 'Enrique',
            from_email: formData.email,
            to_email: 'titealvarado@gmail.com',
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(() => {
          console.log('mensaje mandado');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error('Una o más variables de entorno no están definidas.');
    }
  };

  return (
    <>
      <TransitionEffect />
      <GeneralWrapper>
        <AnimatedText text="Get in touch" className=" !text-4xl" />
        <section className="flex">
          <form ref={formRef} className="w-1/2" onSubmit={handleSubmit}>
            <div className="flex flex-col my-2">
              <label className=" text-dark dark:text-light font-semibold text-lg">
                Name *
              </label>
              <input
                required
                name="name"
                onChange={(e) => handleChange(e)}
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
                name="email"
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
                name="message"
                required
                placeholder="Hi! lets work together . . ."
                className="form-textarea resize-none placeholder:dark:text-light/70
              w-full my-1 px-3 py-1 rounded-md bg-transparent  text-dark dark:text-light
               focus:!ring-primary  focus:border-primary  focus:dark:!ring-primaryDark  focus:dark:border-primaryDark"
              />
            </div>
            <div>
              <button
                disabled={isLoading}
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
          </form>
          <div className="w-1/2 max-w-[400px] h-[355px] mx-auto">
            <PikaRenderer />
          </div>
        </section>
      </GeneralWrapper>
    </>
  );
};

export default ContactPage;
