"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <div
        className="rounded-full bg-white fill-dark p-2"
        onClick={() => setTheme("light")}
      >
        <img
          className="h-7 w-7"
          src="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg"
        ></img>
      </div>
    );
  } else {
    return (
      <div
        className="rounded-full bg-purple-500 fill-white p-2"
        onClick={() => setTheme("dark")}
      >
        <img
          className="h-7 w-7"
          src="https://raw.githubusercontent.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code/main/public/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg"
        ></img>
      </div>
    );
  }
}
