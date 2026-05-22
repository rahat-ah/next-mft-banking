"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LogoAction() {
    const router =  useRouter()

  return (
    <div
      onClick={() => {
        router.push("/");
        console.log("logo clicked !");
      }}
      className="flex items-center gap-2 cursor-pointer"
    >
      <Image src="/mft-logo.svg" alt="logo image" width={40} height={40} />
      <h1 className="text-xl font-bold text-blue-700">
        MFT<span className="text-orange-500">Banking</span>
      </h1>
    </div>
  );
}

export default LogoAction;
