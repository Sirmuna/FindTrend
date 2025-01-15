import React from "react";

const Connect = () => {
  const items = [
    { id: 1, alt: "facebook", image: "soc1.png" },
    { id: 2, alt: "twitter", image: "soc2.png" },
    { id: 3, alt: "dribble", image: "soc3.png" },
    { id: 4, alt: "pinterest", image: "soc4.png" },
    { id: 5, alt: "vkontakte", image: "soc5.png" },
    { id: 6, alt: "reddit", image: "soc6.png" },
    { id: 7, alt: "linkedIn", image: "soc7.png" },
  ];
  return (
    <div className="connect-container" id="features">
      <div className="connect-content">
        <h1>All platform connect to Findtrend</h1>
        <div className="carousel-container">
          {items.map((item) => (
            <div key={item} className="carousel-item">
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        <div className="tweets">
          <img src="tweet-1.png" />
          <img src="tweet-2.png" />
          <img src="tweet-3.png" />
        </div>
        <button className="btnB">View More Trend</button>
      </div>
    </div>
  );
};

export default Connect;
