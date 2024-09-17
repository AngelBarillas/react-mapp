import { useState } from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import Title from "./Title";
import List from "./List";

function App() {
  const res =
    "https://gateway.marvel.com:443/v1/public/characters?apikey=c5b21bcd83f9cb497db19d4a57fb1837"
      .then((res) => res.json())
      .then(console.log(res));
  return (
    <>
      <SearchBar />
      <Title />
      <List />
    </>
  );
}

export default App;
