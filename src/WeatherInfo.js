import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-4">
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
              <span className="temperature" id="temp">
                {props.data.temperature}
              </span>
              <span className="units">°C | °F</span>
            </div>
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="col-4">
        <span>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="icon-today mt-3"
            id="icon"
            weight="100"
          />
        </span>
      </div>
    </div>
  );
}
