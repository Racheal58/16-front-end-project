import React from "react";

import "./fourStyle.css";
import houseIcon from "./four-card-feature-section-master/images/icon-team-builder.svg";
import lightIcon from "./four-card-feature-section-master/images/icon-karma.svg";
import searchIcon from "./four-card-feature-section-master/images/icon-supervisor.svg";
import screenIcon from "./four-card-feature-section-master/images/icon-calculator.svg";

function FourIndex() {
  return (
    <div className="wrapperFour">
      <div className="containerFour">
        <h2 className="headerOne">Reliable, efficient delivery</h2>
        <h2 className="headerTwo">Powered by Technology</h2>
        <p className="headerText">
          Our Artifical Intelligence powered tools user millions of project data
          <br />
          points to ensure that your project is successful
        </p>
        <div className="team">
          <h3>Team Builder</h3>
          <p>
            Scans our talent network to create the
            <br />
            optimal team for your project
          </p>
          <img src={houseIcon} alt="" className="houseImage" />
        </div>
        <div className="karma">
          <h3>Karma</h3>
          <p>
            Regularly evaluates our talent to ensure
            <br />
            quality
          </p>
          <img src={lightIcon} alt="" className="houseImage" />
        </div>
        <div className="supervisor">
          <h3>Supervisor</h3>
          <p>
            Monitors activity to identify project
            <br />
            roadblocks
          </p>
          <img src={searchIcon} alt="" className="houseImage" />
        </div>
        <div className="calculator">
          <h3>Calculator</h3>
          <p>
            Uses data from past project to provide
            <br />
            better delivery estimates
          </p>
          <img src={screenIcon} alt="" className="houseImage" />
        </div>
      </div>
    </div>
  );
}

export default FourIndex;
