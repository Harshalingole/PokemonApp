import "./card.style.css";
const Card = ({ pokomon }) => {
  console.log(pokomon);
  const { id, name, hp, images, attacks } = pokomon;
  return (
    <div className="card-container" key={id}>
      <img src={images.large} alt="mon" />
      {/* Title */}
      <div className="card-title">
        <h2>{name}</h2>
        <p>
          HP: <span>{hp}</span>
        </p>
      </div>
      {/* Power */}
      <div className="power">
        <p>Attacks</p>
        <p>{attacks[0]["name"]}</p>
      </div>
      {/* Abilities */}
      <div className="power">
        <p>Abilities</p>
        <p>{"N/A"}</p>
      </div>
    </div>
  );
};

export default Card;
