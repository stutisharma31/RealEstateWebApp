import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="get-started">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started Homyz </span>
          <span className="secondaryText">
            Subscribe and find attractive quotes from us
            <br />
            Find your residence soon.
          </span>
          <button className="button">
            <a href="https://mail.google.com/mail/u/0/#inbox">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
