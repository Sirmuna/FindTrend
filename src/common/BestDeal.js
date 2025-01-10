import React from "react";

const BestDeal = () => {
  const CardDatas = [
    {
      id: "1",
      plan: "hello",
      text: "",
      price: "",
      month: "",
      listOne: "",
      listTwo: "",
      listThree: "",
    },
  ];
  return (
    <div className="container">
      {CardDatas.map((card, index) => {
        <div className="bestdeal-cards" key={index}>
          <h3> {card.plan} </h3>
          <p>{card.text}</p>
          <h1>{card.price}</h1>
          <>{card.month}</>
          <ul style={{ listStyleType: "none" }}>
            <li>{card.listOne}</li>
            <li>{card.listTwo}</li>
            <li>{card.listThree}</li>
          </ul>
          <button className="btnG" style={{ fontWeight: "700" }}>
            {card.button}
          </button>
        </div>;
      })}
    </div>
  );
};

export default BestDeal;

//  <div className="bestdeal-content">
//    <Cards
//      plan="Personal"
//      text="Special first packet for all"
//      price="$8"
//      month="/Month"
//      list1=" &#10004; Up to 5 page each group"
//      list2=" &#10004; Up to 10 group page"
//      list3=" &#10004; 5 Days group page saved"
//      button="Start Free Trial"
//    />
//    <Cards
//      plan="Personal"
//      text="Special first packet for all"
//      price="$8"
//      month="/Month"
//      list1=" &#10004; Up to 5 page each group"
//      list2=" &#10004; Up to 10 group page"
//      list3=" &#10004; 5 Days group page saved"
//      button="Start Free Trial"
//    />
//    <Cards
//      plan="Personal"
//      text="Special first packet for all"
//      price="$8"
//      month="/Month"
//      list1=" &#10004; Up to 5 page each group"
//      list2=" &#10004; Up to 10 group page"
//      list3=" &#10004; 5 Days group page saved"
//      button="Start Free Trial"
//    />
//  </div>;
