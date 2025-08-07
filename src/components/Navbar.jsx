import React, { useState } from "react";
import { Link } from "react-scroll";

const navLinks = ["Home", "About", "Projects","Certifications", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-text">
<h1
  className="cursor-target text-2xl font-bold font-poppins cursor-pointer flex items-center gap-2"
  onClick={() => window.location.reload()}
>
  <span className="text-accent text-4xl">&lt;/&gt;</span>
  <span className="text-white">Bhuvanesh</span>
</h1>



        <div className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-target cursor-pointer hover:text-accent transition-all"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background px-6 pb-4 text-text">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-accent"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
