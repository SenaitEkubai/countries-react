import React from "react";
const Search = (props) => {
  return (
    <input placeholder="Search....." onChange={props.searchHandler}></input>
  );
};
export default Search;
