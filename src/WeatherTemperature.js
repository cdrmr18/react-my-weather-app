import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('faren');

    function showCelcius(event) {
        event.preventDefault();
        setUnit('celsius');
    }
    function showFaren(event) {
        event.preventDefault();
        setUnit('faren')
    }

    if (unit === "faren") {
        return (
        <div className="WeatherTemperature">
            <span className="temp">
                {props.faren}
            </span>
            <span className="unit"> 
                °F {" "} 
                <a href="/" onClick={showCelcius}>
                | °C
                </a>
            </span>
        </div>
    );
    } else {
        let celsius = Math.round(((props.faren) - 32) * 5/9);
        return (
            <div className="WeatherTemperature">
                <span className="temp">
                    {celsius}
                </span>
                <span className="unit"> 
                    <a href="/" onClick={showFaren}> 
                    °F {" "}
                    </a> 
                   | °C
                   </span>
            </div>
        );
    }  
}