import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1E1E1E] text-gray-300 pt-20 pb-10">
      {/* Call to Action */}
      <div className="max-w-6xl mx-auto text-center mb-20 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and challenges. Feel free to reach out if you'd like to collaborate.
        </p>
        <a
          href="mailto:vasulebhuvanesh@gmail.com"
          className="cursor-target inline-block bg-[#FF44EC] text-black font-semibold py-3 px-6 rounded-md hover:scale-105 transition-transform"
        >
          📧 Get in Touch
        </a>
      </div>

      <div className="border-t border-gray-700 pt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-4">
          {/* About */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3">Bhuvanesh Vasule</h3>
            <p className="mb-4 text-gray-400">
              A passionate developer specializing in artificial intelligence, machine learning, and full-stack development.
              Based in Shirpur Maharashtra, India.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-[#FF44EC]" />
              <a href="mailto:vasulebhuvanesh@gmail.com" className="cursor-target hover:underline">
                vasulebhuvanesh@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#FF44EC]" />
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="home" smooth duration={500} className="cursor-target cursor-pointer hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="projects" smooth duration={500} className="cursor-target cursor-pointer hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="certifications" smooth duration={500} className="cursor-target cursor-pointer hover:text-white">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="blog" smooth duration={500} className="cursor-target cursor-pointer hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3">Get in Touch</h3>
            <a
              href="mailto:vasulebhuvanesh@gmail.com"
              className="cursor-target inline-block bg-[#FF44EC] text-black font-semibold py-3 px-6 rounded-md hover:scale-105 transition-transform"
            >
              📧 Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Bhuvanesh Vasule. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
