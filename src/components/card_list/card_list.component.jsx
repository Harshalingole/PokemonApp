import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { pokomons, display } = props;
  console.log(display);
  return (
    <div className="card-list">
      {display.map((pokomon) => {
        return <Card pokomon={pokomon} />;
      })}
    </div>
  );
};

export default CardList;
