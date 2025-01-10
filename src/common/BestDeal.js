import React from "react";

const BestDeal = () => {
  const Cards = (props) => {
    return (
      <div className="bestdeal-cards">
        <h3>{props.plan}</h3>
        <p>{props.text}</p>
        <h1>{props.price}</h1>
        <>{props.month}</>
        <ul style={{ listStyleType: "none" }}>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
          <li>{props.list4}</li>
          <li>{props.list5}</li>
          <li>{props.list6}</li>
        </ul>
        <button className="btnG" style={{ fontWeight: "700" }}>
          {props.button}
        </button>
      </div>
    );
  };
  return (
    <div className="bestdeal-container">
      <h1 style={{ textAlign: "center", fontSize: "64px" }}>
        Get your best deal
      </h1>
      <div className="bd-toggle">
        <span style={{ alignSelf: "center", fontSize: "24px" }}>Monthly</span>
        <div className="toggle">
          <div className="toggle-btn"></div>
        </div>
        <span style={{ opacity: "50%", alignSelf: "center", fontSize: "24px" }}>
          Yearly
        </span>
        {/* <div className="toggle-arrow">
          <p>
            Save 10% <br /> per month
          </p>
          <img src="arrow.svg" />
        </div> */}
      </div>
      <div className="bestdeal-content">
        <Cards
          plan="Personal"
          text="Special first packet for all"
          price="$8"
          month="/Month"
          list1=" &#10004; Up to 5 page each group"
          list2=" &#10004; Up to 10 group page"
          list3=" &#10004; 5 Days group page saved"
          button="Start Free Trial"
        />
        <Cards
          plan="Personal"
          text="Special first packet for all"
          price="$8"
          month="/Month"
          list1=" &#10004; Up to 5 page each group"
          list2=" &#10004; Up to 10 group page"
          list3=" &#10004; 5 Days group page saved"
          button="Start Free Trial"
        />
        <Cards
          plan="Personal"
          text="Special first packet for all"
          price="$8"
          month="/Month"
          list1=" &#10004; Up to 5 page each group"
          list2=" &#10004; Up to 10 group page"
          list3=" &#10004; 5 Days group page saved"
          button="Start Free Trial"
        />
      </div>
    </div>
  );
};

export default BestDeal;
