import Image, { StaticImageData } from "next/image";

interface IModal {
  alt: string;
  src: StaticImageData;
  modal: boolean;
  setOpenModal: (arg0: boolean) => void;
}
const ImageModal = ({ alt, src, modal, setOpenModal }: IModal) => {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      {modal ? (
        <div
          className="absolute z-50 w-full  bg-gray-200"
          id="modal-overlay"
        >
          <div className="flex h-screen w-full items-center justify-center  p-6 ">
            <Image
              alt={alt}
              width={800}
              className="rounded "
              src={src}
            />
            <span
              className="absolute top-0 right-0 mr-4 cursor-pointer text-red-600"
              onClick={handleClose}
            >
              X
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageModal;
