"use client";

import { useState, useEffect } from "react";

function verifyOtpComponent({ id }: { id: String }) {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [sendOtp, setSendOtp] = useState(false);

  const sendOtpHandler = ()=>{ setSendOtp(true) }

  console.log(id);

  return (
    <>
      <p className="text-sm text-gray-600 mb-1 text-left">
        Email: <span className="font-medium text-orange-500">{email}</span>
      </p>

      <p className="text-sm text-gray-600 mb-4 text-left">
        Mobile Number:{" "}
        <span className="font-medium text-orange-500">{mobileNumber}</span>
      </p>

      {sendOtp ? (
        <>
          {/* OTP Input */}
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Countdown */}

          {/* Verify Button */}
          <button
            className={`w-full px-4 py-2 rounded-xl text-white font-medium transition 
            ${
              // loading
              //   ? "bg-gray-400 cursor-not-allowed"
              //   : "bg-blue-600 hover:bg-blue-700"
              "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {false ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      ) : (
        <button
          className={`w-full px-4 py-2 rounded-xl text-white font-medium transition 
            ${
              // loading
              //   ? "bg-gray-400 cursor-not-allowed"
              //   : "bg-green-600 hover:bg-green-700"
              "bg-green-600 hover:bg-green-700"
            }`}

            onClick={sendOtpHandler}
        >
          {false ? "Sending..." : "Send OTP"}
        </button>
      )}
    </>
  );
}

export default verifyOtpComponent;
