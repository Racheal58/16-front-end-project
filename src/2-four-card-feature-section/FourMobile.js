import React from "react";

import "./fourMobile.css";
import houseIcon from "./four-card-feature-section-master/images/icon-team-builder.svg";
import lightIcon from "./four-card-feature-section-master/images/icon-karma.svg";
import searchIcon from "./four-card-feature-section-master/images/icon-supervisor.svg";
import screenIcon from "./four-card-feature-section-master/images/icon-calculator.svg";

function FourMobile() {
  return (
    <div className="wrapperFourMobile">
      <div className="containerFourMobile">
        <h2 className="headerOneMobile">Reliable, efficient delivery</h2>
        <h2 className="headerTwoMobile">Powered by Technology</h2>
        <p className="headerTextMobile" style={{ color: "#000" }}>
          Our Artifical Intelligence powered tools
          <br />
          user millions of project data points to
          <br />
          ensure that your project is successful
        </p>
        <div className="teamMobile">
          <h3>Team Builder</h3>
          <p>
            Scans our talent network to create the
            <br />
            optimal team for your project
          </p>
          <img src={houseIcon} alt="" className="houseImageMobile" />
        </div>
        <div className="karmaMobile">
          <h3>Karma</h3>
          <p>
            Regularly evaluates our talent to
            <br />
            ensure quality
          </p>
          <img src={lightIcon} alt="" className="houseImageMobile" />
        </div>
        <div className="supervisorMobile">
          <h3>Supervisor</h3>
          <p>
            Monitors activity to identify project
            <br />
            roadblocks
          </p>
          <img src={searchIcon} alt="" className="houseImageMobile" />
        </div>
        <div className="calculatorMobile">
          <h3>Calculator</h3>
          <p>
            Uses data from past project to provide
            <br />
            better delivery estimates
          </p>
          <img src={screenIcon} alt="" className="houseImageMobile" />
        </div>
      </div>
    </div>
  );
}

export default FourMobile;
