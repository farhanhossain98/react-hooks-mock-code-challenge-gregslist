import React from "react";
import Search from "./Search";

function Header({ setSearchInput }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchInput={setSearchInput} />
    </header>
  );
}

export default Header;
