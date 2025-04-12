"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import { motion, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdNightsStay } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { WiDaySunny } from "react-icons/wi";
import Logo from "../../../public/imagini/logo-no-background.svg";
import ScrollProgress from "./ScrollProgress";
import ThemeSwitcher from "./ThemeSwitcher";
const Mask = ({ className }: { className?: string }) => {
  return (
    <div
      id="mask"
      className={` absolute  dark:bg-light bg-dark h-0 ease-in-out duration-1000 group-hover:h-full left-0 right-0 bottom-0 opacity-70 z-10 ${className}`}
    ></div>
  );
};
const NavigationButton = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      className="border-2 group px-4 flex relative w-full items-center justify-center overflow-hidden rounded-full border-light py-2"
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
  const [opened, setOpended] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleSetTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className=" justify-center items-center gap-5 hidden md:flex">
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
      <div
        className={`flex relative h-fit w-full  group px-4  items-center justify-center overflow-hidden rounded-full border-light py-2  `}
      >
        <button
          className={`flex whitespace-nowrap h-fit w-full border-2 flex-row group px-4  items-center justify-center overflow-hidden rounded-full border-light py-2 ${
            opened && "border"
          } `}
          onClick={handleSetTheme}
        >
          {theme === "dark" ? <MdNightsStay /> : <WiDaySunny />}
        </button>
        {opened ? (
          <div className="absolute gap-2  flex top-0 right-1/2 transform translate-y-full items-center translate-x-1/2">
            <span className="text-lg">light</span>
            <ThemeSwitcher />
            <span className="text-lg">dark</span>
          </div>
        ) : (
          ""
        )}
      </div>
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
            <Link href="#hero-section">About</Link>
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
  return (
    <div
      className=" flex w-56 "
      id="logo-container"
    >
      <Image
        alt="logo"
        src={Logo}
      />
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
        className={`transition-all px-5 duration-700 flex justify-between  sticky top-0  dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] items-center md:px-24 backdrop-blur-lg w-full h-20 z-40  text-[#f4e6e6] ${
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
