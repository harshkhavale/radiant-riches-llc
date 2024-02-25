import React from "react";

interface HorizontalCardProps {
  card: {
    image: string;
    title: string;
    description: string;
    price: string;
    discount: string;
  };
  index: number;
}

const DealsCard: React.FC<HorizontalCardProps> = ({ card, index }) => {
  const { image, title, description, price, discount } = card;

  return (
    <div className=" rounded-md shadow-md p-4 bg-white">
      <div className=" flex-1 mb-4 flex items-center justify-center">
        <img src={image} alt={title} className=" w-48  h-42 rounded-md " />
      </div>

      <div className=" ml-4 flex flex-col justify-center">
        <div className="text-[#074786] flex gap-5  rounded-md ">
          <p className="bg-[#F2F4F7]"> {discount}</p>
          <p className=" bg-[#F2F4F7]  ">Limited time</p>
        </div>

        <h2 className="text-lg font-bold mb-2 flex items-center justify-center">
          {title}
        </h2>
        <p className="text-[#626E79] text-base mb-2">{description}</p>

        <div className="flex items-center justify-between m-4 ">
          <div className="text-xl font-bold">{price}</div>
          <div className="text-sm font-bold text-[#9FA9B3]">$49.96</div>

          <div className="text-red-500">{discount}</div>
        </div>

        <button className="bg-blue-500 text-white w-full py-4 rounded-2xl">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default DealsCard;
