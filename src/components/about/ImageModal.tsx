import Image, { StaticImageData } from "next/image";
import Modal from "../Portal";

interface IModal {
  alt: string;
  src: StaticImageData;
  mounted: boolean;
  setOpenModal: (arg0: boolean) => void;
}
const ImageModal = ({ alt, src, mounted, setOpenModal }: IModal) => {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Modal mounted={mounted}>
      <div className="flex relative">
        <Image
          alt={alt}
          width={800}
          className="rounded relative"
          src={src}
        />
        <span
          className="absolute top-0 right-0 mr-4 mt-2 cursor-pointer text-red-600 font-extrabold hover:scale-110 "
          onClick={handleClose}
        >
          X
        </span>
      </div>
    </Modal>
  );
};

export default ImageModal;
