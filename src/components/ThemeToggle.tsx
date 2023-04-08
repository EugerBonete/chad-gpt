"use client";
import { useTheme } from "next-themes";
import { RiMoonLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeChangeHandler = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      className=" mt-5 flex w-full items-center gap-5 rounded-lg border p-4 hover:bg-slate-400 dark:hover:bg-gray-700"
      onClick={themeChangeHandler}
    >
      {currentTheme === "light" ? (
        <RiMoonLine className="text-2xl" />
      ) : (
        <BiSun className="text-2xl" />
      )}
      <p className="">Dark Mode</p>
    </button>
  );
}
