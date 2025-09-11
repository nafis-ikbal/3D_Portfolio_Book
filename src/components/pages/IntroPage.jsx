import left_page from "../../assets/left_page.png";
import photo from "../../assets/photo.jpg"

export default function IntroPage() {
  return(
    <div style={{backgroundImage: `url(${left_page})`}}
      className="h-full bg-no-repeat bg-center bg-cover" 
    >
      <div className="h-[50%] flex justify-center items-center">
        <img src={photo} className="h-56 rounded-4xl drop-shadow-xl/50"/>
      </div>

      <div className="h-[50%] px-14">
        <p className="text-xl">Assalamu Alaikum...</p>
        <h1 className="text-6xl my-2 font-semibold font-epunda">I'm Nafis Ikbal</h1>
        <h3 className="text-2xl font-medium text-orange-500">"Junior Frontend Developer"</h3>
        <p className="text-xl mt-2 italic tracking-wide">
          I specialize in developing high-fidelity prototypes and modern web applications using HTML, CSS, JavaScript, and React - turning ideas into interactive, user-friendly experiences.
        </p>
      </div>
    </div>
  );
}