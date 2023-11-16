'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <AnimatePresence mode="wait">
      <>
        <motion.div
          key="effect"
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed top-0 bottom-0 right-full w-screen h-screen   z-50 bg-primary"
        />

        <motion.div
          key="effect1"
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          className="fixed top-0 bottom-0 right-full w-screen h-screen  z-40 bg-light"
        />
        <motion.div
          key="effect2"
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
          className="fixed top-0 bottom-0 right-full w-screen h-screen  z-30 bg-dark dark:bg-primaryDark"
        />
      </>
    </AnimatePresence>
  );
};

export default TransitionEffect;
