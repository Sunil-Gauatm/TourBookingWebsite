import React from "react";
import Navbar from "../../Components/Layouts/Navbar";
import HeroSection from "./Components/HeroSection";
import Category from "./Components/Category";
import Topdestination from "./Components/Topdestination";
import Aboutus from "./Components/Aboutus";
import Testimonials from "./Components/Testimonials";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <Topdestination />
      <Aboutus />
      <Testimonials />

     
    </div>
  );
};

export default Homepage;
