import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    date: "Nov 21, 2020 9:00",
    temp: 70,
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 20,
    wind: 30
  };
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <p>{weatherData.date}</p>
          </li>
          <li>
            <p>{weatherData.description}</p>
          </li>
        </ul>
      </div>

      {/* List showing humidity and wind speed */}
      <div className="row">
        <div className="col-6">
          <div>
            <ul className="weather-description">
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
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
            {/* temperature and units */}
            <div className="float-left">
              <span className="temp">{weatherData.temp}</span>
              <span className="unit"> °C</span> | <span className="unit"> °F</span>
            </div >
          </div>
        </div>
      </div>  

    </div>
  );
}