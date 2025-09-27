import React, { useState, useEffect } from "react";
import logo from "../assets/Eduselogo.webp"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Services", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 
      ${scrolled ? "bg-blue-300/80 backdrop-blur-md shadow-md" : "bg-blue-400"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
       
        {/* Company Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="h-12 cursor-pointer hover:scale-105 transition-transform"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => alert(`${item} Clicked!`)}
                className="text-white hover:text-black transition"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
