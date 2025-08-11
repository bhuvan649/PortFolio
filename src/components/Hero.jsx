import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Folder from "./Folder";
import {SnapEats,Blogging,MusicCourse }from '../assets'
const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-background text-text flex items-center relative"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center">
        
        {/* LEFT SIDE */}
        <div className="max-w-2xl flex-1">
          <p className="text-accent text-lg font-medium mb-2">Hi, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-poppins leading-tight">
            Bhuvanesh<br />
            Kishor<br />
            <span className="text-accent">Vasule</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6">
            Building intelligent systems & smart solutions
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl text-sm sm:text-base">
            AI & Machine Learning developer passionate about creating intelligent solutions and automating complex systems with cutting-edge technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-target bg-accent text-background px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
            >
              View Projects <FaArrowRight />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-target border border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-accent hover:text-background transition-all cursor-pointer"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center text-gray-400 gap-2 text-sm">
            <FaMapMarkerAlt className="text-accent" />
            <span>Shirpur Maharashtra, India</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex flex-1 h-full justify-center items-center">
          <div className="relative flex justify-center items-center w-full h-full">
            <Folder size={2} color="#CA52CA" className="cursor-target custom-folder" 
              items={[
    <img src={MusicCourse}  className="w-full h-full object-cover rounded-[10px]" />,
    <img src={Blogging}  className="w-full h-full object-cover rounded-[10px]" />,
    <img src={SnapEats}  className="w-full h-full object-cover rounded-[10px]" />,
  ]}/>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-gray-500 text-xs sm:text-sm">
        Scroll Down
      </div>
    </section>
  );
};

export default Hero;
