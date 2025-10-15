export default function Header({title, className}) {
  return(
    <div className="flex justify-center items-center h-[20%] pt-6">
      <h1 className={`${className} text-3xl text-gray-700 font-semibold tracking-widest font-ubuntu 
        underline decoration-wavy decoration-[3px] underline-offset-6`}
      >
        {title}
      </h1>
    </div>
  );
}