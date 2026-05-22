"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

function LandingNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/home") ? (
        null
      ) : (
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div
              onClick={() => {
                router.push("/");
                console.log("logo clicked !");
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/mft-logo.svg"
                alt="logo image"
                width={40}
                height={40}
              />
              <h1 className="text-xl font-bold text-blue-700">
                MFT<span className="text-orange-500">Banking</span>
              </h1>
            </div>
            {pathname !== "/register" ? (
              <button
                onClick={() => {
                  router.push("/register");
                  console.log("register button clicked !");
                }}
                className="px-5 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
              >
                Register
              </button>
            ): null}
          </nav>
        </header>
      )}
    </>
  );
}

export default LandingNavbar;
