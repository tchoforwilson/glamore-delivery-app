import React, { useState } from "react";
import { Icon } from "../common";

const SearchWidgetInput = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    console.log(query);
  };

  return (
    <form className="search-widget__form">
      <input
        type="text"
        name="name"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
      <Icon className="search-widget__icon" onClick={handleClick} />
    </form>
  );
};

export default SearchWidgetInput;
