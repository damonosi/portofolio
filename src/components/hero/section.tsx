"use client";
import { MotionDiv, MotionH2, MotionSpan } from "@/utils/MotionComponents";

const MotionHr = ({ className }: { className?: string }) => {
  const hrAnimation = {
    hidden: { top: 0, opacity: 0 },
    show: {
      top: "100%",
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <MotionSpan
      variants={hrAnimation}
      initial="hidden"
      animate="show"
      className={`w-1/3 h-1 absolute bg-portocaliu border-portocaliu rounded-full ${className} `}
    />
  );
};
const HeroMask = () => {
  const maskVariants = {
    offscreen: { opacity: 0, y: "-50%", x: 1000 },
    onscreen: {
      x: "30%",
      y: "-50%",
      opacity: 1,
      transition: {
        duration: 2.5,
      },
    },
  };
  return (
    <MotionSpan
      whileInView="onscreen"
      initial="offscreen"
      variants={maskVariants}
      className="absolute top-0 right-0 w-full h-full bg-portocaliu rounded-full "
    ></MotionSpan>
  );
};
const HeroSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 1,
        delayChildren: 0.4,
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    show: {
      oyiginY: 0,
      opacity: 1,

      transition: { duration: 2 },
    },
  };

  return (
    <section
      className={`relative overflow-hidden items-start md:items-center md:justify-center   flex mt-[80px] md:mt-0 min-h-[calc(100vh-80px)] py-16 md:py-6 w-full `}
      id="hero-section"
    >
      <MotionDiv
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full re text-center h-full gap-20 font-bold  text-2xl justify-center"
      >
        <HeroMask />
        <MotionDiv
          variants={container}
          className="flex relative"
        >
          <MotionHr className="w-1/4" />
          <MotionH2
            variants={textAnimation}
            className="text-9xl  text-start "
          >
            Hello,
          </MotionH2>
        </MotionDiv>

        <MotionDiv className="flex relative">
          <MotionHr className="lg:w-1/4" />
          <MotionH2
            className="text-4xl text-start"
            variants={textAnimation}
          >
            My name is Andrei
          </MotionH2>{" "}
        </MotionDiv>
        <MotionDiv className="flex relative text-end   w-fit  ml-auto">
          <MotionHr className="w-full" />
          <MotionSpan
            className="text-lg leading-loose mr-2"
            variants={textAnimation}
          >
            I am a passionate web developer that <br /> is specialised in
            front-end web development .
          </MotionSpan>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default HeroSection;

