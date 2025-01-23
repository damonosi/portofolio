"use client";

import { motion } from "framer-motion";
const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };
  const item = {
    hidden: { x: "-100%", scale: 0, opacity: 0 },
    show: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <section
      className="relative items-center justify-center overflow-hidden flex min-h-[calc(100vh-80px)]  w-full  gap-2 py-6  "
      id="hero-section"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col text-center  gap-20 font-bold  text-2xl justify-center"
      >
        <motion.h2
          className="text-6xl "
          variants={item}
        >
          Hello
        </motion.h2>
        <motion.h1
          className="text-4xl "
          variants={item}
        >
          My name is Andrei
        </motion.h1>
        <motion.span variants={item}>
          I am a self-taught web developer <br /> that is specialised in
          front-end development
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
