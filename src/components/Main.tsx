import React from "react";
import Navbar from "./Navbar";
import Typewriter from "./Typewriter";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiOutlineSun } from "react-icons/hi";
import { RxLightningBolt } from "react-icons/rx";
import { TiWarningOutline } from "react-icons/ti";

export default function Main() {
  const { data: sessionData } = useSession();
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
    <div className="h-[90vh] w-full overflow-scroll">
      <Navbar />
      <div className="flex h-[50rem] flex-col items-center justify-center gap-20">
        <h1 className="text-4xl font-semibold">
          {`Hello ${sessionData?.user.name || "Guest"}`}{" "}
        </h1>
        <div className="mx-20 flex gap-10">
          {MainData.map((data) => {
            return (
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col items-center justify-center text-xl">
                  {data.icon}
                  <p>{data.text}</p>
                </div>
                {data.content.map((texts) => {
                  return (
                    <button className="w-full rounded-lg bg-gray-600  bg-opacity-20 p-5 shadow-lg hover:bg-gray-900">
                      {texts}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sticky bottom-0 z-50  flex w-full items-end justify-center px-20">
        <input
          className="w-full rounded-lg p-4 text-lg shadow-lg outline-none"
          type="text"
          placeholder="Send a message..."
        />
      </div>
    </div>
  );
}
