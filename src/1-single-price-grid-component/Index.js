import React from "react";
import "./style.css";

function Index() {
  return (
    <div className="container">
      <div className="header">
        <h4>Join our community</h4>
        <p className="first">30-day, hassle-free money back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. <br />
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>
      <div className="both">
        <div className="left">
          <h5>Monthly Subscription</h5>
          <span className="one">$29</span>
          <span className="two">per month</span>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div className="right">
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
  );
}

export default Index;
