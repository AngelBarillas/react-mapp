import { useState } from "react";

export default function SearchBar({ setCharacters }) {
  const [isSearch, setSearch] = useState("");

  const handleSearch = async function () {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${isSearch}&apikey=c5b21bcd83f9cb497db19d4a57fb1837`
    );
    try {
      const apiSearchData = await response.json();
      const charData = await apiSearchData.data.results;
      console.log(charData);
      setCharacters(charData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          required=""
          className="anton-sc-regular search-input"
          type="text"
          placeholder="Look one up!"
          id="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="anton-sc-regular neu-button"
        >
          Search
        </button>
      </div>
    </>
  );
}
