import { SiOpensea } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { FcGoogle } from "react-icons/fc";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  return (
    <div className="sticky top-0 z-50 flex h-[10vh] items-center justify-between bg-lightGrey px-5 dark:bg-darkGrey">
      <h1 className="flex-1 text-4xl">
        <SiOpensea />
      </h1>
      <ul className="hidden flex-1 items-center justify-end gap-5 text-xl md:flex">
        <li>Home</li>
        <li>About Us</li>
        <button
          className="rounded-full bg-slate-500 px-10 py-3 text-white no-underline shadow-lg transition hover:bg-slate-600 dark:bg-white/10 dark:hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? (
            "Sign out"
          ) : (
            <div className="flex items-center justify-between gap-4">
              <FcGoogle className="text-3xl" />
              Sign in with Google
            </div>
          )}
        </button>
        <ThemeToggle />
      </ul>
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
