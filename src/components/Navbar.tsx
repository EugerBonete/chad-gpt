import { SiOpensea } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { FcGoogle } from "react-icons/fc";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  const handleToggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");
    if (sidebar && toggleSidebar) {
      sidebar.classList.remove("-left-[350px]");
      toggleSidebar.classList.add("hidden");
    }
  };

  return (
    <div className="sticky top-0 z-50 flex h-[10vh] items-center justify-between bg-lightGrey px-5 dark:bg-darkGrey">
      <h1 className="hidden flex-1 text-4xl lg:block">
        <SiOpensea />
      </h1>
      <h1 id="toggleSidebar" className="flex-1 text-4xl lg:hidden">
        <BiMenuAltLeft
          className="cursor-pointer"
          onClick={handleToggleSidebar}
        />
      </h1>
      {sessionData && (
        <div className=" flex items-center justify-end gap-4 text-xl">
          <button
            className={`rounded-full bg-white/10 px-10 py-3 no-underline shadow-lg transition hover:bg-slate-600 hover:bg-white/20 ${
              sessionData
                ? ""
                : "cursor-wait disabled:cursor-not-allowed disabled:opacity-50"
            }`}
            onClick={() => void signOut()}
            disabled={!sessionData}
          >
            {sessionData ? "Sign out" : "Loading..."}
          </button>
          <img
            className="h-10 w-10 rounded-full"
            src={sessionData?.user.image || ""}
            alt={sessionData.user.name || ""}
          />
          <p>{sessionData.user.name}</p>
        </div>
      )}
    </div>
  );
}

/* <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm text-white">
            {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
            {secretMessage && <span> - {secretMessage}</span>}
          </p>
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div> */
