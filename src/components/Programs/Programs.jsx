import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.jpg";
import program_2 from "../../assets/program-2.jpg";
import program_3 from "../../assets/program-3.jpg";
import { LuHandHeart } from "react-icons/lu";
import { IoSchoolOutline } from "react-icons/io5";
import { PiShareNetworkLight } from "react-icons/pi";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <LuHandHeart size={100} />
          <p>Supportive Community</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <IoSchoolOutline size={100} />
          <p>Quality Education</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <PiShareNetworkLight size={100} />
          <p>Career Preparation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
