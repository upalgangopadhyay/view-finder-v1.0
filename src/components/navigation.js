import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  useEffect(() => {
    const navigationToggle = document.getElementById("navigation-toggle");
    const navigationMenu = document.getElementById("navigation-menu");

    if (!navigationToggle || !navigationMenu) return;

    const toggleMenu = () => {
      const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
      navigationToggle.setAttribute("aria-expanded", !isExpanded);
      navigationMenu.classList.toggle("navigation-menu-open");
    };

    const closeMenu = () => {
      navigationToggle.setAttribute("aria-expanded", "false");
      navigationMenu.classList.remove("navigation-menu-open");
    };

    navigationToggle.addEventListener("click", toggleMenu);

    // Close on link click (mobile)
    const navigationLinks = navigationMenu.querySelectorAll(".navigation-link, .navigation-cta");
    navigationLinks.forEach(link =>
      link.addEventListener("click", () => {
        if (window.innerWidth <= 767) closeMenu();
      })
    );

    // Close on resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 767) closeMenu();
      }, 250);
    };
    window.addEventListener("resize", handleResize);

    // Close when clicking outside
    const handleClickOutside = e => {
      if (window.innerWidth <= 767) {
        const isInsideNav =
          navigationToggle.contains(e.target) || navigationMenu.contains(e.target);
        const isMenuOpen = navigationMenu.classList.contains("navigation-menu-open");

        if (!isInsideNav && isMenuOpen) closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);

    // Close on Escape key
    const handleEscape = e => {
      if (e.key === "Escape" && navigationMenu.classList.contains("navigation-menu-open")) {
        closeMenu();
        navigationToggle.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);

    // Cleanup on unmount
    return () => {
      navigationToggle.removeEventListener("click", toggleMenu);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="navigation-container1">
      <nav id="navigation-main" aria-label="Main navigation" className="navigation">
        <div className="navigation-container">
          {/* Logo */}
          <a href="/" className="navigation-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-logo-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
                <circle cx="12" cy="13" r="3" />
              </g>
            </svg>
            <span className="navigation-logo-text">Viewfinder Travel Solutions</span>
          </a>

          {/* Mobile Toggle */}
          <button
            id="navigation-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="navigation-menu"
            className="navigation-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-navigation-toggle-icon1"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5h16M4 12h16M4 19h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-navigation-toggle-icon2"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <div id="navigation-menu" className="navigation-menu">
            <ul className="navigation-list">
              <li className="navigation-item">
                <a href="/#upcoming-tours" className="navigation-link">
                <span>Upcoming Tours</span>
                </a>

              </li>
              <li className="navigation-item">
                <Link to="/gallery" className="navigation-link">Gallery</Link>

              </li>
              <li className="navigation-item">
                <a href="#testimonials" className="navigation-link">
                  <span>Testimonials</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#footer-main" className="navigation-link">
                  <span>About Us</span>
                </a>
              </li>
              <li className="navigation-item navigation-item-cta">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navigation-cta"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="navigation-cta-icon"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    />
                  </svg>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
