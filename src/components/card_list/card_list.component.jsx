import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { pokomons } = props;
  console.log(pokomons);
  return (
    <div className="card-list">
      {pokomons.map((pokomon) => {
        return <Card pokomon={pokomon} />;
      })}
    </div>
  );
};

export default CardList;
