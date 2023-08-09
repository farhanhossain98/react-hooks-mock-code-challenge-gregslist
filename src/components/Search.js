import React from "react";
import { useState } from "react";

function Search({ setSearchInput }) {
  const [search, setSearch] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    setSearchInput(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
