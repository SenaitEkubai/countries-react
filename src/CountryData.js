import { useState, useEffect } from "react";
const CountryData = (props) => {
  const [oneCountry, setOneCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${props.countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setOneCountry((oneCountry) => data);
      })
      .catch((error) => console.log(error));
  }, [props.countryName]);

  // one country view frame

  function oneCountryView() {
    return (
      <div>
        <button className="back-button" onClick={props.backHandler}>
          <i className="fas fa-long-arrow-alt-left"> Back</i>
        </button>
        <div className="one-country">
          <div>
            <img src={oneCountry[0].flag} alt="flag"></img>
          </div>
          <div>
            <div className="country-info">
              <div>
                <div>
                  <h3>{oneCountry[0].name} </h3>
                  <p>
                    <strong>Native name: </strong>
                    {oneCountry[0].nativeName}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {oneCountry[0].capital}
                  </p>
                  <p>
                    <strong> Population: </strong>
                    {oneCountry[0].population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p>
                    <strong>Region: </strong> {oneCountry[0].region}
                  </p>
                  <p>
                    <strong>Sub-region: </strong>
                    {oneCountry[0].subregion}
                  </p>
                  <p>
                    <strong>Currency: </strong>
                    {oneCountry[0].currencies.map((Currency) => Currency.code)}
                  </p>
                </div>
                <div className="languages">
                  <p>
                    <strong>Top Level Domain </strong>
                    {oneCountry[0].topLevelDomain}
                  </p>
                  <span>
                    <strong>Languages: </strong>
                    {oneCountry[0].languages.map((language, index) => {
                      return <p key={index}>{language.name}</p>;
                    })}
                  </span>
                </div>
              </div>

              <div className="border-countries">
                <strong>Border countries: </strong>
                {oneCountry[0].borders.map(
                  (borderCountryWithAlphaCode, index) =>
                    props.countries
                      .filter(
                        (country) =>
                          country.alpha3Code === borderCountryWithAlphaCode
                      )
                      .map((borderCountry, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            props.borderCountryHandler(borderCountry.name)
                          }
                        >
                          {borderCountry.name}
                        </button>
                      ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (oneCountry) {
    return oneCountryView();
  } else {
    return <div>NO Country data</div>;
  }
};

export default CountryData;
