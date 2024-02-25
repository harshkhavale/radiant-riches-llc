"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar px-2 text-white bg-[#212731] py-2 flex justify-between md:justify-start md:gap-60 items-center">
      {!isNonMobileScreens &&
        (toggle ? (
          <IoCloseSharp className="text-2xl" />
        ) : (
          <RiMenuFill className="text-2xl" />
        ))}
      <p className="logo font-bold text-2xl">Radiant Riches LLC</p>
      <div className="search bg-transparent md:bg-white h-full  rounded-md md:border border-solid flex items-center">
        <CiSearch className="icon text-2xl md:text-black" />
        {isNonMobileScreens && (
          <input
            type="text"
            className="input w-64 bg-transparent flex-grow outline-none text-dark-color font-bold pl-2 p-2"
            placeholder="Search..."
          />
        )}
      </div>
      {isNonMobileScreens && (
        <div className="links">
          <ul className="flex gap-8">
            <li>
              <Link href={"/"} className=" text-base ">
                Categories
              </Link>
            </li>
            <li>
              <Link href={"/"} className=" text-base ">
                Website Builders
              </Link>
            </li>
            <li>
              <Link href={"/"} className=" text-base ">
                Todays deals
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
