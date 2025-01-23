"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import Logo from "../../../public/imagini/logo-no-background.svg";
import ScrollProgress from "./ScrollProgress";
import ThemeSwitcher from "./ThemeSwitcher";

const Navigation = () => {
  return (
    <div className=" justify-center items-center gap-5 hidden md:flex">
      <nav className="flex gap-6  justify-center items-center">
        <Link href="#hero-section">About</Link>
        <Link href="#certification">Studies</Link>
        <Link href="#work">Projects</Link>
      </nav>
      <ThemeSwitcher />
    </div>
  );
};
const MobileMenu = () => {
  const [openedMenu, setOpenMenu] = useState(true);
  return (
    <div className="flex  md:hidden">
      <TiThMenuOutline
        className="cursor-pointer w-6 h-6 text-[#46a0a0]"
        onClick={() => setOpenMenu(!openedMenu)}
      />
      {openedMenu && (
        <div className="absolute bottom-0 w-full left-0 right-0 justify-center items-center gap-5 top-full">
          <nav className="flex gap-6 border  justify-between px-5 py-5 items-center">
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
