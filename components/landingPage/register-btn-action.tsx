"use client"
import { useRouter } from "next/navigation";

function RegisterBtnAction() {
    const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/banking-register");
        console.log("register button clicked !");
      }}
      className="px-5 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
    >
      Register
    </button>
  );
}

export default RegisterBtnAction;
