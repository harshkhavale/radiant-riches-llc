import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar bg-dark-color h-16 flex justify-center items-center">
      <p className="logo font-bold">Radient Riches LLC</p>
      <div className="search bg-light-color w-64 h-10 rounded-md border border-solid flex items-center">
        <CiSearch className="icon text-dark-color text-lg ml-2" />
        <input
          type="text"
          className="input bg-light-color flex-grow outline-none text-dark-color font-bold pl-2"
          placeholder="Search..."
        />
      </div>
      <div className="links">
        <ul className="flex gap-8">
          <li>
            <a
              href="/"
              className="text-light-color text-base font-bold hover:text-primary-color"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-light-color text-base font-bold hover:text-primary-color"
            >
              Website Builders
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-light-color text-base font-bold hover:text-primary-color"
            >
              Today's deals
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
