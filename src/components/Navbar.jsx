import { useState } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/Portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md text-xl">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-4 md:py-6">
        {/* Left Section: Email + Mobile Toggle */}
        <div className="flex w-full md:w-auto items-center justify-between">
          {/* Email */}
          <a
            href="mailto:pranayagarwal1@gmail.com"
            className="hidden sm:flex items-center gap-3 text-xl font-bold bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <BiLogoGmail className="w-6 h-6 text-black" />
            <span className="text-black">pranayagarwal1@gmail.com</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="w-7 h-7" />
            ) : (
              <FaBars className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 font-medium mt-3 md:mt-0 px-6 py-3 border-2 border-black rounded-full">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2  font-medium transition text-center ${
                  isActive
                    ? "text-green-600"
                    : " text-black  hover:text-green-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `md:flex px-6 py-3 border-2 border-black rounded-full text-lg ${
                isActive ? "text-green-600 border-green-600 font-semibold" : ""
              } hover:text-green-600`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right Section: Schedule Call + LinkedIn */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-3 md:mt-0">
          <Link
            to="/contact"
            className="px-5 py-2 bg-[#C9972B] text-white font-semibold rounded-full text-lg hover:bg-[#b58624] focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            Schedule a Call
          </Link>

          <a
            href="https://www.linkedin.com/in/pranayagarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-3 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <FaLinkedin className="w-7 h-7 text-blue-600" />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-5 bg-gray-50 shadow-md text-lg">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-medium w-40 text-center transition ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-black hover:bg-green-100 hover:text-green-600"
                }`
              }
              onClick={handleLinkClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
