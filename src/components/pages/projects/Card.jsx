export default function Card(cardProps) {
  return(
      <div className="card bg-base-100 w-96 shadow-sm mx-2 min-h-85">
        <figure>
          <img src={cardProps.image}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardProps.title}</h2>
          <p className="my-2">{cardProps.description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-dash btn-secondary shadow-lg">See Demo</button>
          </div>
        </div>
      </div>
  );
}