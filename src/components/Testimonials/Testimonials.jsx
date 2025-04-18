import React, { useRef } from "react";
import "./Testimonials.css";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.jpg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <button className="next-btn" onClick={slideForward}>
        <IoMdArrowForward size={20} />
      </button>
      <button className="back-btn" onClick={slideBackward}>
        <IoMdArrowBack size={20} />
      </button>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Kurt Montes</h3>
                  <span>Information Technology</span>
                </div>
              </div>
              <p>
                DLSU challenges students to think beyond the classroom. The
                lessons are connected to real-world issues and encourage
                critical thinking. It is not just about getting good grades—it
                is about personal and intellectual growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Eman Torr G. Berjame</h3>
                  <span>Computer Science</span>
                </div>
              </div>
              <p>
                The professors at DLSU genuinely care about their students. They
                are approachable, supportive, and willing to help even outside
                of class hours. This kind of environment helps students stay
                motivated and confident.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Adrian Quilaton</h3>
                  <span>Information Technology</span>
                </div>
              </div>
              <p>
                The campus feels like a second home to many students. The
                community is welcoming, and there are always events and
                organizations to be part of. It is easy to find people with
                similar interests and goals.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Raffi Molero</h3>
                  <span>Computer Science</span>
                </div>
              </div>
              <p>
                DLSU offers more than just academic knowledge. It teaches
                students to be aware of their values and responsibilities to
                others. Being part of this community helps you grow as a student
                and as a person.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
