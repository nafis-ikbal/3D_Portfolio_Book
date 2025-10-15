import right_page from "../../../assets/right_page.png";
import Header from "../../Header";
import "./aboutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import instagram from "../../../assets/icon/instagram.png";

export default function AboutPage() {
  return(
    <div style={{backgroundImage: `url(${right_page})`}}
      className="h-full bg-no-repeat bg-center bg-cover" 
    >
      <Header title={"About Me"} className={`decoration-sky-500`}/>

      <div className="px-16">
        <p className="text-xl text-gray-700 font-montserrat tracking-wide">
          I’m a Junior Front-End Developer specializing in building modern web applications with React, HTML, CSS, and JavaScript. I focus on responsive design, clean code practices, and version control to deliver seamless user experiences. With strong communication skills and efficient time management.
        </p>
        <div className="mt-8">
          <p className="text-xl text-zinc-800 border-b-2 inline-block border-cyan-400 rounded-xs">
            My Social Links
          </p>
          <div className="icon flex my-5">
            <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#50abf2",}} />
            <FontAwesomeIcon icon={faSquareGithub} style={{color: "#212529",}}/>
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#3498e5",}} />
            <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "#0cac7c",}} />
            <img src={instagram} className="insta"/>
          </div>
        </div>

        <button className="btn btn-accent btn-lg mt-5 rounded-2xl">Hire Me</button>
      </div>
    </div>
  );
}