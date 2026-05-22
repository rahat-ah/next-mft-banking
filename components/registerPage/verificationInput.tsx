"use client";
import { useFormik } from "formik";
import VerifyOtpPopup from "./verifyOtpPopup";
import { useState } from "react";

function VerificationInput() {
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        mobileNumber: "",
      },
      onSubmit: (values) => {
        // Handle form submission logic here
        console.log("Form submitted with values:", values);
        setShowOtpPopup(true);
      },
    });
  return (
    <>
      <div className="flex justify-between items-center gap-1">
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email Address"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
        />
      </div>

      {showOtpPopup && (
        <VerifyOtpPopup
          email={values.email}
          mobileNumber={values.mobileNumber}
          onClose={() => setShowOtpPopup(false)}
          setIsEmailVerified={setIsEmailVerified}
        />
      )}

      <input
        type="tel"
        name="mobileNumber"
        value={values.mobileNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="01XXXXXXXXX"
        required
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => handleSubmit()}
        disabled={values.email === "" || values.mobileNumber === ""}
        className={`mt-2 px-4 py-2 rounded-lg font-medium text-white ${
          values.email === "" || values.mobileNumber === ""
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Send OTP
      </button>
    </>
  );
}

export default VerificationInput;
