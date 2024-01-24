import React from "react";
import Navbar from "../components/Hero/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import OurService from "../components/OurServices";
import ChooseUs from "../components/ChooseUs";
// import Testimony from "../components/Testimony";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full bg-gray-800 h-[100%] font-[200]">
      <Navbar />
      <HeroSection />
      <OurService />
      <ChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
