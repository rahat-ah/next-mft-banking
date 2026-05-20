"use client";
import Image from "next/image";
import HeroSection from "@/components/landingPage/hero-section";
import ContactUs from "@/components/landingPage/contact-us";
import LandingNavbar from "@/components/landingPage/landing-navbar";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <LandingNavbar  />

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 MFT Banking. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
