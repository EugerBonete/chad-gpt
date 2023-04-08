"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiOutlineSun } from "react-icons/hi";
import { RxLightningBolt } from "react-icons/rx";
import { TiWarningOutline } from "react-icons/ti";
import { TbSend } from "react-icons/tb";
import { BsArrowDownShort } from "react-icons/bs";

export default function Main() {
  const { data: sessionData } = useSession();

  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const myElement = document.getElementById("scrollableDiv");
    if (myElement) {
      const handleScroll = () => {
        const scrollTopHeight = myElement.scrollTop;
        if (scrollTopHeight >= 0.1 * window.innerHeight) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
      myElement.addEventListener("scroll", handleScroll);
      return () => myElement.removeEventListener("scroll", handleScroll);
    } else {
      console.log(`Element is not defined.`);
    }
  }, []);

  const MainData = [
    {
      icon: <HiOutlineSun className="text-4xl" />,
      text: "Examples",
      content: [
        "Explain quantum computing in simple terms",
        "Got any creative ideas for a 10 year old’s birthday?",
        "How do I make an HTTP request in Javascript?",
      ],
    },
    {
      icon: <RxLightningBolt className="text-4xl" />,
      text: "Capabilities",
      content: [
        "Remembers what user said earlier in the conversation",
        "Allows user to provide follow-up corrections",
        "Trained to decline inappropriate requests",
      ],
    },
    {
      icon: <TiWarningOutline className="text-4xl" />,
      text: "Limitations",
      content: [
        "May occasionally generate incorrect information",
        "May occasionally produce harmful instructions or biased content",
        "Limited knowledge of world and events after 2021",
      ],
    },
  ];
  return (
    <div
      className="h-[98vh] w-full overflow-scroll lg:h-[95vh]"
      id="scrollableDiv"
    >
      <Navbar />
      <div className=" flex flex-col items-center justify-center gap-10 py-20">
        <h1 className="text-4xl font-semibold">
          {`Hello ${sessionData?.user.name || "Guest"}`}{" "}
        </h1>

        <div className="lg:mx-15 m-2 flex flex-col gap-10 md:m-5 md:flex-row">
          {MainData.map((data) => {
            return (
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col items-center justify-center text-xl">
                  {data.icon}
                  <p>{data.text}</p>
                </div>
                {data.content.map((texts) => {
                  return (
                    <button className="w-full rounded-lg bg-gray-600 bg-opacity-20 p-5 shadow-lg hover:bg-gray-500 hover:dark:bg-gray-900">
                      {texts}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sticky bottom-[0px] z-50 flex w-full items-end justify-center px-20">
        <div className="relative w-full">
          <input
            className="w-full rounded-lg bg-gray-400 p-4 text-xl text-black placeholder-black placeholder-opacity-50 shadow-lg outline-none dark:bg-[#40414f] dark:text-white dark:placeholder-white "
            type="text"
            placeholder="Send a message..."
          />
          <button className="absolute bottom-0 right-0 top-0">
            <TbSend className="mr-4 text-2xl opacity-75" />
          </button>
        </div>
        {showButton && (
          <button className="absolute bottom-[80px] right-[40px] flex items-center justify-center rounded-full border border-black bg-white dark:border-none dark:bg-gray-600">
            <BsArrowDownShort className="text-3xl opacity-75" />
          </button>
        )}
      </div>
    </div>
  );
}
