import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between mt-2 items-center bg-main text-white py-4 px-6">
        <div className="flex items-center">
          <div className="flex items-center lg:ml-16">
            <img src={Logo} alt="Logo" className="w-12 h-auto" />
          </div>
          <ul className="hidden md:flex mx-auto md:ml-24 lg:ml-40 space-x-6 justify-center">
            <li>
              <Link to="/" className="text-black hover:text-orange">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="text-black hover:text-orange">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-black hover:text-orange">
                Product
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-black hover:text-orange">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:flex items-center relative">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search"
            className="border border-second rounded-3xl px-4 py-2 pr-12 text-black"
          />
          {/* Icon search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 17.5l2.5 2.5"
            />
          </svg>
        </div>
        <div className="block md:hidden">
          {/* Toggle icon for mobile */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </nav>
      <hr className="border-b border-black border-opacity-20" />
    </div>
  );
};

export default Navbar;