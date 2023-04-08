"use client";

import React, { ReactNode } from "react";
import { BsChatLeft, BsImage } from "react-icons/bs";
import { FaRegFileAudio } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";

type LoginProps = {
  icon: ReactNode;
  text: string;
};

export default function Sidebar() {
  const { data: sessionData } = useSession();
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  const LoginBtn = ({ icon, text }: LoginProps) => {
    return (
      <button
        className="rounded-full bg-white/10 px-10 py-3  no-underline shadow-lg transition hover:bg-slate-600 hover:bg-white/20 "
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? (
          "Sign out"
        ) : (
          <div className="flex items-center justify-center gap-2">
            {icon}
            <p>{text}</p>
          </div>
        )}
      </button>
    );
  };

  const handleToggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");
    if (sidebar && toggleSidebar) {
      sidebar.classList.add("-left-[350px]");
      toggleSidebar.classList.remove("hidden");
    }
  };
  return (
    <aside
      id="sidebar"
      className={`absolute -left-[350px] z-[100] h-full w-1/4 min-w-[290px] flex-col items-center justify-start bg-dark text-white transition duration-700 ease-in-out lg:static lg:flex`}
    >
      <h1 className="flex flex-1 justify-end pr-2 pt-2 text-end text-4xl lg:hidden">
        <IoMdClose className="cursor-pointer" onClick={handleToggleSidebar} />
      </h1>
      <ul className="flex w-full flex-col gap-4 p-5">
        <button className="flex w-full items-center gap-5 rounded-lg border border-gray-400 p-4 hover:bg-gray-700">
          <BsChatLeft className="text-xl" />
          <p className="">Chat Completion</p>
        </button>

        <button className="flex w-full items-center gap-5 rounded-lg border border-gray-400 p-4 hover:bg-gray-700">
          <BsImage className="text-xl" />
          <p className="">Image Generation</p>
        </button>

        <button className="flex w-full items-center gap-5 rounded-lg border border-gray-400 p-4 hover:bg-gray-700">
          <FaRegFileAudio className="text-xl" />
          <p className="">Audio Creation</p>
        </button>
      </ul>
      {sessionData ? (
        <ul className="flex w-full flex-col gap-4 p-5">
          <ThemeToggle />
        </ul>
      ) : (
        <ul className="flex w-full flex-col gap-4 p-5">
          <LoginBtn
            text=" Google Sign In"
            icon={<FcGoogle className="text-3xl" />}
          />
          <p className="text-center">or</p>
          <LoginBtn
            text=" Facebook Sign In"
            icon={<BsFacebook className="text-3xl text-blue-500" />}
          />
          <ThemeToggle />
        </ul>
      )}
    </aside>
  );
}
