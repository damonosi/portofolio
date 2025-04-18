"use client";
import SectionBackground from "@/components/SectionBackground";
import AboutSection from "@/components/about/section";
import HeroSection from "@/components/hero/section";
import ProiecteSection from "@/components/projects/section";

const HorizontalLine = () => {
  return <hr className="w-64 h-1 border-portocaliu bg-portocaliu my-15" />;
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col relative ">
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
