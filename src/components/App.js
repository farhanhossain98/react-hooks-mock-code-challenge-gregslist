import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState } from "react";


function App() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="app">
      <Header setSearchInput={setSearchInput} />
      <ListingsContainer searchInput={searchInput} />
    </div>
  );
}

export default App;
