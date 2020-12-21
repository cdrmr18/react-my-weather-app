import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature'

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            {/* Weather overview showcasing city, date, and weather description */}
            <div className="row">
                <div className="weather-overview col-6">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li>
                        < FormattedDate date={props} />
                        </li>
                        <li>
                        {props.data.description[0].toUpperCase() + props.data.description.slice(1)}
                        </li>
                    </ul>
                </div>
                <div className="col-6 d-flex align-items-end pl-0">
                    <div>
                    <ul className="weather-description">
                        <li>Humidity: {props.data.humidity}</li>
                        <li>Wind: {props.data.wind}</li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* List showing humidity and wind speed */}
            <div className="row ">
                <div className="col-sm-12 temperature-container d-flex justify-content-center">
                    <div className="clearfix d-flex justify-content-between">
                        {/* weather icon */}
                        <div className="align-self-center pr-">
                            <WeatherIcon code={props.data.icon}/>  
                        </div>
                        {/* temperature and units */}
                        <div className="align-self-center mt-10">
                        <WeatherTemperature faren={props.data.temperature} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 