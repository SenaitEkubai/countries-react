import React, { useState, useEffect } from "react";
import Search from "./Search";
import FilterByRegion from "./FilterByRegion";
import CountryData from "./CountryData";

function Allcountries(props) {
  const [countries, setCountries] = useState();
  const [searchTerm, setSearchTerm] = useState(null);
  const [region, setRegion] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState(null);
  // search input handler
  function searchHandler(event) {
    setSearchTerm((searchTerm) => event.target.value);
  }
  // select menu handler
  function selectHandler(event) {
    setRegion((region) => event.target.value);
  }

  // when country card clicked function

  // country card frame  function
  function CountryCardFrame({ country }, index) {
    return (
      <button
        className="card"
        key={index}
        onClick={(event) => {
          setIsClicked(true);
          setName((name) => country.name);
        }}
      >
        <img src={country.flag} alt="flags"></img>
        <h3>{country.name}</h3>
        <p>
          Population:
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </button>
    );
  }
  // use effect
  useEffect(() => {
    fetch(` https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries((countries) => data);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isClicked) {
    return <CountryData countryName={name} />;
  } else if (countries) {
    if (
      region === "Africa" ||
      region === "Asia" ||
      region === "Europe" ||
      region === "America" ||
      region === "Oceania"
    ) {
      return (
        <div className="">
          <div className="select-input-container">
            <Search searchHandler={searchHandler} />
            <FilterByRegion selectHandler={selectHandler} />
          </div>
          <div className="allCountries-container">
            {searchTerm
              ? searchTerm
                ? countries
                    .filter(
                      (item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        item.capital
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    )
                    .map((country, index) =>
                      CountryCardFrame({ country }, index)
                    )
                : countries.map((country, index) =>
                    CountryCardFrame({ country }, index)
                  )
              : countries
                  .filter((item) =>
                    item.region.toLowerCase().includes(region.toLowerCase())
                  )
                  .map((country, index) =>
                    CountryCardFrame({ country }, index)
                  )}
          </div>
        </div>
      );
    } else {
      countries.map((country, index) => CountryCardFrame({ country }, index));
    }
    return (
      <div>
        <div className="select-input-container">
          <Search searchHandler={searchHandler} />
          <FilterByRegion selectHandler={selectHandler} />
        </div>

        <div className="allCountries-container">
          {searchTerm
            ? countries
                .filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.capital
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                )
                .map((country, index) => CountryCardFrame({ country }, index))
            : countries.map((country, index) =>
                CountryCardFrame({ country }, index)
              )}
        </div>
      </div>
    );
  } else {
    return <div>Loading......</div>;
  }
}

export default Allcountries;
