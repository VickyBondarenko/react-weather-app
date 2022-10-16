import React from "react";
import "./Weather.css";

export default function Weather() {
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
                Dnipro
              </span>
            </li>
            <li>
              <div className="current-weather" id="current-weather">
                {" "}
                Cloud
              </div>
              <span className="conditions">
                Humidity: <span id="humidity"> 20</span> %
                <br />
                Winds: <span id="wind"> 3</span> km/h
              </span>
            </li>
          </ul>
        </div>
        <div className="col-4 description">
          <ul>
            <li>
              <div className="day-temp">
                <span className="temperature" id="temp">
                  25
                </span>
                <span className="units">°C | °F</span>
              </div>
            </li>
            <li>
              <div className="day" id="dayTime">
                {" "}
                Saturday
              </div>
              <div className="date" id="date">
                15.10.2022
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <span>
            <img
              src={
                "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              }
              alt="sun"
              className="icon-today mt-3"
              id="icon"
              weight="100"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
