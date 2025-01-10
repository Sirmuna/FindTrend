import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingCards = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData = [
    {
      title: "Personal",
      subtitle: "Special first packet for all",
      price: 8,
      features: [
        "Up to 15 page each group",
        "Up to 10 group page",
        "5 Days group page saved",
      ],
      highlighted: false,
    },
    {
      title: "Regular",
      subtitle: "Recommended for personal/pro",
      price: 20,
      features: [
        "Up to 15 page each group",
        "Download page up to 20 page",
        "Up to 10 group page",
        "15 Days group page saved",
      ],
      highlighted: true,
    },
    {
      title: "Premium",
      subtitle: "Packet for Startup & Company",
      price: 48,
      features: [
        "Unlimited group pages",
        "Unlimited download page",
        "Unlimited page each group",
        "Customize sorting group pages",
        "Customize group page name",
        "30 Days group page saved",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <div className="pricing-header">
          <h2>Get your best deal</h2>
          <div className="toggle-container">
            <span>Monthly</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <span className="slider"></span>
            </label>
            <span>Yearly</span>
            <span className="save-text">Save 20%</span>
          </div>
        </div>

        <div className="pricing-cards">
          {pricingData.map((plan) => (
            <div
              key={plan.title}
              className={`pricing-card ${
                plan.highlighted ? "highlighted" : ""
              }`}
            >
              <div className="card-content">
                <h3>{plan.title}</h3>
                <p className="subtitle">{plan.subtitle}</p>
                <div className="price">
                  <div className="top">
                    <div style={{ padding: "10px" }}>
                      <span className="amount">
                        ${isYearly ? plan.price * 0.8 : plan.price}
                      </span>
                      <span className="period">/Month</span>
                    </div>
                  </div>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <button className="trial-button">Start Free Trial</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-container {
          min-height: 100vh;
          background-color: black;
          padding: 4rem 2rem;
        }

        .pricing-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pricing-header h2 {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .toggle-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: white;
        }

        .save-text {
          color: #a3e635;
          font-size: 0.875rem;
          margin-left: 0.25rem;
        }

        /* Custom Switch Styles */
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #4b5563;
          transition: 0.4s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider:before {
          transform: translateX(20px);
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .pricing-cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pricing-card {
          background-color: white;
          border-radius: 0.5rem;
          overflow: hidden;
          color: black;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .pricing-card.highlighted {
          background-color: #a3e635;
        }

        .card-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-content h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          font-size: 0.875rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        .price {
          margin-bottom: 1.5rem;
          border-top: 1px solid #ccc;
        }
        .top {
          margin-top: 40px;
        }

        .amount {
          font-size: 2.875rem;
          font-weight: bold;
        }

        .period {
          opacity: 0.8;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: auto;
        }

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .card-footer {
          padding: 1.5rem;
          margin-top: auto;
        }

        .trial-button {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .trial-button:hover {
          opacity: 0.9;
        }

        .highlighted .trial-button {
          background-color: black;
          color: white;
        }

        .pricing-card:not(.highlighted) .trial-button {
          background-color: #a3e635;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default PricingCards;
