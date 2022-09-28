import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DCDCDC]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "100px" }}></img>
      </div>
      <div>
        <ul>
          <li className="flex">Home</li>
          <li>Projects</li>
          <li>Experiences</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="hidden">
          <FaBars/>
      </div>
      <ul className="hidden">
          <li>Home</li>
          <li>Projects</li>
          <li>Experiences</li>
          <li>Contact</li>
        </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
