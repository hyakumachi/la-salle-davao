import React from "react";
import "./campus.css";
import campus_img_1 from "../../assets/campus-img-1.jpg";
import campus_img_2 from "../../assets/campus-img-2.jpg";
import campus_img_3 from "../../assets/campus-img-3.jpg";
import campus_img_4 from "../../assets/campus-img-4.jpg";
import { FaArrowRight } from "react-icons/fa6";

const campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={campus_img_1} alt="" />
        <img src={campus_img_2} alt="" />
        <img src={campus_img_3} alt="" />
        <img src={campus_img_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default campus;
