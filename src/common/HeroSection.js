import { Section } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Minimize your tabs.</h1>
          <h1>Find the trends!</h1>
          <p id="hero-p1">
            Don’t let your computer memories consumes all of those browser tabs.
            <br />
            Findtrend let you gathers all of your favorite website into one
            place.
          </p>
          <p id="hero-p2">
            Don’t let your computer memories consumes <br /> all of those
            browser tabs.
            <br />
            Findtrend let you gathers all of your favorite <br />
            website into one place.
          </p>
          <div className="hero-col">
            <div className="hero-col-1">
              <div className="heroBtn">
                <button className="hero-col-btn">Get Started 🔥</button>
              </div>
              <div className="hero-col-2">
                <span>
                  All research <br /> start from here
                </span>
                <img src="./Arrow.svg" className="hero-arrow" />
              </div>
            </div>
          </div>
          <div className="socmed-container">
            <div className="socmed-content">
              <img
                src="hero-twitter.png"
                className="socmed-handler"
                id="hero-twit"
              />
              <img
                src="hero-pinterest.png"
                className="socmed-handler"
                id="hero-pint"
              />
              <img
                src="hero-facebook.png"
                className="socmed-handler"
                id="hero-fb"
              />
              <img
                src="hero-ball.png"
                className="socmed-handler"
                id="hero-ball"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
