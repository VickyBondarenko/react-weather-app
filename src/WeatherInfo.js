import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row WeatherInfo">
      <div className="col-5">
        <ul>
          <li>
            <span className="city" id="city">
              {" "}
              {props.data.city}
            </span>
          </li>
          <li>
            <div className="current-weather" id="current-weather">
              {" "}
              {props.data.description}
            </div>
            <span className="conditions">
              Humidity: <span id="humidity"> {props.data.humidity}</span> %
              <br />
              Winds: <span id="wind"> {props.data.wind}</span> km/h
            </span>
          </li>
        </ul>
      </div>
      <div className="col-4 description">
        <ul>
          <li>
            <div className="day-temp">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="col-3  mt-3 icon">
        <WeatherIcon
          code={props.data.icon}
          alt={props.data.description}
          size={120}
        />
      </div>
    </div>
  );
}
