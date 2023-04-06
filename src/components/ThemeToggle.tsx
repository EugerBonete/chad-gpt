"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeChangeHandler = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  const sunIcon =
    "https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg";

  const moonIcon =
    "https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg";

  return (
    <div
      className="cursor-pointer rounded-full bg-black fill-dark p-2 dark:bg-white"
      onClick={themeChangeHandler}
    >
      <img
        className={`h-7 w-7 ${currentTheme === "light" && "invert"}`}
        src={currentTheme === "light" ? moonIcon : sunIcon}
      />
    </div>
  );
}
