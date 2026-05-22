"use client";
import {useRouter} from "next/navigation";

function GetStartedBtnAction() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/register");
        console.log("register button clicked !");
      }}
      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
    >
      Get Started
    </button>
  );
}

export default GetStartedBtnAction;
