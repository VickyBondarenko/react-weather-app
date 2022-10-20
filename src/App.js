import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Dnipro" />
        <footer>
          This progect was coded by Vicky Bondarenko and is{" "}
          <a
            href="https://github.com/VickyBondarenko/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
