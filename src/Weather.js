import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from './FormattedDate';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  function handleResponse(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        {/* Search for city form */}
        <form className="mb-3">
          <div className ="row">
            <div className ="col-9">
              <input
                type="search"
                placeholder="Enter city"
                className="form-control w-100"
                autoFocus="on"
                autoComplete="off"
              />
              </div>
            <div className ="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
  
        {/* Weather overview showcasing city, date, and weather description */}
        <div className="weather-overview">
          <h1>{weather.city}</h1>
          <ul>
            <li>
              < FormattedDate date={weather.date} />
            </li>
            <li>
              {weather.description}
            </li>
          </ul>
        </div>
  
        {/* List showing humidity and wind speed */}
        <div className="row">

          <div className="col-4">
            <div>
              <ul className="weather-description">
                <li>Humidity: {weather.humidity}</li>
                <li>Wind: {weather.wind}</li>
              </ul>
            </div>
          </div>

          <div className="col-8">
            <div className="clearfix temperature-icon-display">
              {/* weather icon */}
              <div className="float-left">
                <ReactAnimatedWeather
                  icon= 'RAIN'
                  color= 'PINK'
                  size= {80}
                  animate= {true}
                />
              </div>
            </div>
              {/* temperature and units */}
            <div className="float-right">
              <span className="temp">{weather.temperature}</span>
              <span className="unit"> °F </span>  <span className="unit">| °C</span>
            </div >
            </div>
            </div>
      </div>
    );

  } else {
    let city = "Berlin"
    const apiKey = 'ce96567bcfe36200b8c50bb6f61e4a04';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...'
  }
}