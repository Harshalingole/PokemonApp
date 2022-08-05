import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { display, fetchMoreData, totalResult, pokomon } = props;
  // console.log(display);
  console.log(display.length);

  return (
    <>
      <InfiniteScroll
        dataLength={display.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="card-list">
          {display.map((pokomon) => {
            return <Card pokomon={pokomon} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default CardList;
