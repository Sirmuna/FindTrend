import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import ComingSoonPopup from "./ComingSoonPopup"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupState, setPopupState] = useState({
    isOpen: false,
    feature: "",
  });

  const navItems = [
    { label: "Home", href: "#" },
    { label: "How it work", href: "#about" },
    { label: "Pricing", href: "#price" },
    { label: "Solution", href: "#solution" },
    { label: "Features", href: "#features" },
  ];

  const handleAuthClick = (feature) => {
    setPopupState({
      isOpen: true,
      feature: feature,
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="logo-container">
              <img src="logo.png" />
              <span className="brand-name">Findtrend</span>
            </div>

            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="auth-buttons">
              <button
                className="login-button"
                onClick={() => handleAuthClick("Login")}
              >
                Login
              </button>
              <button
                className="register-button"
                onClick={() => handleAuthClick("Register")}
              >
                Register
              </button>
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <div className="auth-buttons">
              <button
                className="login-button"
                onClick={() => handleAuthClick("Login")}
              >
                Login
              </button>
              <button
                className="register-button"
                onClick={() => handleAuthClick("Register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ComingSoonPopup
        isOpen={popupState.isOpen}
        onClose={() => setPopupState({ isOpen: false, feature: "" })}
        feature={popupState.feature}
      />
    </>
  );
};

export default Navbar;
