import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function Max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function Min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function Day(props) {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

    return `${days[day]}`;
  }
  return (
    <div className="card card-day">
      <div className="card-body">
        <h5 className="card-title">
          {" "}
          <strong>{Day(props)}</strong>
        </h5>
        <span className="icon-forcast">
          <WeatherIcon
            code={props.data.weather[0].icon}
            size={45}
            alt={props.data.weather[0].main}
          />
        </span>
        <p className="card-text">
          <strong>
            <span className="weather-forcast-tempersture-max">{Max()}</span>
            °C{" "}
          </strong>
          <span className="weather-forcast-tempersture-min"> {Min()}°C</span>
        </p>
      </div>
    </div>
  );
}
