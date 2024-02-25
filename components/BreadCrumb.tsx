import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const BreadCrumb: React.FC = () => {
  return (
    <div className="bread-crumb container mx-auto md:mt-12 mt-8 text-gray-700">
      <p className="text-3xl font-bold mb-5">Best Website builders in the US</p>
      <div className="hr w-full p-[1px] bg-gray-300"></div>
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoIosCheckmarkCircleOutline />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div className="flex items-center gap-2">
            <GoInfo />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="flex items-center">
          <p>Top Relevant</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="hr w-full p-[1px] bg-gray-300"></div>
      <div className="flex items-center mt-5">
        <ul className="flex w-full justify-between">
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Build Supplies</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
      </div>
      <div className="flex items-center mt-5">
        <ul className="flex gap-3">
          <li>Home</li>
          <li className="font-bold">{">"}</li>
          <li>Hosting for all</li>
          <li className="font-bold">{">"}</li>
          <li>Hosting</li>
          <li className="font-bold">{">"}</li>
          <li>Hosting 6</li>
          <li className="font-bold">{">"}</li>
          <li>Hosting 5</li>
          <li className="font-bold">{">"}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
