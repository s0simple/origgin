import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="container mx-auto max-w-6xl font-nunito mt-10 mxx ">
      <header className="flex items-center  gap-30 ">
        <div className="logo gap-80 ">
          <div className="logo">
            <Link to={"/"}>
              <img src="/src/assets/logo.png" alt="" className="h-20 w-auto" />
            </Link>
          </div>
        </div>
        <nav className="">
          <div class="hidden lg:flex lg:gap-x-40 ">
            <Link
              to={"/Features"}
              className="text-sm/10 font-bold text-gray-900 hover:text-red-200"
            >
              Features
            </Link>

            <Link
              to={"/howitworks"}
              className="text-sm/6 font-bold text-gray-900  hover:text-red-200"
            >
              How it works
            </Link>

            <Link
              to={"/company"}
              className="text-sm/6 font-bold text-gray-900  hover:text-red-200"
            >
              Company
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
