import React from "react";
import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/howitworks" },
    { name: "Company", path: "/company" },
  ];

  return (
    <nav className="">
      <div className="max-w-5xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="flex justify-between items-center py-3 md:py-4 md:hidden">
          <NavLink to="/">
            <img
              src="/assets/logo.png"
              alt="ORIGGIN Logo"
              className="h-16 w-auto"
            />
          </NavLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <NavLink to="/">
            <img
              src="/assets/logo.png"
              alt="ORIGGIN Logo"
              className="h-16 w-auto"
            />
          </NavLink>
          <div className="flex space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#EF4472] after:absolute after:bottom-1 after:left-2 after:right-2 after:h-0.5 after:bg-[#EF4472]"
                      : "text-gray-600 hover:text-[#EF4472]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white pb-2 space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm rounded-md ${
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
