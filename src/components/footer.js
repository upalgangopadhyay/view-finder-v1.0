import React, { useEffect } from "react";
import "./footer.css";

const Footer = () => {
  // ✅ Use React effect to handle animations & logic instead of <Script>
  useEffect(() => {
    const footerContactItems = document.querySelectorAll(".footer-contact-item");

    footerContactItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";

      setTimeout(() => {
        item.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 100);
    });

    const footerLogoIcon = document.querySelector(".footer-logo-icon");
    let logoRotation = 0;

    if (footerLogoIcon) {
      const interval = setInterval(() => {
        logoRotation += 0.5;
        if (logoRotation >= 360) logoRotation = 0;
        footerLogoIcon.style.transform = `rotate(${logoRotation}deg)`;
      }, 50);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <footer id="footer-main" className="footer-container">
      <div className="footer-background-layer">
        <img
          src="https://images.pexels.com/photos/34197735/pexels-photo-34197735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Aerial view of travel destination"
          className="footer-background-image"
        />
        <div className="footer-overlay"></div>
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-main-content">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                  </g>
                </svg>
              </div>
              <h2 className="footer-brand-name">Viewfinder Travel Solutions</h2>
            </div>
            <p className="footer-brand-tagline">
              Crafting unforgettable journeys and transforming travel dreams
              into reality. Your trusted partner for exceptional travel
              experiences worldwide.
            </p>

            <div className="footer-social-links">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social, i) => (
                <a href="#" key={i} aria-label={`Follow us on ${social}`}>
                  <div className="footer-social-link">
                    {/* You can replace these with real icons later */}
                    <span>{social}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h3 className="footer-column-title">Explore</h3>
              <ul className="footer-links-list">
                {["Upcoming Tours", "Travel Gallery", "Customer Reviews", "Travel Packages"].map(
                  (text, i) => (
                    <li key={i}>
                      <a href="#" className="footer-link">
                        {text}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-column-title">Services</h3>
              <ul className="footer-links-list">
                {[
                  "Custom Tour Planning",
                  "Group Tours",
                  "Private Excursions",
                  "Travel Consultation",
                ].map((text, i) => (
                  <li key={i}>
                    <a href="#" className="footer-link">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-column-title">Company</h3>
              <ul className="footer-links-list">
                {["About Us", "Our Team", "Partnerships", "Careers"].map((text, i) => (
                  <li key={i}>
                    <a href="#" className="footer-link">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-links-column footer-contact-column">
              <h3 className="footer-column-title">Contact Us</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <a href="tel:+1234567890" className="footer-contact-link">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="footer-contact-item">
                  <a
                    href="mailto:info@viewfindertravel.com?subject="
                    className="footer-contact-link"
                  >
                    info@viewfindertravel.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <address className="footer-contact-address">
                    123 Travel Lane, Adventure City, AC 12345
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-divider"></div>
        <div className="footer-bottom-section">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Viewfinder Travel Solutions. All rights reserved.
            </p>
            <div className="footer-legal-links">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, i) => (
                <React.Fragment key={i}>
                  <a href="#" className="footer-legal-link">
                    {link}
                  </a>
                  {i < 2 && <span className="footer-legal-separator">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
