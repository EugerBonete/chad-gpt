import { BsFillSunFill, BsPeople } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { SiOpensea } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex h-[10vh] items-center justify-between bg-white px-5 dark:bg-darkGrey">
      <h1 className="flex-1 text-4xl">
        <SiOpensea />
      </h1>
      <ul className="hidden flex-1 items-center justify-end text-xl md:flex">
        {["Home", "About Us"].map((data, index) => (
          <li key={index} className="">
            <a className="relative block p-4" href="#">
              <div className="flex items-center justify-center gap-4">
                <span className="text-md font-medium "> {data} </span>
              </div>
            </a>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </div>
  );
}
