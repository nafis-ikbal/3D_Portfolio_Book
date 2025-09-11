import right_page from "../../../assets/right_page.png";
import Header from "../../Header";
import Box from "./Box";
import { faLaptopCode, faPuzzlePiece, faCodeBranch, faLink } from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {
  return(
    <div style={{backgroundImage: `url(${right_page})`}}
      className="h-full bg-no-repeat bg-center bg-cover" 
    >
      <Header title={"Services"} className={`decoration-emerald-500`}/>
      
      <div className="px-15 grid grid-cols-2 gap-3">
        <Box bgColor="bg-teal-400" icon={faLaptopCode} title={"Web App Development"}
          description={"Developing responsive, modern Web Applications with React, HTML, CSS, and JavaScript."}/>

        <Box bgColor="bg-orange-400" icon={faPuzzlePiece} title={"Custom Components Development"}
          description={"Building reusable and scalable components using React and Tailwind CSS to speed up development and maintain consistency."}/>

        <Box bgColor="bg-rose-400" icon={faLink} title={"API Integration (Frontend)"}
          description={"Connecting applications with APIs to display dynamic, real-time data and enhance interactivity."}/>

        <Box bgColor="bg-cyan-400" icon={faCodeBranch} title={"Version Control & Collaboration"}
          description={"Managing code efficiently with Git & GitHub, ensuring smooth collaboration, version tracking."}/>
      </div>
    </div>
  );
}