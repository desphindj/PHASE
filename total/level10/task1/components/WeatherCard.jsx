import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <p>Loading weather data...</p>;  
  }

  return (
    <div className="weather-card">
      <h2>{weather.name || 'Unknown Location'}</h2>  
      <p>{weather.weather ? weather.weather[0].description : 'No description available'}</p>
      <p>Temperature: {Math.round(weather.main.temp)}°C</p>
      <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
