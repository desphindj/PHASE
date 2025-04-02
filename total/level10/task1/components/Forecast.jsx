import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return <p>Loading forecast data...</p>;
  }

  return (
    <div className="forecast-container">
      {forecast.slice(0, 7).map((day, index) => (
        <div key={index} className="forecast-day">
          <h3>{day.date}</h3>
          <p>{day.weather[0].description}</p>
          <p>Min Temp: {Math.round(day.temp.min)}°C</p>
          <p>Max Temp: {Math.round(day.temp.max)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
