import React from "react";
const Search = (props) => {
  return (
    <input
      placeholder="Search for a country....."
      onChange={props.searchHandler}
    ></input>
  );
};
export default Search;
