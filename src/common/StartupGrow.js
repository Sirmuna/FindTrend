import React from "react";

const StartupGrow = () => {
  const itemsData = [
    {
      id: 1,
      img: "/microsoft.png",
      alt: "microsoft",
    },
    {
      id: 2,
      img: "/two.png",
      alt: "microsoft",
    },
    {
      id: 3,
      img: "/three.png",
      alt: "microsoft",
    },
    {
      id: 4,
      img: "/four.png",
      alt: "microsoft",
    },
    {
      id: 5,
      img: "/five.png",
      alt: "microsoft",
    },
    {
      id: 6,
      img: "/six.png",
      alt: "microsoft",
    },
    {
      id: 7,
      img: "/seven.png",
      alt: "microsoft",
    },
    {
      id: 8,
      img: "/eight.png",
      alt: "microsoft",
    },
    {
      id: 1,
      img: "/microsoft.png",
      alt: "microsoft",
    },
    {
      id: 2,
      img: "/two.png",
      alt: "microsoft",
    },
    {
      id: 3,
      img: "/three.png",
      alt: "microsoft",
    },
    {
      id: 4,
      img: "/four.png",
      alt: "microsoft",
    },
    {
      id: 5,
      img: "/five.png",
      alt: "microsoft",
    },
    {
      id: 6,
      img: "/six.png",
      alt: "microsoft",
    },
    {
      id: 7,
      img: "/seven.png",
      alt: "microsoft",
    },
    {
      id: 8,
      img: "/eight.png",
      alt: "microsoft",
    },
  ];
  return (
    <div className="startup-container" id="about">
      <div className="startup-content">
        <p>
          Findtrend helps you to increase your productivity and reduce your
          computer's memory load,
          <span>
            an application that can fulfill your daily browsing needs.
          </span>
        </p>
      </div>
      <div className="startup-2">
        <p>Findtrend make +1000 Startup grow</p>
        <div className="sg-container">
          {itemsData.map((item, index) => (
            <div className="sg-item" key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupGrow;
