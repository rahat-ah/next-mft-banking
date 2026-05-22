import React from 'react'
import { FaBars, FaTimes, FaHome, FaUsers, FaPlusCircle } from "react-icons/fa";

function LandingNavbar() {
  return (
     <>
      
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div
              onClick={() => {
                // navigate("/");
                // setLoginFormOpen(false);
                console.log("logo clicked !")
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/mft-logo.svg" alt="logo image" className="w-10 h-10" />
              <h1 className="text-xl font-bold text-blue-700">
                MFT<span className="text-orange-500">Banking</span>
              </h1>
            </div>
              <button
                onClick={() => {
                //   navigate("/banking-register");
                //   setLoginFormOpen(true);
                console.log("register button clicked !")
                }}
                className="px-5 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
              >
                Register
              </button>
          </nav>
        </header>
    </>
  )
}

export default LandingNavbar