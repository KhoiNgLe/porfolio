import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";
import ReactImg from "../assets/react.png";
import Python from "../assets/python.png";
import Javascript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#659dbd] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4">Skills</p>
          <p className="py-4 ">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div>
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div>
            <img className="w-20 mx-auto" src={Javascript} alt="HTML icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div>
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div>
            <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
            <p className="my-4">Github</p>
          </div>
          <div>
            <img className="w-20 mx-auto" src={Firebase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div>
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
