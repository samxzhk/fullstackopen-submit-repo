import { useState, useEffect } from 'react'


import Search from './components/Search'
import countryService from './services/country';
import Weather from './components/Weather';
const CONVERSION_RATE =  2.237;

function App() {

  const [countrySearch, setCountrySearch] = useState('');

  const [countrySearchResult, setCountrySearchResult] = useState([]);

  const [countrySearchFilterResult, setCountrySearchFilterResult] = useState([]);

  const [weatherData, setWeatherData] = useState(null);

  const [message, setMessage] = useState(null);

  const [unique, setUnique] = useState(false);

  useEffect(() =>

  {

    countryService.getCountries()

    .then(data => setCountrySearchResult(data))

  }, [])

  

  const handleSearch = (event) =>

  {

    setCountrySearch(event.target.value);

    handleCountryResult();

  }

  const handleCountryResult = () =>

  {

    const countries = countrySearchResult.

    filter(country => country["name"]["common"].toLowerCase().includes(countrySearch.toLowerCase().trim()));

    const resultLength = countries.length;

    if(resultLength == 0)

    {

      setUnique(false);

      setMessage("no matches");

      setWeatherData(null);

    }

    else if (resultLength == 1)

    {

      setMessage(null);

      setUnique(true);

      setCountrySearchFilterResult(countries);

      countryService.getCountryWeather(countries[0]["capital"][0].toLowerCase()).then((data) => setWeatherData(data));

    }

    else if(resultLength > 10)

    {

      setMessage("Too many matches, specify another filter");

      setUnique(false);

      setWeatherData(null);

    }

    else if(resultLength > 1 && resultLength <= 10)

    {

      setUnique(false);

      setMessage(null);

      setCountrySearchFilterResult(countries);

      setWeatherData(null)

    }

  }

  
  

  return (

    <>

     <Search handleSearch={handleSearch} countryValue={countrySearch}/>

     {message != null ?

      <div>{message}</div> :

      unique == true ? countrySearchFilterResult.map(country =>

        {

         return<>

          <h2>{country["name"]["common"]}</h2>

          <div>{country["capital"].map(capital => <p>capital {capital}</p>)}</div>

          <p>Area {country["area"]}</p>

          <h3>Languages</h3>

          <ul>

             {

                Object.keys(country["languages"]).map(key => <li>{country["languages"][key]}</li>)

             }

          </ul>

          <img src={country["flags"]["png"]} alt={country["flags"]["alt"]}/>

          {weatherData !== null ? <Weather title={weatherData.location.name} temperature={weatherData.current.temp_c} icon={weatherData.current["condition"]["icon"]} speed={weatherData.current.wind_mph/CONVERSION_RATE}/> : ""}

          { console.log(weatherData)}

         </>

        }) : countrySearchFilterResult.map(country => <p>{country["name"]["common"]}</p>)}

    </>

  )

}

  

export default App
