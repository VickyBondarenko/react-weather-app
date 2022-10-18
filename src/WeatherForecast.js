import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="weather-forcast" id="forcast">
      <div className="row">
        <div className="col-2">
          <div className="card card-day">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <strong>Sat</strong>
              </h5>
              <span className="icon-forcast">
                <WeatherIcon code="01d" size={60} alt="sun" />
              </span>
              <p className="card-text">
                <strong>
                  <span className="weather-forcast-tempersture-max">25</span>°C{" "}
                </strong>
                <span className="weather-forcast-tempersture-min"> 15°C</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
