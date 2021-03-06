import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from './WeatherInfo'


export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // search for a city
    search();
  }

  function handleCityChange(event) {
     setCity(event.target.value);
  }

  function search() {
    const apiKey = 'e2d69af78cf1dc46ba05adc460cecccc';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    axios.get(apiUrl).then(handleResponse); 
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        {/* Search for city form */}
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className ="row">
            <div className ="col-sm-6 col-md-8">
              <input
                type="search"
                placeholder="Enter city"
                className="form-control w-100"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
              </div>
            <div className ="col-sm-6 col-md-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather}/>

      </div>
      );
  } else {
    search();
    return 'Loading...'
  }
}