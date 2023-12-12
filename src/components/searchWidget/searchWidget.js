import React from "react";
import SearchWidgetInput from "./searchWidgetInput";
import SearchWidgetResultsList from "./searchWidgetResultList";

const SearchWidget = () => {
  return (
    <div className="search-widget">
      <SearchWidgetInput />
      <SearchWidgetResultsList />
    </div>
  );
};

export default SearchWidget;
