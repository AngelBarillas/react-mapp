import { useState } from "react";
import List from "./List";
import Title from "./Title";

export default function SearchBar() {
  const [isSearch, setSearch] = useState([]);

  const deleteChild = function () {
    let e = document.querySelector("ul");
    e.innerHTML = "";
  };

  const handleSearch = async function () {
    const searchCharacter = document.getElementById("search-input").value;

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchCharacter}&apikey=c5b21bcd83f9cb497db19d4a57fb1837`
    );
    try {
      const apiSearchData = await response.json();
      const charData = await apiSearchData.data.results;
      console.log(charData);
      setSearch(charData);
    } catch (error) {
      console.log(error);
    }
  };

  if (isSearch.length === 0) {
    return (
      <>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Character?"
            id="search-input"
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="btn search-btn"
          >
            Search
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Character?"
            id="search-input"
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="btn search-btn"
          >
            Search
          </button>
        </div>
        <Title title={`Here you go!`} />
        <List characters={isSearch} />
      </>
    );
  }
}
