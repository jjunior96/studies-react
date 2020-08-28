/* eslint-disable radix */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  const date = new Date();
  const monthName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const getWeather = async () => {
    const response = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: 'Aragarcas',
          appid: process.env.REACT_APP_KEY,
          lang: 'pt',
          units: 'metric',
        },
      }
    );
    setWeather(response.data);
  };

  useEffect(() => {
    // Pede autorização ao usuario para acessar a localização
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (!location) {
    return (
      <h1 id="no-acess">Você precisa habilitar a localização no browser.</h1>
    );
  }
  if (weather === false) {
    return <h1 id="loading">Carregando o clima...</h1>;
  }

  return (
    <>
      <div className="weather-wrapper">
        <h2>{weather.name}</h2>
        <h3>{weather.sys.country}</h3>
        <p>{monthName[date.getMonth()]}</p>
        <p className="date">
          {date.getDate()}/{date.getMonth()}/{date.getUTCFullYear()}
        </p>
        <ul>
          <li>Temperatura atual: {parseInt(weather.main.temp)}° </li>
          <li>Temperatura máxima: {parseInt(weather.main.temp_max)}° </li>
          <li>Temperatura mínima: {parseInt(weather.main.temp_min)}°</li>
          <li>Pressão: {parseInt(weather.main.pressure)}</li>
          <li>Umidade: {parseInt(weather.main.humidity)}%</li>
        </ul>
      </div>
    </>
  );
}

export default App;
