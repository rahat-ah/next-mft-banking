"use client"

import React from 'react'

function HeroSection() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-orange-50 to-blue-100 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight mb-4">
              Smart Loan & Customer <span className="text-orange-500">Management</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Easily manage customers, track loans, collect deposits and keep records organized
              in one secure dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                // navigate("/banking-register")
                // setLoginFormOpen(true)
                console.log("register button clicked !")
              }}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                    // contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
                    console.log("contact us button clicked !")
                }}
                className="px-6 py-3 rounded-xl border border-orange-400 text-orange-500 font-medium hover:bg-orange-50 transition"
              >
                Contact us
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dznypggdx/image/upload/v1768719148/file_00000000696871fdb65d200119b9597d_o9rinv.png"
              alt="Banking Illustration"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
  )
}

export default HeroSection