"use client";
import { useRouter } from "next/navigation";

function ContactUsBtnAction() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        const section = document.getElementById("contact-us");

        section?.scrollIntoView({
          behavior: "smooth",
        });
        console.log("contact us button clicked !");
      }}
      className="px-6 py-3 rounded-xl border border-orange-400 text-orange-500 font-medium hover:bg-orange-50 transition"
    >
      Contact us
    </button>
  );
}

export default ContactUsBtnAction;
