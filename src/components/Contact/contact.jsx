import React from "react";
import "./contact.css";
import { BiMessageEdit } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98242237-a847-4470-841b-b940aa88ff38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <BiMessageEdit className="contact-img" size={40} />
        </h3>
        <p>
          If you have any questions or need more information, feel free to reach
          out to us. We're here to help and will get back to you as soon as we
          can.
        </p>
        <ul>
          <li>
            <MdAlternateEmail className="contact-icon" size={20} />{" "}
            pacanza.berns4884@gmail.com
          </li>
          <li>
            <FaPhoneAlt className="contact-icon" size={20} /> +639086775670
          </li>
          <li>
            <CiLocationOn className="contact-icon" size={20} /> Davao Global
            Township, Matina, Davao City
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Leave us a message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <FaArrowRight />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
