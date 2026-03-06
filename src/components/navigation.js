import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { Phone } from "lucide-react";

const MOBILE_BREAKPOINT = 767;

const Navigation = () => {
  useEffect(() => {
    const navigationToggle = document.getElementById("navigation-toggle");
    const navigationMenu = document.getElementById("navigation-menu");

    if (!navigationToggle || !navigationMenu) return;

    const setBodyLock = (locked) => {
      document.body.classList.toggle("nav-open", locked);
    };

    const isMenuOpen = () => navigationMenu.classList.contains("navigation-menu-open");

    const toggleMenu = () => {
      const expanded = navigationToggle.getAttribute("aria-expanded") === "true";
      const nextState = !expanded;

      navigationToggle.setAttribute("aria-expanded", String(nextState));
      navigationMenu.classList.toggle("navigation-menu-open", nextState);

      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setBodyLock(nextState);
      }
    };

    const closeMenu = () => {
      navigationToggle.setAttribute("aria-expanded", "false");
      navigationMenu.classList.remove("navigation-menu-open");
      setBodyLock(false);
    };

    const onLinkClick = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu();
      } else if (isMenuOpen()) {
        setBodyLock(true);
      }
    };

    const handleClickOutside = (event) => {
      if (window.innerWidth > MOBILE_BREAKPOINT) return;
      if (!isMenuOpen()) return;

      const insideNav =
        navigationToggle.contains(event.target) || navigationMenu.contains(event.target);

      if (!insideNav) closeMenu();
    };

    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen()) {
        closeMenu();
        navigationToggle.focus();
      }
    };

    navigationToggle.addEventListener("click", toggleMenu);

    const navigationLinks = navigationMenu.querySelectorAll(".navigation-link, .navigation-cta");
    navigationLinks.forEach((link) => link.addEventListener("click", onLinkClick));

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      navigationToggle.removeEventListener("click", toggleMenu);
      navigationLinks.forEach((link) => link.removeEventListener("click", onLinkClick));
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      setBodyLock(false);
    };
  }, []);

  return (
    <div className="navigation-container1">
      <nav id="navigation-main" aria-label="Main navigation" className="navigation">
        <div className="navigation-container">
          <a href="/" className="navigation-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-logo-icon"
            >
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
                <circle cx="12" cy="13" r="3" />
              </g>
            </svg>
            <span className="navigation-logo-text">Viewfinder Travel Solutions</span>
          </a>

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
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 12h16M4 19h16" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-navigation-toggle-icon2"
            >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div id="navigation-menu" className="navigation-menu">
            <ul className="navigation-list">
              <li className="navigation-item">
                <a href="/#upcoming-tours" className="navigation-link">
                  <span>Upcoming Tours</span>
                </a>
              </li>
              <li className="navigation-item">
                <Link to="/plan-your-tour" className="navigation-link">Plan Your Own Tour</Link>
              </li>
              <li className="navigation-item">
                <Link to="/testimonials" className="navigation-link">Testimonials</Link>
              </li>
              <li className="navigation-item">
                <Link to="/gallery" className="navigation-link">Gallery</Link>
              </li>
              <li className="navigation-item">
                <Link to="/about-us" className="navigation-link">About Us</Link>
              </li>

              <li className="navigation-item navigation-item-cta">
                <a
                  href="https://wa.me/8697524868?text=Hi%20I%20want%20to%20know%20about%20your%20tours"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navigation-cta"
                  aria-label="Chat on WhatsApp"
                >
                  <Phone className="navigation-cta-icon" />
                  <span>WhatsApp</span>
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
