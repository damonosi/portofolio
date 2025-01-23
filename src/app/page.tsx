import SectionBackground from "@/components/SectionBackground";
import AboutSection from "@/components/about/section";
import HeroSection from "@/components/hero/section";
import ProiecteSection from "@/components/projects/section";

export default function Home() {
  return (
    <div className="grid  min-h-screen grid-cols-1 relative ">
      <SectionBackground className="">
        <HeroSection />
      </SectionBackground>
      <hr className="w-full h-2 bg-black my-5" />
      <SectionBackground className=" ">
        <AboutSection />
      </SectionBackground>{" "}
      <hr className="w-full h-2 bg-black my-15" />
      <SectionBackground className="  ">
        <ProiecteSection />
      </SectionBackground>
    </div>
  );
}
