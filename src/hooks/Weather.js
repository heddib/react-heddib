import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../sass/hooks/weather/index.scss";

import clear from '../assets/weather/sun.svg';
import clouds from '../assets/weather/cloud.svg';
import cloudy from '../assets/weather/cloudy.svg';
import rain from '../assets/weather/rain.svg';
import snow from '../assets/weather/snowflake.svg';

const API_KEY = '795018171436dd4d181b11709674f276';

function Weather() {
  const [data, setData] = useState({ name: 'Paris', main: { temp: 273.15 }, weather: [{ main: 'Clouds' }]});
  const [city, setCity] = useState('Paris');

   // Utilisation du useEffect
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&unit=metric&lang=fr`).then((response) => {
      console.log(response.data)
      setData(response.data)
    })
  }, [city]);

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      setCity(event.target.value)
    }
  }

  const displayWeatherIcon = () => {
    let icon;
    switch (data.weather[0].main) {
      case "Clouds": 
        icon = clouds;
        break;
      case "Clear": 
        icon = clear;
        break;
      case "Rain": 
        icon = rain;
        break;
      case "Snow": 
        icon = snow;
        break;
      default :
        icon = cloudy;
    }

    return icon;
  }

  return (
    <div className="footer-content">
      <input type="text" onKeyPress={ event => handleKeyPress(event) } />
      <div className="weather-section">
        <p>{ data.name } : { Math.round(data.main.temp - 273.15) }°C</p>
        <span className="weather-section--weather-icon">
          <img src={ displayWeatherIcon() } alt="" />
        </span>
      </div>
    </div>
  )
}

export default Weather;
