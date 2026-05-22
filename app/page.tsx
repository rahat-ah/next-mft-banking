
import Image from "next/image";
import HeroSection from "@/components/landingPage/hero-section";
import ContactUs from "@/components/landingPage/contact-us";
import LandingNavbar from "@/components/landingPage/landing-navbar";
import Footer from "@/components/landingPage/footer-section";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <LandingNavbar  />

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
