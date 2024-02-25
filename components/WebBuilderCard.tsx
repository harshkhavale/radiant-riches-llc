import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import radient from "../public/radient.png";
const WebBuilderCard = ({ data, index }: any) => {
  const { image, tag, title, description, rating, highlight } = data;

  const renderStars = (starCount: number) => {
    const stars = [];
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-gold" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={stars.length} className="text-gold" />);
    }

    return stars;
  };

  return (
    <div className="relative m-4 p-4 shadow-md bg-white text-gray-700 flex md:flex-row flex-col items-center gap-8">
      <p className="absolute top-16 -left-5 border-gray-400 border-solid border h-8 w-8 flex justify-center items-center rounded-full">
        {index + 1}
      </p>
      <div>
        <Image
          src={radient}
          alt={title}
          className="w-auto h-40 md:w-[40vw] rounded-lg"
        />
        {tag && (
          <div className="flex items-center mb-4 gap-4 bg-orange-600 absolute top-0 start-0 rounded-r-3xl text-white font-bold p-2 text-base">
            {tag.icon}
            {tag.title}
          </div>
        )}
      </div>
      <div className="info">
        <p className="text-xl text-[#4B5665] font-bold mb-4">
          <strong className="text-black">{title} - </strong>
          {description}
        </p>
        <div className="text-base p-8">
          <p className="font-bold ">Main Highlight</p>
          <p>{highlight.description}</p>
          {highlight.main && (
            <>
              <div className="box bg-[#FFF4ED] m-4 p-4 rounded-3xl flex flex-col gap-2">
                {highlight.main.map((item: any, index: any) => {
                  return (
                    <div key={index} className="box-item flex gap-2">
                      <p className="bg-white p-1 text-blue-500">{item.index}</p>
                      <p> {item.quality}</p>
                    </div>
                  );
                })}
              </div>
              <p className=" font-semibold my-2">Why we love it?</p>
              <div className=" flex flex-col gap-2">
                {highlight.reason.map((item: any, index: any) => {
                  return (
                    <div key={index} className="box-item flex gap-2">
                      <div className=" text-[#0855A1] bg-[#EBF5FF] rounded-full p-1">
                        <IoMdCheckmark />
                      </div>
                      <p className=" text-[#4B5665]">{item}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <p className="text-blue-500 flex items-center">
          show more
          <IoIosArrowDown />
        </p>
      </div>

      <div className="flex m-4 flex-col justify-center items-center gap-8">
        <div className="bg-[#F3F9FF] p-2 rounded-2xl flex flex-col justify-center items-center gap-4">
          <span className="text-3xl text-[#0855A1]">{rating.score}</span>
          <span className="text-[#0855A1]">{rating.tag}</span>
          <div className="flex text-yellow-300 items-center">
            {renderStars(rating.star)}
          </div>
        </div>
        <button className="bg-blue-500 py-4 px-16 rounded-3xl text-white">
          View
        </button>
      </div>
    </div>
  );
};

export default WebBuilderCard;
