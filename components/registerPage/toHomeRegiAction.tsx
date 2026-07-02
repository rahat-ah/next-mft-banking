"use client";
import { useRouter } from "next/navigation";

function ToHomeRegiAction() {
  const router = useRouter();
  return (
    <p
      onClick={() => router.push("/")}
      className="text-sm text-center mt-4 text-orange-500 cursor-pointer hover:underline"
    >
      Cancel
    </p>
  );
}

export default ToHomeRegiAction;
