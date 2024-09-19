export default function SearchBar() {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Character?" className="search-input" />
        <button className="btn search-btn">Search</button>
      </div>
    </>
  );
}
