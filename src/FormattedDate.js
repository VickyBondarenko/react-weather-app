import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <div className="day" id="dayTime">
        {day}
      </div>
      <div className="date" id="date">
        {hours}:{minutes}
      </div>
    </div>
  );
}
