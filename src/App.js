import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";
import Index from "./1-single-price-grid-component/Index";
import IndexMobile from "./1-single-price-grid-component/IndexMobile";
import FourIndex from "./2-four-card-feature-section/FourIndex";
import FourMobile from "./2-four-card-feature-section/FourMobile";

function App() {
  return (
    // <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* <div src={grid}></div> */}
      {/* <iframe src={grid}></iframe> */}
      <Route exact path="/grid-desktop" component={Index} />
      <Route exact path="/grid-mobile" component={IndexMobile} />
      <Route exact path="/four-desktop" component={FourIndex} />
      <Route exact path="/four-mobile" component={FourMobile} />
    </header>
    // </div>
  );
}

export default App;
