import Image from "next/image";
import Navbar from "../components/Navbar";
import { webbuilders } from "../constant/index";
import WebBuilderCard from "@/components/WebBuilderCard";
import BreadCrumb from "@/components/BreadCrumb";
export default function Home() {
  return (
    <div className="index ">
      <Navbar />
      <div className="mx-60">
        <BreadCrumb />
        <div>
          {webbuilders.map((data, index) => (
            <WebBuilderCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
