import React from "react";
const FilterByRegion = (prop) => {
  return (
    <select onChange={prop.selectHandler}>
      <option>Select by region</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  );
};
export default FilterByRegion;
