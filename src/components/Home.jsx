import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#659dbd]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white ]">
          Khoi Le{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Front-End Developer
        </h2>
        <p className="py-4 max-width-[700px] text-white">
          I am a front-end developer with passion for creating an interactive,
          useful, and delightful user experience.
        </p>
        <div>
          <button className="border-2 px-6 py-3 my-2 flex items-center text-white hover:bg-[#c8d8e4]">
            <Link to="project" smooth={true} duration={500}>
              View Project{" "}
            </Link>
            <HiArrowNarrowRight className="ml-3 flex"></HiArrowNarrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
