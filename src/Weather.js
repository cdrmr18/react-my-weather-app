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
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
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

      <div className="row">
        <div className="col-4 weather-box">
          <div>
            <ul className="weather-alt-info">
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <div className="clearfix temp-box">
            <div className="float-left">
              <strong>{weatherData.temp}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
                <ReactAnimatedWeather
                    icon='CLEAR_DAY'
                    color='green'
                    size={50}
                    animate={true}
                />
          </div>
        </div>
      </div>

      <div className="row"></div>
    </div>
  );
}
