import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import './styles.css';

const App = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_OPENWEATHER_API_KEY';
  const GEODB_API_KEY = 'YOUR_GEODB_API_KEY';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const geoResponse = await axios.get(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
          {
            params: { namePrefix: city, limit: 1 },
            headers: {
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
              'x-rapidapi-key': GEODB_API_KEY,
            },
          }
        );

        const { latitude, longitude } = geoResponse.data.data[0];

        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall`,
          {
            params: {
              lat: latitude,
              lon: longitude,
              exclude: 'minutely,hourly',
              units: 'metric',
              appid: API_KEY,
            },
          }
        );

        setWeather(weatherResponse.data.current);
        setForecast(weatherResponse.data.daily);
        setError('');
      } catch (err) {
        setError('Failed to fetch weather data.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar setCity={setCity} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <WeatherCard weather={weather} />
          <Forecast forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default App;
