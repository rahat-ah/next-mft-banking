"use client";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Countdown from "./otpExpireCountdown";

function SendOptComponent({ email }: { email: String }) {
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const sendOtpHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/send-verify-otp`,
        {
          email,
        },
        { withCredentials: true },
      );

      console.log("OTP sent response:", response.data);

      if (response.data.success) {
        toast.success(response.data.message)
        setIsOtpSent(true);
      }else{
        toast.error(response.data.message)
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const verifyOtpHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/verify-otp`,
        {
          email,
          givenOtp: otp,
        },
        { withCredentials: true },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/home");
      }else{
        toast.error(response.data.message)
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {isOtpSent ? (
        <>
          <div className="flex justify-center mb-3">
            <p className="flex items-center gap-2 px-4 py-0.5 rounded-lg bg-blue-50 text-blue-700 font-medium shadow-sm">
              <span className="text-orange-500">OTP expires in:</span>
              <span className="text-blue-600 font-bold">
                <Countdown />
              </span>
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className={`w-full px-4 py-2 rounded-xl text-white font-medium transition 
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={verifyOtpHandler}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                Verifying...
                <ImSpinner3 className="animate-spin" />
              </span>
            ) : (
              "Verify OTP"
            )}
          </button>
        </>
      ) : (
        <button
          className={`w-full px-4 py-2 rounded-xl text-white font-medium transition 
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          onClick={sendOtpHandler}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              Sending...
              <ImSpinner3 className="animate-spin" />
            </span>
          ) : (
            "Send OTP"
          )}
        </button>
      )}
      <ToastContainer />
    </>
  );
}

export default SendOptComponent;
