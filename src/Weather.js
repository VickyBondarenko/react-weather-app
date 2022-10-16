import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherDate, setWeatherData] = useState({});
  function handelRespons(respons) {
    console.log(respons.data);
    setWeatherData({
      ready: true,
      description: respons.data.weather[0].main,
      temperature: Math.round(respons.data.main.temp),
      humidity: Math.round(respons.data.main.humidity),
      wind: Math.round(respons.data.wind.speed),
      city: respons.data.name,
      date: "16.10.2022",
      day: "Saturday",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }
  if (weatherDate.ready) {
    return (
      <div className="Weather">
        <form className="enter-city" id="enter-city">
          <input
            type="search"
            id="city-input"
            placeholder="Enter city "
            autoFocus="on"
          />
          <input type="submit" className="btn btn-primary" value="Change" />
          <button type="button" className="btn btn-info">
            Current
          </button>
        </form>
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <span className="city" id="city">
                  {" "}
                  {weatherDate.city}
                </span>
              </li>
              <li>
                <div className="current-weather" id="current-weather">
                  {" "}
                  {weatherDate.description}
                </div>
                <span className="conditions">
                  Humidity: <span id="humidity"> {weatherDate.humidity}</span> %
                  <br />
                  Winds: <span id="wind"> {weatherDate.wind}</span> km/h
                </span>
              </li>
            </ul>
          </div>
          <div className="col-4 description">
            <ul>
              <li>
                <div className="day-temp">
                  <span className="temperature" id="temp">
                    {weatherDate.temperature}
                  </span>
                  <span className="units">°C | °F</span>
                </div>
              </li>
              <li>
                <div className="day" id="dayTime">
                  {" "}
                  {weatherDate.day}
                </div>
                <div className="date" id="date">
                  {weatherDate.date}
                </div>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <span>
              <img
                src={weatherDate.iconUrl}
                alt={weatherDate.description}
                className="icon-today mt-3"
                id="icon"
                weight="100"
              />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f127cb208f2bd0106804f1fe6bc22525";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelRespons);
    return "Loading...";
  }
}
