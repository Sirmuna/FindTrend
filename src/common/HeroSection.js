import { Section } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Minimize your tabs.</h1>
          <h1>Find the trends!</h1>
          <p>
            Don’t let your computer memories consumes all of those browser tabs.
            <br />
            Findtrend let you gathers all of your favorite website into one
            place.
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
      <>
        <div className="sec-sec">
          <div className="sec-content">
            <h1>Open new tabs is sh*t </h1>
            <div className="sec-row">
              <div className="sec-row-1">
                <img src="./blackArrow-up.png" className="hero-arrow" />
                <span>
                  solution for <br /> discover a trend
                </span>
              </div>
              <div className="sec-row-2">
                <img src="./group15.png" />
              </div>
              <div className="sec-row-3">
                <span>
                  You just need <br /> one tab now
                </span>
                <img src="./blackArrow-down.png" className="hero-arrow" />
              </div>
            </div>
            <div className="sec-row-p">
              <p>
                A solution for your browser tabs and don’t make your device get
                slower over time. Get ease and faster to discover a trend with
                just one tab.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HeroSection;
