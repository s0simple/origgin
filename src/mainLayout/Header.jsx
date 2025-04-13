import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  const links = [
    { name: "Features", path: "/Features" },
    { name: "How it works", path: "/howitworks" },
    { name: "Company", path: "/Company" },
  ];
  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="flex justify-between items-center py-3 md:hidden">
          <div className="text-2xl font-bold text-blue-600">
            <NavLink to="/" className="text-2xl ">
              <img src="/assets/logo.png" alt="" className="h-20 w-auto" />
            </NavLink>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between py-4">
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            <img src="/assets/logo.png" alt="" className="h-20 w-auto" />
          </NavLink>
          <div className="flex space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 transition-colors ${
                    isActive
                      ? "text-[#EF4472] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:text-[#EF4472]"
                      : "text-gray-700 hover:text-[#EF4472]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md ${
                    isActive
                      ? "bg-red-50 text-[#EF4472] font-medium"
                      : "text-gray-700 hover:bg-red-50"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
