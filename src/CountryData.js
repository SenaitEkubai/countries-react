import { useState, useEffect } from "react";

const CountryData = (props) => {
  const [oneCountry, setOneCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${props.countryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOneCountry((oneCountry) => data);
      })
      .catch((error) => console.log(error));
  }, [props.countryName]);
  if (oneCountry) {
    return (
      <div className="one-country">
        <div>
          <img src={oneCountry[0].flag} alt="flag"></img>
        </div>
        <div>
          <div className="country-info">
            <div>
              <div>
                <h3>{oneCountry[0].name} </h3>
                <p>Native name: {oneCountry[0].nativeName}</p>
                <p>Capital: {oneCountry[0].capital}</p>
                <p>Population: {oneCountry[0].population}</p>
                <p>Region: {oneCountry[0].region}</p>
                <p>Sub-region: {oneCountry[0].subregion}</p>
                <p>Currency: {oneCountry[0].currency}</p>
              </div>
              <div className="languages">
                <p>Top Level Domain: {oneCountry[0].topLevelDomain}</p>
                languages:
                <ul>
                  {oneCountry[0].languages.map((language, index) => {
                    return <li key={index}>{language.name}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="border-countries">
              Border countries:{" "}
              {oneCountry[0].borders.map((borderCountry, index) => (
                <button key={index}>{borderCountry}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>NO Customer data</div>;
  }
};
export default CountryData;
