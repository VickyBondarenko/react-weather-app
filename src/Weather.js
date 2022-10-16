import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherDate, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handelRespons(respons) {
    console.log(respons.data);
    setWeatherData({
      ready: true,
      description: respons.data.weather[0].main,
      temperature: Math.round(respons.data.main.temp),
      humidity: Math.round(respons.data.main.humidity),
      wind: Math.round(respons.data.wind.speed),
      city: respons.data.name,
      date: new Date(respons.data.dt * 1000),
      day: "Saturday",
      iconUrl: `http://openweathermap.org/img/wn/${respons.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "f127cb208f2bd0106804f1fe6bc22525";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelRespons);
  }
  function handelSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handelCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weatherDate.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handelSubmit} className="enter-city" id="enter-city">
          <input
            type="search"
            id="city-input"
            placeholder="Enter city "
            autoFocus="on"
            onChange={handelCityChange}
          />
          <input type="submit" className="btn btn-primary" value="Change" />
          <button type="button" className="btn btn-info">
            Current
          </button>
        </form>
        <WeatherInfo data={weatherDate} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
