import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.jpg'
import { CiPlay1 } from "react-icons/ci";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <CiPlay1 className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Religio, Mores, Cultura</h2>
        <p>
          De La Salle University (DLSU) is a private non-profit higher
          educational institution established in 1911 by the Brothers of the
          Christian Schools (FSC). It is one of 16 institutions within the De La
          Salle Philippines (DLSP) network. The main 5.4-hectare campus is
          located on Taft Avenue in Manila, but the University operates
          satellites in Makati, Bonifacio Global City, and Laguna.
        </p>
        <p>
          DLSU has seven colleges and three schools: the Ramon V. del Rosario
          College of Business (RVRCOB), College of Computer Studies (CCS),
          Brother Andrew Gonzalez FSC College of Education (BAGCED), John
          Gokongwei College of Engineering (JGCOE), School of Law (SOL), College
          of Liberal Arts (CLA), College of Science (COS), the School of
          Economics (SOE), the newly-established School of Lifelong Learning
          (SoLL, 2021), and School of Innovation and Sustainability (Laguna
          Campus, 2023).
        </p>
        <p>
          Social engagement is integrated into all academic programs and
          promoted by dedicated university units like the Center for Social
          Concern and Action (COSCA) and the Lasallian Social Enterprise for
          Economic Development (LSEED) Center. The Philippine Lasallian
          community has also built up a One La Salle Scholarship Fund of over
          PhP2 billion to make Lasallian education more accessible.
        </p>
      </div>
    </div>
  );
}

export default About