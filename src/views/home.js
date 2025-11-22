import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./home.css";
import UpcomingTours from "../components/upcomingTours";

const Home = () => {
  useEffect(() => {
    // --- Fade-in animations ---
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };



    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".tour-card, .feature-card, .testimonial-card, .gallery-item").forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });

    // WhatsApp button fade on scroll
    const whatsappButton = document.getElementById("whatsapp-float");
    if (whatsappButton) {
      whatsappButton.style.transition = "opacity 0.3s ease";
      whatsappButton.style.opacity = "0";
      whatsappButton.style.pointerEvents = "none";

      const handleScroll = () => {
        if (window.scrollY > 300) {
          whatsappButton.style.opacity = "1";
          whatsappButton.style.pointerEvents = "auto";
        } else {
          whatsappButton.style.opacity = "0";
          whatsappButton.style.pointerEvents = "none";
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="home-container1">
      <Helmet>
        <title>Viewfinder Travel Solutions</title>
        <meta property="og:title" content="Viewfinder Travel Solutions" />
      </Helmet>

      <Navigation />

      <section id="hero-section" className="hero-section">
        <div className="hero-video-container">
          <video
            id="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/34197373/pictures/preview-0.jpg"
            src="https://videos.pexels.com/video-files/34197373/14494653_360_480_30fps.mp4"
            className="hero-video"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </g>
            </svg>
            <span>Curated Travel Experiences</span>
          </div>

          <h1 className="hero-title">Viewfinder Travel Solutions</h1>
          <p className="hero-subtitle">
            Discover the world through our lens. Expert-curated tours and personalized travel experiences that transform destinations into unforgettable memories.
          </p>

          <div className="hero-cta-group">
            <a href="#upcoming-tours" className="btn btn-primary btn-lg">Explore Tours</a>
            <a href="#contact-section" className="btn btn-lg btn-outline">Plan Your Journey</a>
          </div>
        </div>
      </section>

      <UpcomingTours />

      <Footer />
    </div>
  );
};

export default Home;