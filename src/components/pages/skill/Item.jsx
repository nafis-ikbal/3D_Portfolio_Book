import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Item(itemProps) {
  return(
    <>
      <li className="list-row pl-8 py-2">
        <div className="text-4xl font-thin opacity-30 tabular-nums">
          {itemProps.num}
        </div>

        <div className="flex items-center">
          {typeof itemProps.icon === 'string' ? (
            //for local image
            <img src={itemProps.icon} alt={itemProps.name} className="w-12 h-12"/>
          ) : (
            //for fontAwasomeIcon
            <FontAwesomeIcon icon={itemProps.icon} className="text-5xl"
              style={{color: itemProps.color}}/>
          )}
        </div>

        <div className="list-col-grow flex justify-start items-center">
          <div className="text-2xl font-semibold font-epunda tracking-widest">
            {itemProps.name}
          </div>
        </div>
        </li>
    </>
  );
}