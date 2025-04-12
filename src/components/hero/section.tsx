"use client";
import { motion } from "framer-motion";
import { ABeeZee } from "next/font/google";
const abazee = ABeeZee({ weight: "400", subsets: ["latin"] });
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
      className={`relative items-start md:items-center md:justify-center   flex mt-[80px] md:mt-0 min-h-[calc(100vh-80px)] py-16 md:py-6 w-full ${abazee.className}`}
      id="hero-section"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full text-center h-full gap-20 font-bold  text-2xl justify-center"
      >
        <div>
          <motion.h2
            className="text-9xl text-start"
            variants={item}
          >
            Hell<span className="text-7xl">[o]</span>
          </motion.h2>
          <hr className="w-1/3 h-2 bg-portocaliu border-portocaliu" />
        </div>
        <div>
          {" "}
          <motion.h1
            className="text-4xl text-start"
            variants={item}
          >
            My name is Andrei ,
          </motion.h1>{" "}
          <hr className="w-80 h-2 bg-portocaliu border-portocaliu" />
        </div>
        <motion.span
          className="text-end  w-fit  ml-auto"
          variants={item}
        >
          I am a web developer that is specialised <br /> in front-end web
          development
          <hr className="w-full h-2 bg-portocaliu border-portocaliu mt-2" />
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
