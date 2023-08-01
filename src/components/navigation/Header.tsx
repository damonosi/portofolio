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
        className={`transition-all duration-700 flex justify-between  sticky top-0 dark:bg-black items-center px-24 backdrop-blur-lg w-full h-20 z-40  text-[#f4e6e6] ${
          scrollDirection === "down"
            ? "-translate-y-full scale-90 "
            : "-translate-y-0 scale-100"
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
            <Link href="#about">about</Link>
            <Link href="#certification">certification</Link>
            <Link href="#work">work</Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </motion.header>
    </>
  );
};

export default Header;
