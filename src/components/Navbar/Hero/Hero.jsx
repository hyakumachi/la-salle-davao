import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>THE FUTURE BEGINS HERE</h1>
        <p>
          De La Salle University (DLSU) is a leading private Catholic university
          in Manila, Philippines, founded in 1911 by the De La Salle Brothers.
          Known for academic excellence, it offers top programs in business,
          engineering, and computer studies. DLSU stands out as a hub for
          learning, innovation, and service.
        </p>
        <button className="btn">
          Explore More <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
