import SectionBackground from "@/components/SectionBackground";
import AboutSection from "@/components/about/section";
import HeroSection from "@/components/hero/section";
import ProiecteSection from "@/components/projects/section";

export default function Home() {
  return (
    <div className="grid  min-h-screen grid-cols-1 relative">
      <SectionBackground className="">
        <HeroSection />
      </SectionBackground>
      <SectionBackground className=" ">
        <AboutSection />
      </SectionBackground>
      <SectionBackground className="  ">
        <ProiecteSection />
      </SectionBackground>
    </div>
  );
}
