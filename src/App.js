import React from "react"
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p><a href="https://github.com/cdrmr18/react-my-weather-app">Open-source code</a> by Kathy Tavia</p>
        </footer>
      </div>
      </div>
  );
}

export default App;
