"use client";
import IncrementComponent from "@/components/Counter";
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
      <IncrementComponent />
      <SectionBackground className="">
        <HeroSection />
      </SectionBackground>

      <SectionBackground className="  ">
        <ProiecteSection />
      </SectionBackground>

      <SectionBackground className=" ">
        <AboutSection />
      </SectionBackground>
    </div>
  );
}
