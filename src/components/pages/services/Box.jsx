import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Box(boxProps) {
  return(
    <div className={`${boxProps.bgColor} p-3 min-h-48 rounded-3xl shadow-xl`}>
      <div className="flex justify-center">
        <FontAwesomeIcon icon={boxProps.icon} beatFade className="text-5xl"/>
      </div>
      <h2 className="my-3 text-lg font-semibold">
        {boxProps.title}
      </h2>
      <p className="text-sm tracking-wider">
        {boxProps.description}
      </p>
    </div>
  );
}