
import Image from "next/image";
import HeroSection from "@/components/landingPage/hero-section";
import ContactUs from "@/components/landingPage/contact-us";

import Footer from "@/components/landingPage/footer-section";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
