import React from "react";
import { CONST_ZEROU } from "../../utilities/constants";

const SearchWidgetResultsList = ({ results = [], onItemClick }) => {
  const handleItemClick = (item) => () => {
    onItemClick(item);
  };

  if (results.length <= CONST_ZEROU) return null;

  return (
    <ul className="search-widget__results">
      {results.map((result) => (
        <li
          className="search-widget__results-item"
          key={result.id}
          onClick={handleItemClick(result.name)}
        >
          {result.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchWidgetResultsList;
