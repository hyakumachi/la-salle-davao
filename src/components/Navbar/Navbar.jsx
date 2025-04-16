import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/dlsu-logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="DLSU logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>
          <button className='btn'>Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar

// window.addEventListener("scroll", () => {
//   window.scrollY > 50 ? setSticky(true) : setSticky(false);
// });