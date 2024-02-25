import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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
    <div className="relative p-8 w-4/5 bg-white text-gray-700 flex items-center gap-8">
      <p className="absolute top-16 left-[-50px] border-gray-400 border-solid border p-4 rounded-full">
        {index + 1}
      </p>
      <div>
        <img src={image} alt={title} className="w-36 h-28 rounded-lg" />
        {tag && (
          <div className="flex items-center mb-4 gap-4 bg-darkorange absolute top-[-10px] left-[-10px] rounded-r-lg text-white font-bold p-2 text-base">
            {tag.icon}
            {tag.title}
          </div>
        )}
      </div>
      <div className="info">
        <p className="text-xl font-bold mb-4">
          <strong>{title} - </strong>
          {description}
        </p>
        <div className="text-base p-8">
          <p className="font-bold pb-4">Main Highlight</p>
          <p>{highlight.description}</p>
          {highlight.main && (
            <>
              <div className="box">
                {highlight.main.map((item: any, index: any) => {
                  return (
                    <div key={index} className="box-item">
                      {item.index}
                      {item.quality}
                    </div>
                  );
                })}
              </div>
              <p>Why we love it?</p>
              <div>
                {highlight.reason.map((item: any, index: any) => {
                  return (
                    <div key={index} className="box-item">
                      {item}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <p className="text-dodgerblue flex items-center">
          show more
          <IoIosArrowDown />
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <span className="text-2xl">{rating.score}</span>
        <span>{rating.tag}</span>
        <div className="flex items-center">{renderStars(rating.star)}</div>
        <button className="bg-dodgerblue py-4 px-16 text-white rounded-lg">
          View
        </button>
      </div>
    </div>
  );
};

export default WebBuilderCard;
