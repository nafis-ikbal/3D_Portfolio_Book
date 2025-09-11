import cover_img from "../../assets/cover_img.png";

export default function CoverPage() {
  return(
    <div style={{backgroundImage: `url(${cover_img})`}}
      className="h-full bg-no-repeat bg-center bg-cover flex justify-center items-center" 
    >
      <h1 className="text-5xl font-mono font-bold tracking-[2px] leading-[4.5rem]
        text-[rgba(0,0,0, 0.7)]"
      >
        Welcome to <br/> My Portfolio
      </h1>
    </div>
  );
}