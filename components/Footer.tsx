import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  bg-[#212731] text-white">
      <div className=" mx-auto p-4">
        <div className="flex md:mx-96 justify-between  p-6">
          <div>
            <h3 className="text-lg font-light mb-2">Categories</h3>
            <p className="font-light p-1">Web Builder</p>
            <p className="font-light p-1">Hosting</p>
            <p className="font-light p-1">Data Center</p>
            <p className="font-light p-1">Robotic Automation</p>
          </div>
          <div>
            <h3 className="text-lg font-light mb-2">Contact</h3>
            <p className="font-light p-1">Contact</p>
            <p className="font-light p-1">Privacy Policy</p>
            <p className="font-light p-1">Terms Of Service</p>
            <p className="font-light p-1">About</p>
          </div>
          <div className=" mt-16 flex">
            United States
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
