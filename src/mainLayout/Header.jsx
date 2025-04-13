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
    // <div className=" ">
    //   {/* <header className="flex items-center  gap-30 ">
    //     <div className="logo gap-80 ">
    //       <div className="logo">
    //         <Link to={"/"}>
    //           <img src="/src/assets/logo.png" alt="" className="h-20 w-auto" />
    //         </Link>
    //       </div>
    //     </div>
    //     <nav className="">
    //       <div class="hidden lg:flex lg:gap-x-40 ">
    //         <Link
    //           to={"/Features"}
    //           className="text- font-bold text-gray-900 hover:text-red-200"
    //         >
    //           Features
    //         </Link>

    //         <Link
    //           to={"/howitworks"}
    //           className="text-sm/6 font-bold text-gray-900  hover:text-red-200"
    //         >
    //           How it works
    //         </Link>

    //         <Link
    //           to={"/company"}
    //           className="text-sm/6 font-bold text-gray-900  hover:text-red-200"
    //         >
    //           Company
    //         </Link>
    //       </div>
    //     </nav>
    //   </header> */}
    //   <nav className="bg-white shadow-lg">
    //     <div className="max-w-6xl mx-auto px-4">
    //       {/* Mobile menu button */}
    //       <div className="flex justify-between items-center py-3 md:hidden">
    //         <div className="text-2xl ">
    //           <Link to={"/"}>
    //             <img
    //               src="/src/assets/logo.png"
    //               alt=""
    //               className="h-20 w-auto"
    //             />
    //           </Link>
    //         </div>
    //         <button
    //           onClick={() => setIsOpen(!isOpen)}
    //           className="text-gray-700 focus:outline-none"
    //         >
    //           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    //         </button>
    //       </div>

    //       {/* Desktop Nav */}
    //       <div className="hidden md:flex items-center justify-between py-4">
    //         <div className="text-2xl ">
    //           <Link to={"/"}>
    //             <img
    //               src="/src/assets/logo.png"
    //               alt=""
    //               className="h-20 w-auto"
    //             />
    //           </Link>
    //         </div>
    //         <div className="flex space-x-8">

    //          {links.map((link) => (
    //           <NavLink
    //             key={link.name}
    //             to={link.path}
    //             className={({ isActive }) =>
    //               `relative px-1 py-2 transition-colors ${
    //                 isActive
    //                   ? 'text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
    //                   : 'text-gray-700 hover:text-blue-600'
    //               }`
    //             }
    //           >
    //             {link.name}
    //           </NavLink>
    //         ))}

    //         </div>
    //       </div>

    //       {/* Mobile Nav (Slide-down) */}
    //       {isOpen && (
    //         <div className="md:hidden bg-white pb-4">
    //           {links.map((link) => (
    //             <a
    //               key={link.name}
    //               href={link.path}
    //               className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-md ${
    //                 activeLink === link.name
    //                   ? "bg-blue-50 text-blue-600 font-medium"
    //                   : ""
    //               }`}
    //               onClick={() => {
    //                 setActiveLink(link.name);
    //                 setIsOpen(false);
    //               }}
    //             >
    //               {link.name}
    //             </a>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </nav>
    // </div>

    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="flex justify-between items-center py-3 md:hidden">
          <div className="text-2xl font-bold text-blue-600">
            <NavLink to="/" className="text-2xl ">
              <img src="/src/assets/logo.png" alt="" className="h-20 w-auto" />
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
            <img src="/src/assets/logo.png" alt="" className="h-20 w-auto" />
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
