import React from "react";
import "../styles/navbar.scss";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">Radient Riches LLC</p>
      <div className="search">
        <CiSearch className="icon" />

        <input type="text" className="input" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">Website Builders</a>
          </li>
          <li>
            <a href="/"> Today's deals</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
