import React, { useState } from 'react'

function VerifyOtpPopup({email , mobileNumber ,onClose, setIsEmailVerified}:{
    email:string;
    mobileNumber:string;
    onClose:() => void;
    setIsEmailVerified:React.Dispatch<React.SetStateAction<boolean>>;
    
}) {

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerifyClick = () => {
        setLoading(true);
        console.log("Verifying OTP:", otp);
        
        setIsEmailVerified(true);
        setLoading(false);
        onClose();
    }
    
  return (
    <div className="fixed z-50 flex items-center justify-center inset-0">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-80 backdrop-blur-sm"
      ></div>

      {/* Popup Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 md:p-8 z-10 animate-fadeIn shadow-black">
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
          Verify Email with OTP
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          OTP expires in:{" "}
          {/* <span className="font-medium text-orange-500">{formatTime(timeLeft)}</span> */}
        </p>

        <p className="text-sm text-gray-600 mb-1 text-left">
          Email: <span className="font-medium text-orange-500">{email}</span>
        </p>

        <p className="text-sm text-gray-600 mb-4 text-left">
          Mobile Number: <span className="font-medium text-orange-500">{mobileNumber}</span>
        </p>

        {/* OTP Input */}
        <input
          type="text"
          value={otp}
          placeholder="Enter OTP"
          onChange={(e)=> setOtp(e.target.value)}
          maxLength={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Countdown */}
        
        {/* Verify Button */}
        <button
           onClick={handleVerifyClick}
           disabled={loading}
          className={`w-full px-4 py-2 rounded-xl text-white font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {otp ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Close Link */}
        <p
          className="text-sm text-center mt-4 text-orange-500 cursor-pointer hover:underline"
          onClick={onClose}
        >
          Cancel
        </p>
      </div>
    </div>
  )
}

export default VerifyOtpPopup