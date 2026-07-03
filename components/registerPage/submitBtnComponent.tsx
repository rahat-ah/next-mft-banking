"use client";

import { useFormStatus } from "react-dom";
import { ImSpinner3 } from "react-icons/im";

function SubmitBtnComponent() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`mt-4 px-6 py-3 rounded-xl text-white font-medium transition w-full ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          Registering...
          <ImSpinner3 className="animate-spin" />
        </span>
      ) : (
        "Register"
      )}
    </button>
  );
}

export default SubmitBtnComponent;