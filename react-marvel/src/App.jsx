import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Title from "./Title";
import List from "./List";

const App = function () {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleMoreClick = function () {
    setOffset(characters.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?offset=${offset}&apikey=c5b21bcd83f9cb497db19d4a57fb1837`
      );
      try {
        const apiData = await response.json();
        if (offset > 0) {
          const apiChar = characters.concat(apiData.data.results);
          setCharacters(apiChar);
          console.log(apiChar);
        } else {
          const apiChar = apiData.data.results;
          setCharacters(apiChar);
          console.log(offset);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [offset]);

  return (
    <>
      <SearchBar setCharacters={setCharacters} />
      <Title title="Marvel Universe Characters" />
      {characters && <List characters={characters} />}
      <button onClick={handleMoreClick} className="btn more-btn">
        See more
      </button>
    </>
  );
};

export default App;
