import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('faren');
    function convertToCelcius(event) {
            event.preventDefault();
            setUnit();
            // (32°F − 32) × 5/9 = 0°C
        }

    if (unit === "faren") {
        return (
        <div className="WeatherTemperature">
            <span className="temp">{props.faren}</span>
            <span className="unit"> °F | <a href="/" onClick={convertToCelcius}>°C</a></span>
        </div>
    );
    } else {
        return (
        <div className="WeatherTemperature">
            <span className="temp">{props.faren}</span>
            <span className="unit"> <a href="/" onClick={convertToCelcius}>°F </a> | °C</span>
        </div>
    }
    
}