import { useState } from "react";
import SearchBar from "./SearchBar";
import Title from "./Title";

export default function Hero({ setCharacters }) {
  const appDesc =
    "Dive into the world of superheroes, villains, and epic stories with Marvelse—your ultimate app for exploring the Marvel universe! Search and learn about your favorite characters, from icons like Spider-Man to lesser-known heroes. Whether you're a lifelong fan or just starting, Marvelse brings the entire Marvel universe to your fingertips.";
  return (
    <div className="hero">
      <SearchBar setCharacters={setCharacters} />
      <Title title="Marvelse" />
      <p className="app-desc">{appDesc}</p>
    </div>
  );
}
