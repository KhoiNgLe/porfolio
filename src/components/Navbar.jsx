import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DCDCDC]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "100px" }}></img>
      </div>

      <ul className="hidden md:flex ">
        <li className="">Home</li>
        <li className="">Projects</li>
        <li className=" ">Experiences</li>
        <li className=" ">Contact</li>
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
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Experiences</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>



      <div className="hidden lg:flex fixed flex-col top-[35%] left-o">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#929497]">
            <a className="flex justify-between items-center w-full " href="/">Linkedin<FaLinkedin size={30}></FaLinkedin> </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#daa45c]">
            <a className="flex justify-between items-center w-full " href="/">Github<FaGithub size={30}></FaGithub> </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#b4a796]">
            <a className="flex justify-between items-center w-full " href="/">Email<HiOutlineMail size={30}></HiOutlineMail> </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#b2b356]">
            <a className="flex justify-between items-center w-full " href="/">Resume<BsFillPersonLinesFill size={30}></BsFillPersonLinesFill> </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
