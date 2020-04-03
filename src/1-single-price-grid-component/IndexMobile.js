import React from "react";
import "./styleMobile.css";

function IndexMobile() {
  return (
    <div className="wrapperMobile">
      <div className="containerMobile">
        <div className="headerMobile">
          <h4>Join our community</h4>
          <p className="first">30-day, hassle-free money back guarantee</p>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. <br />
            Perfect for any developers who are serious about honing their
            skills.
          </p>
          {/* <p>
        </p> */}
        </div>
        <div className="bothMobile">
          <div className="leftMobile">
            <h5>Monthly Subscription</h5>
            <span className="one">$29</span>
            <span className="two">per month</span>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className="rightMobile">
            <h5>Why us</h5>
            <p>
              Tutorials by industry experts
              <br /> Peer & expert code review
              <br /> Coding exercises <br /> Access to our GitHub repos <br />{" "}
              Community forum Flashcard decks
              <br />
              New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexMobile;
