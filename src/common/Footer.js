import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="dark-logo.png" alt="logo in dark background" />
          <span>Findtrend</span>
        </div>
        <div className="footer-link">
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
          <a>Contact Us</a>
          <a>Careers</a>
          <a href="https://sirmuna.vercel.app" >Sir Muna</a>
        </div>

        <style jsx>{`
          .footer-container {
            background-color: #fff; 
            display: flex;
            justify-content: space-between;
            padding: 10px;
          }
          .footer-logo {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .footer-logo span {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
          }
          .footer-link {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            cursor:pointer;
          }
            .footer-link a{
            text-decoration: none;
            color: #000;
            }
          @media screen and (max-width: 768px) {
            .footer-container {
              display:flex;
              flex-direction: column;
              align-items:center;
              gap: 20px;
            }
              .footer-link{
              display:flex;
              flex-direction: column;
              gap:0;
              }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Footer;
