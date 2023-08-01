import Image from "next/image";
import LevelImg from "../../../public/imagini/level-up.jpg";

const HeroSection = () => {
  return (
    <section
      className=" flex min-h-screen w-full max-w-[1920px] gap-2 py-6  "
      id="hero-section"
    >
      <div className="w-1/2 ">
   
        <Image alt="level up" className="h-auto w-full" src={LevelImg} />{" "}
      </div>
      <div className="w-1/2">z2</div>
    </section>
  );
};

export default HeroSection;
