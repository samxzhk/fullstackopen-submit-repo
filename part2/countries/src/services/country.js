import axios from "axios";

import.meta.env.VITE_APP_API_KEY

const ALL_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getCountries = () =>
{
    const request = axios.get(ALL_URL);
    return request.then((response) => response.data);
}
const getCountryWeather = (countryName) =>
{
    const request = axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_API_KEY}&q=${countryName}&aqi=no`);
    return request.then((response) => response.data);
}

export default {getCountries, getCountryWeather};