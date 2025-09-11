import left_page from "../../../assets/left_page.png";
import Header from "../../Header";
import Item from "./Item";
import { faHtml5, faCss3Alt, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import tailwind from "../../../assets/icon/tailwind.svg";
import java from "../../../assets/icon/java.svg";

export default function SkillPage() {
  return(
    <div style={{backgroundImage: `url(${left_page})`}}
      className="h-full bg-no-repeat bg-center bg-cover" 
    >
      <Header title={"My Skills"} className={`decoration-fuchsia-500 underline-offset-7`}/>

      <div className="px-16">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <Item name={"HTML"} num={"01"} icon={faHtml5} color={"#ea6d2a"}/>
          <Item name={"CSS"} num={"02"} icon={faCss3Alt} color={"#42a4f5"}/>
          <Item name={"Tailwind CSS"} num={"03"} icon={tailwind}/>
          <Item name={"JavaScript"} num={"04"} icon={faJs} color={"#FFD43B"}/>
          <Item name={"React"} num={"05"} icon={faReact} color={"#61DBFB"}/>
          <Item name={"Java"} num={"06"} icon={java}/>
          <Item name={"Git & Github"} num={"07"} icon={faGithub}/>
        </ul>
      </div>
    </div>
  );
}