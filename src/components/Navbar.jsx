import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md h-[70px]">
      <div className="max-w-screen mx-auto px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 mr-10">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="CINEC Logo" className="h-8 w-8" />
              <span className="ml-2 font-bold text-xl text-primary">
                CINEC Smart Navigator
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${isActive ? "text-accent-blue-dark" : "text-primary-black"} hover:text-accent-blue-light font-medium`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/map"
              className={({ isActive }) =>
                `${isActive ? "text-accent-blue-dark" : "text-primary-black"} hover:text-accent-blue-light font-medium`
              }
            >
              Map
            </NavLink>

            <NavLink
              to="/routes"
              className={({ isActive }) =>
                `${isActive ? "text-accent-blue-dark" : "text-primary-black"} hover:text-accent-blue-light font-medium`
              }
            >
              Routes
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-end">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search Location..."
                className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-cinecBlue focus:border-transparent"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5.65a7.5 7.5 0 010 10.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
