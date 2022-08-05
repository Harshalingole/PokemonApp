import "./App.css";
import CardList from "./components/card_list/card_list.component";
import SearchBox from "./components/search_box/search_box.component";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setvalue]
  const [pokomon, setpokomon] = useState([]);
  const [filterpokomon, setFilterpokomon] = useState(pokomon);
  // Pagination

  // console.log("render");

  useEffect(() => {
    try {
      fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=500")
        .then((response) => response.json())
        .then((users) => setpokomon(users.data));
      setpokomon((prev) => prev.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  }, []);
  // Pagination
  const [pageNumber, setpageNumber] = useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber + userPerPage;
  // 40 + 10
  const displayPokomon = pokomon.slice(
    pagesVisited,
    pagesVisited + userPerPage
  );
  const pageCount = Math.ceil(pokomon.length / userPerPage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  useEffect(() => {
    const newfilterPokomon = pokomon.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterpokomon(newfilterPokomon);
  }, [pokomon, searchField]);

  // console.log(pokomon);
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <header className="App_Header">
        <h1 style={{ color: "blue" }}>TinkersIO : API to fetch Pokèmon data</h1>
      </header>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Pokemon"
      />
      {/* <div className="pagination"></div> */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBTn"}
        previousLinkClassName={"pg-prev"}
        nextClassName={"pg-next"}
        activeClassName={"pg-active"}
      />
      <CardList pokomons={filterpokomon} display={displayPokomon} />
    </div>
  );
};

export default App;
