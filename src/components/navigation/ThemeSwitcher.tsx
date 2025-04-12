"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
const ThemeSwitcher = () => {
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
    <button
      className={`flex group/theme bg-dark dark:bg-light whitespace-nowrap overflow-hidden h-10  w-10 relative    border-2 flex-row group   items-center justify-center  rounded-full border-light py-2 ${
        opened && "border"
      } `}
      onClick={handleSetTheme}
    >
      {theme === "dark" ? (
        <div className="flex  top-1/2 left-1/2 justify-center  transform  ease-in-out duration-1000 -translate-x-[1.2rem] group-hover/theme:-translate-x-[3.8rem] -translate-y-1/2 absolute items-center min-h-[20px] w-20  ">
          <div className="flex  w-full justify-center">
            <MdNightsStay className="text-light dark:text-dark" />
          </div>
          <div className="flex w-full justify-center ">
            <IoSunny className="text-light dark:text-dark" />{" "}
          </div>
        </div>
      ) : (
        <div className="flex top-1/2 left-1/2 justify-center  transform  ease-in-out duration-1000 -translate-x-[1.2rem] group-hover/theme:-translate-x-[3.8rem] -translate-y-1/2 absolute items-center min-h-[20px] w-20  ">
          <div className="flex w-full justify-center ">
            <IoSunny className="text-light dark:text-dark" />{" "}
          </div>
          <div className="flex w-full justify-center">
            <MdNightsStay className="text-light dark:text-dark" />
          </div>
        </div>
      )}
    </button>
  );
};

export default ThemeSwitcher;
