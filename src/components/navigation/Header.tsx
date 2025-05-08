"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import ScrollProgress from "./ScrollProgress";
import ThemeSwitcher from "./ThemeSwitcher";
const Mask = ({ className }: { className?: string }) => {
  return (
    <div
      id="mask"
      className={` absolute  dark:bg-light bg-dark h-0 ease-in-out duration-1000 group-hover:h-full left-0 right-0 bottom-0  z-10 ${className}`}
    ></div>
  );
};
const NavigationButton = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      className="border-2 dark:border-light border-dark group px-4 flex relative w-full items-center justify-center overflow-hidden rounded-full  py-2"
      href={link}
    >
      <span className="z-50 text-dark dark:text-light group-hover:dark:text-dark group-hover:text-light">
        {text}
      </span>
      <Mask className="rounded-full" />
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className=" justify-center items-center gap-5  hidden md:flex">
      <nav className="flex gap-6 text-dark text-xl dark:text-light justify-center items-center">
        <NavigationButton
          link="#hero-section"
          text="About"
        />
        <NavigationButton
          link="#certification"
          text="Studies"
        />
        <NavigationButton
          link="#work"
          text="Projects"
        />
      </nav>

      <ThemeSwitcher />
    </div>
  );
};
const MobileMenu = () => {
  const [openedMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex  md:hidden">
      <TiThMenuOutline
        className="cursor-pointer w-6 h-6 text-[#46a0a0]"
        onClick={() => setOpenMenu(!openedMenu)}
      />
      {openedMenu && (
        <div className="absolute bottom-0 w-full left-0  right-0  justify-center items-center gap-5 top-full">
          <nav className="flex gap-6  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]  backdrop-blur-3xl justify-between px-5 py-5 items-center">
            <Link href={`${"/"} #hero-section`}>About</Link>
            <Link href="#certification">Studies</Link>
            <Link href="#work">Projects</Link>
            <ThemeSwitcher />
          </nav>
        </div>
      )}
    </div>
  );
};
const LogoComponent = () => {
  const router = useRouter();
  function handleRouteHome() {
    router.push("/");
  }
  return (
    <div
      className=" flex w-56 flex-col cursor-pointer hover:scale-105 justify-center items-center"
      onClick={handleRouteHome}
      id="logo-container"
    >
      <span className="text-lg">Portofolio Website</span>
      <span className="text-sm">by Damaschin Andrei</span>
    </div>
  );
};

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scrollDirection = useScrollDirection();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <motion.header
        className={`transition-all border-b-2 border-portocaliu text-dark px-5 duration-700 flex justify-between  sticky top-0   items-center md:px-24 backdrop-blur-lg w-full h-20 z-40  dark:text-light ${
          scrollDirection === "down"
            ? "-translate-y-full scale-90 opacity-0"
            : "-translate-y-0 scale-100 opacity-100"
        } `}
      >
        <LogoComponent />
        <Navigation />
        <MobileMenu />
      </motion.header>
    </>
  );
};

export default Header;
