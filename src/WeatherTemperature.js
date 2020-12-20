import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('faren');
<<<<<<< HEAD
    function convertToCelcius(event) {
            event.preventDefault();
            setUnit();
            // (32°F − 32) × 5/9 = 0°C
        }

    if (unit === "faren") {
=======
    
    if (unit === "faren") {
        function convertToCelcius() {
            // (32°F − 32) × 5/9 = 0°C
        }
>>>>>>> parent of d9027dd... Revert "Hid API Key"
        return (
        <div className="WeatherTemperature">
            <span className="temp">{props.faren}</span>
            <span className="unit"> °F | <a href="/" onClick={convertToCelcius}>°C</a></span>
        </div>
    );
    } else {
<<<<<<< HEAD
        return (
        <div className="WeatherTemperature">
            <span className="temp">{props.faren}</span>
            <span className="unit"> <a href="/" onClick={convertToCelcius}>°F </a> | °C</span>
        </div>
=======

>>>>>>> parent of d9027dd... Revert "Hid API Key"
    }
    
}