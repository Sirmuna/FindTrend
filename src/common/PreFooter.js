import React from "react";

const PreFooter = () => {
  return (
    <div className="pre-footer">
      <div className="pf-content">
        <p>Join us on email for</p>
        <p id="fade-p">more trending topics</p>
        <button className="btnB">Join Now</button>
      </div>
      <style jsx>
        {`
          .pre-footer {
            background-color: #a3e635;
            text-align: center;
            line-height: 40px;
            font-size: 64px;
            font-weight: 900;
            height: 50vh;
            padding: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #fade-p {
            color: #87d322;
          }
          @media screen and (max-width: 768px) {
            .pre-footer {
              font-size: 48px;
              padding: 0px;
            }
          }
          @media screen and (max-width: 530px) {
            .pre-footer {
              font-size: 32px;
              padding: 0px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PreFooter;
