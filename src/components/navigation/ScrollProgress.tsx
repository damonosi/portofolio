"use client";
import { MotionValue, motion, useSpring } from "framer-motion";
const ScrollProgress = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-1 bg-red-600 origin-left z-50"
      style={{ scaleX: scaleX }}
    />
  );
};

export default ScrollProgress;
