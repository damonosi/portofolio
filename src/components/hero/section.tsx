"use client";

import { motion } from "framer-motion";
import HelloLottie from "./HelloLottie";
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
    hidden: { x: "-20%", scale: 0 },
    show: { x: 0, scale: 1 },
  };
  return (
    <section
      className="relative overflow-hidden flex min-h-[calc(100vh-80px)]  w-full max-w-[1920px] gap-2 py-6  "
      id="hero-section"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col text-center gap-20 font-bold  w-2/3 text-2xl justify-center"
      >
        <motion.h2 variants={item}>Hello</motion.h2>
        <motion.h1 variants={item}>My name is Andrei</motion.h1>
        <motion.span variants={item}>
          I am a self taught web developer <br /> that is specialised in
          front-end development
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "10%", opacity: 1 }}
        transition={{ delay: 2, duration: 2.5 }}
        className="absolute bottom-0 right-0"
      >
        <HelloLottie className="" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
