import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Our Students Think" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Connect With Us" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
