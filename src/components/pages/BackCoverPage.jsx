import back_cover_img from "../../assets/back_cover_img.png";

export default function BackCoverPage() {
  return(
    <div style={{backgroundImage: `url(${back_cover_img})`}}
      className="h-full bg-no-repeat bg-center bg-cover flex justify-center items-center" 
    >
    </div>
  );
}