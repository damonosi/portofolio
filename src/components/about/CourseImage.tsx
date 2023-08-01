"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

const CourseImage = ({ alt, src }: { alt: string; src: StaticImageData }) => {
  const [modal, setOpenModal] = useState(false);

  const openModal = () => {
    setOpenModal(true);
  };
  return (
    <div className="flex items-center justify-center ">
      <Image
        onClick={openModal}
    
        alt={alt}
        width={400}
        className="rounded "
        src={src}
      />
      <ImageModal
        modal={modal}
        setOpenModal={setOpenModal}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default CourseImage;
