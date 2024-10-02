import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Title from "./Title";
import List from "./List";
import Hero from "./assets/Hero";
import { fetch_status } from "./assets/fetchstatus";

const App = function () {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);
  const [status, setStatus] = useState(fetch_status.idle);

  const handleMoreClick = function () {
    setOffset(characters.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (offset === 0) {
        setStatus(fetch_status.loading);
      }
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?offset=${offset}&apikey=c5b21bcd83f9cb497db19d4a57fb1837`
      );

      try {
        const apiData = await response.json();
        if (offset > 0) {
          const apiChar = characters.concat(apiData.data.results);
          setCharacters(apiChar);
          setStatus(fetch_status.success);
          console.log(apiChar);
        } else {
          const apiChar = apiData.data.results;
          setCharacters(apiChar);
          setStatus(fetch_status.success);
          console.log(offset);
        }
      } catch (error) {
        setStatus(fetch_status.error);
        console.log(error);
      }
    };
    fetchData();
  }, [offset]);

  if (status === fetch_status.loading) return <div className="loader"></div>;

  if (status === fetch_status.success) {
    return (
      <>
        <Hero setCharacters={setCharacters} />
        {characters && <List characters={characters} />}
        <button onClick={handleMoreClick} className=" more-btn">
          See more
        </button>
      </>
    );
  }
};
export default App;
