import right_page from "../../../assets/right_page.png";
import Header from "../../Header";
import Card from "./Card";
import currency from "../../../assets/project_img/currency.png";
import simonGame from "../../../assets/project_img/simonGame.png";

export default function ProjectPage2() {
  return(
    <div style={{backgroundImage: `url(${right_page})`}}
      className="h-full bg-no-repeat bg-center bg-cover" 
    >
      <Header title={"Project Showcase"} className={`decoration-rose-400 underline-offset-7`}/>
      
      <div className="px-10 flex justify-center">
        <Card image={currency} title={"Currency Converter"} 
          description={"A simple and efficient tool to convert between multiple currencies using API. Designed with an intuitive interface for quick calculations."}
        />
        <Card image={simonGame} title={"Simon Says Game"} 
          description={"An interactive memory game that challenges users to repeat color sequences. Built with JavaScript for engaging gameplay."}
        />
      </div>
    </div>
  );
}