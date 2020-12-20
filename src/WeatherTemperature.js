import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('faren');
    
    if (unit === "faren") {
        function convertToCelcius() {
            // (32°F − 32) × 5/9 = 0°C
        }
        return (
        <div className="WeatherTemperature">
            <span className="temp">{props.faren}</span>
            <span className="unit"> °F | <a href="/" onClick={convertToCelcius}>°C</a></span>
        </div>
    );
    } else {

    }
    
}