"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/imagini/logo-no-background.svg";
import ScrollProgress from "./ScrollProgress";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <motion.header
        className={`transition-all duration-700 flex justify-between  sticky top-0  dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] items-center px-24 backdrop-blur-lg w-full h-20 z-40  text-[#f4e6e6] ${
          scrollDirection === "down"
            ? "-translate-y-full scale-90 opacity-0"
            : "-translate-y-0 scale-100 opacity-100"
        } `}
      >
        <div
          className=" flex w-56 "
          id="logo-container"
        >
          <Image
            alt="logo"
            src={Logo}
          />
        </div>
        <div className="flex justify-center items-center gap-5">
          <nav className="flex gap-6  justify-center items-center">
            <Link href="#hero-section">about</Link>
            <Link href="#certification">Studies</Link>
            <Link href="#work">Projects</Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </motion.header>
    </>
  );
};

export default Header;
