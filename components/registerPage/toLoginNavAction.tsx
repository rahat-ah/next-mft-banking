"use client"
import { useRouter } from "next/navigation";

function ToLoginNavigate() {
  const router = useRouter();
  return (
    <span onClick={()=> router.push("/login")} className="text-orange-500 cursor-pointer hover:underline">
      Login
    </span>
  );
}

export default ToLoginNavigate;
