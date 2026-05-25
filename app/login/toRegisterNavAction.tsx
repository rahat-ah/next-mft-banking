"use client";
import { useRouter } from "next/navigation";

function ToRegisterNavAction() {
    const router = useRouter();
  return (
    <span
              onClick={() => router.push("/register")}
              className="text-orange-500 cursor-pointer hover:underline"
            >
              Register
            </span>
  )
}

export default ToRegisterNavAction