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
      className="relative items-start md:items-center md:justify-center   flex mt-[80px] md:mt-0 min-h-[calc(100vh-80px)] py-16 md:py-6 w-full  "
      id="hero-section"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col text-center h-hull gap-20 font-bold  text-2xl justify-center"
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
