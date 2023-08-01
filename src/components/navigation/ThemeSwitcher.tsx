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
        className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-[#46a0a0] after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
      ></div>
      <span
        className={
          seeToolbar
            ? "  absolute right-1/2 -bottom-full h-auto translate-x-1/2 translate-y-full transform items-center justify-center rounded bg-black p-2 text-center text-white ring-4"
            : "hidden"
        }
      >
        select theme
      </span>
    </label>
  );
};

export default ThemeSwitcher;
