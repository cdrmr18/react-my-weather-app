import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            {/* Weather overview showcasing city, date, and weather description */}
            <div className="weather-overview">
                <h1>{props.data.city}</h1>
                <ul>
                    <li>
                    < FormattedDate date={props} />
                    </li>
                    <li>
                    {props.data.description}
                    </li>
                </ul>
            </div>

            {/* List showing humidity and wind speed */}
            <div className="row">
                <div className="col-4">
                    <div>
                    <ul className="weather-description">
                        <li>Humidity: {props.data.humidity}</li>
                        <li>Wind: {props.data.wind}</li>
                    </ul>
                    </div>
                </div>
                <div className="col-8">
                    <div className="clearfix temperature-icon-display">
                    {/* weather icon */}
                    
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon}/>  
                        </div>
                        {/* temperature and units */}
                        <div className="float-right">
                            <span className="temp">{props.data.temperature}</span>
                            <span className="unit"> °F </span>  <span className="unit">| °C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 