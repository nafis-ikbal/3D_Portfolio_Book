import left_page from "../../../assets/left_page.png";
import Header from "../../Header";
import Card from "./Card";
import movie from "../../../assets/project_img/movie.png";
import tic_tac_toe from "../../../assets/project_img/tic_tac_toe.png";

export default function ProjectPage1() {
  return(
    <div style={{backgroundImage: `url(${left_page})`}}
      className="h-full bg-no-repeat bg-center bg-cover" 
    >
      <Header title={"Project Showcase"} className={`decoration-rose-400 underline-offset-7`}/>

      <div className="px-9 flex justify-center">
        <Card image={movie} title={"Movie Search App"} 
          description={"A web application that allows users to search for movies & tv series. Displays movie details such as title, poster, and release date with an interactive UI."}
        />
        <Card image={tic_tac_toe} title={"Tic-Tac-Toe Game"} 
          description={"A classic two-player game built with JavaScript and React. Includes game history, move tracking, and a clean design for smooth gameplay."}
        />
      </div>
    </div>
  );
}