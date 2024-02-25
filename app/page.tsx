import Image from "next/image";
import Navbar from "../components/Navbar";
import { webbuilders, deals } from "../constant/index";
import WebBuilderCard from "@/components/WebBuilderCard";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import DealsCard from "@/components/DealsCard";

export default function Home() {
  return (
    <div className="index w-screen overflow-x-hidden text-xs md:text-base">
      <Navbar />
      <div className="md:px-60 px-2">
        <BreadCrumb />
        <div>
          {webbuilders.map((data, index) => (
            <WebBuilderCard key={index} data={data} index={index} />
          ))}
        </div>
        <p className=" font-semibold text-3xl py-4">
          Related deals you might like for
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {deals.map((card, index) => (
            <DealsCard key={index} card={card} index={index} />
          ))}
        </div>
        <div className="flex justify-between items-center  p-10">
          <p className=" font-bold text-xl md:text-3xl">
            Sign up and get exclusive special deals
          </p>
          <button className="bg-blue-500 text-white text-nowrap p-4 rounded-2xl">
            Sign up
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
