import React, { useState } from "react";
import { FaUtensils, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);

  return (
    <header>
      <a href="#" className="logo">
        <span>
          <FaUtensils />
        </span>
        Food
      </a>
      {navbar
        ? <AiOutlineClose
            id="menu-bar"
            className="menu-bar"
            onClick={showNavbar}
          />
        : <FaBars id="menu-bar" className="menu-bar" onClick={showNavbar} />}
      <nav className={navbar ? "navbar active" : "navbar"}>
        <a href="#home" onClick={showNavbar}>
          Home
        </a>
        <a href="#speciality" onClick={showNavbar}>
          Speciality
        </a>
        <a href="#popular" onClick={showNavbar}>
          Popular
        </a>
        <a href="#gallery" onClick={showNavbar}>
          Gallery
        </a>
        {/* <a href="#review" onClick={showNavbar}>
          Review
        </a>
        <a href="#order" onClick={showNavbar}>
          Order
        </a> */}
      </nav>
    </header>
  );
};

export default Navbar;
