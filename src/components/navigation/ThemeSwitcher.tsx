"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [seeToolbar, setSeeToolbar] = useState(false);

  const handleOnMouseEnter = () => {
    setSeeToolbar(true);
  };
  const handleOnMouseLeave = () => {
    setSeeToolbar(false);
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value={theme}
        onChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="peer sr-only"
      />
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="peer h-6 w-11 rounded-full bg-blue-600 bg-opacity-50 after:border-dark after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-dark dark:after:bg-light after:transition-all after:content-[''] peer-checked:bg-blue-600  peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none   dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
      ></div>
      <span
        className={
          seeToolbar
            ? "  absolute right-1/2 -bottom-full h-auto translate-x-1/2 translate-y-full transform items-center z-50 justify-center rounded  p-2 text-center text-white "
            : "hidden"
        }
      >
        {theme === "dark" ? "dark theme" : "light"}
      </span>
    </label>
  );
};

export default ThemeSwitcher;
