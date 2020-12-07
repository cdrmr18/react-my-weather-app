import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
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
                autoFcous="on"
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
          <h1>Berlin</h1>
          <ul>
            <li>
              <p>Dec 6 2020</p>
            </li>
            <li>
              <p>Cloudy</p>
            </li>
          </ul>
        </div>
  
        {/* List showing humidity and wind speed */}
        <div className="row">

          <div className="col-4">
            <div>
              <ul className="weather-description">
                <li>Humidity: </li>
                <li>Wind: </li>
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
            <div className="float-left">
              <span className="temp">{temperature}</span>
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