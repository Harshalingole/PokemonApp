import "./App.css";
import CardList from "./components/card_list/card_list.component";
import SearchBox from "./components/search_box/search_box.component";
import { useEffect, useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setvalue]
  const [pokomon, setpokomon] = useState([]);
  const [filterpokomon, setFilterpokomon] = useState(pokomon);

  // console.log("render");

  useEffect(() => {
    try {
      fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10")
        .then((response) => response.json())
        .then((users) => setpokomon(users.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const newfilterPokomon = pokomon.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterpokomon(newfilterPokomon);
  }, [pokomon, searchField]);

  console.log(pokomon);
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
      <CardList pokomons={filterpokomon} />
    </div>
  );
};

export default App;
