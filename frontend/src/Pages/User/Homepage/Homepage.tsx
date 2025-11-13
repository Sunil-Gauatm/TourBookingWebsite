import React from "react";
import HeroSection from "./Components/HeroSection";
import Category from "./Components/Category";
import Topdestination from "./Components/Topdestination";
import Aboutus from "./Components/Aboutus";
import Testimonials from "./Components/Testimonials";
import Sponser from "./Components/Sponser";
import Navbar from "../../../Components/Layouts/Navbar";
import Footersection from "../../../Components/Layouts/Footersection";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <Topdestination />
      <Aboutus />
      <Testimonials />
      <Sponser />
      <Footersection />
    </div>
  );
};

export default Homepage;
