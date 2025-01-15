import { Menu, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import ComingSoonPopup from "./ComingSoonPopup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupState, setPopupState] = useState({
    isOpen: false,
    feature: "",
  });

  const navRef = useRef(null);

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
    setIsMenuOpen(false); // Close mobile menu when auth buttons are clicked
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  // Handle clicks outside of navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Only add the event listener if the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="logo-container">
              <img src="logo.png" alt="logo" />
              <span className="brand-name">Findtrend</span>
            </div>

            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  onClick={handleLinkClick}
                >
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
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                onClick={handleLinkClick}
              >
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
