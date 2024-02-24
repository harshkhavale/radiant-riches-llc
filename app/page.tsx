import Image from "next/image";
import Navbar from "../components/Navbar";
import { webbuilders } from "../constant/index";
import WebBuilderCard from "@/components/WebBuilderCard";
import styles from "../app/page.module.scss";
export default function Home() {
  return (
    <div className="index">
      <Navbar />
      <div className={styles.main}>
        {webbuilders.map((data, index) => (
          <WebBuilderCard key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
}
