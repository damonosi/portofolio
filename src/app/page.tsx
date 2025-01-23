import SectionBackground from "@/components/SectionBackground";
import AboutSection from "@/components/about/section";
import HeroSection from "@/components/hero/section";
import ProiecteSection from "@/components/projects/section";


const HorizontalLine = () => {
  return (
    <hr className="w-full h-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] my-15" />
  );
};

export default function Home() {
  return (
    <div className="grid  min-h-screen grid-cols-1 relative ">
      <SectionBackground className="">
        <HeroSection />
      </SectionBackground>
      <HorizontalLine />
      <SectionBackground className="  ">
        <ProiecteSection />
      </SectionBackground>
      <HorizontalLine />
      <SectionBackground className=" ">
        <AboutSection />
      </SectionBackground>
    </div>
  );
}
