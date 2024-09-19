import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import Title from "./Title";
import List from "./List";

const URL =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=c5b21bcd83f9cb497db19d4a57fb1837";
let characterList = [];

export default function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      try {
        const data = await response.json();
        characterList = data.data.results;

        setCharacters(characterList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(characters);
  return (
    <>
      <SearchBar />
      <Title title="Marvel Universe Characters" />
      {characters && <List characters={characters} />}
    </>
  );
}
