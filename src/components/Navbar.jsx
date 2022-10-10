import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "100px" }}></img>
      </div>

      <ul className="hidden md:flex ">
        <li className="text-[#659dbd]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#659dbd]">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="text-[#659dbd] ">
          {" "}
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className=" text-[#659dbd]">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#DCDCDC] flex flex-col justify-center items-center"
        }
      >
        <li  className="py-6 text-4xl text-[#659dbd]"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
        <li className="py-6 text-4xl text-[#659dbd]"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skill
          </Link></li>
        <li className="py-6 text-4xl text-[#659dbd]"><Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Project
          </Link></li>
        <li className="py-6 text-4xl text-[#659dbd]"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-o">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#8d8741]">
            <a className="flex justify-between items-center w-full " href="https://drive.google.com/file/d/1TqP2SdARd8Fv74U2xqG5-L4CdV7VIcGt/view?usp=sharing">
              Resume<BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#fbeec1]">
            <a className="flex justify-between items-center w-full " href="www.linkedin.com/in/khoinguyenle05">
              Linkedin<FaLinkedin size={30}></FaLinkedin>{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#bc986a]">
            <a className="flex justify-between items-center w-full " href="https://github.com/KhoiNgLe">
              Github<FaGithub size={30}></FaGithub>{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#daad86]">
            <a className="flex justify-between items-center w-full " href="mailto: khoi.le3005@gmail.com">
              Email<HiOutlineMail size={30}></HiOutlineMail>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
