"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";
const CourseCard = ({
  alt,
  src,
  delay,
}: {
  alt: string;
  src: StaticImageData;
  delay: number;
}) => {
  const [mounted, setOpenModal] = useState(false);

  const openModal = () => {
    setOpenModal(true);
  };
  return (
    <motion.div
      whileHover={{
        y: [0, 0],
      }}
      className="flex items-center justify-center "
      animate={{
        y: [0, 20],
        transition: {
          delay: delay,
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 0.2,
          repeatType: "reverse",
        },
      }}
      id="course-container"
    >
      <Image
        onClick={openModal}
        alt={alt}
        width={400}
        className="rounded cursor-help hover:scale-105"
        src={src}
      />
      <ImageModal
        mounted={mounted}
        setOpenModal={setOpenModal}
        alt={alt}
        src={src}
      />
    </motion.div>
  );
};

export default CourseCard;
