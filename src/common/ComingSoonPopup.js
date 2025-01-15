import React from "react";
import { X } from "lucide-react";

const ComingSoonPopup = ({ isOpen, onClose, feature }) => {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-in-overlay {
          animation: fadeInOverlay 0.2s ease-out forwards;
        }
          .fixed{
          height:100vh;
          width:100%;
          background-color:#000000e8;
          backdrop-filter:blur(20px);
          webkit-backdrop-filter:enabled(true);
          z-index:1001;
          position:fixed;
          top:0;
          left:0;
          display:flex;
          justify-content:center;
          align-items:center;
          }
          .bg-white{
          display:flex;
          flex-direction:column;
          align-items:center;
          }
          .text-center{
          background-color:#a8ff35;
          text-align:center;
          padding:10px;
          border-radius:10px;
          }
      `}</style>
      <div className="fixed" onClick={onClose}>
        <div className="bg-white">
          <div className="text-center">
            <h2 className="text">{feature} Coming Soon!</h2>
            <p className="text-gray">
              We're working hard to bring you secure {feature.toLowerCase()}{" "}
              functionality. <br /> Stay tuned!
            </p>
            <button onClick={onClose} className="btnB">
              Got it!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPopup;
