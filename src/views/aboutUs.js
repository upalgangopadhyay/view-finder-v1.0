import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Viewfinder Travel Solutions</title>
      </Helmet>

      <Navigation />

      <main className="about-main">
        <section className="about-card">
          <h1>About Us</h1>

          <p>
            We are a Kolkata-based travel company dedicated to making exploration accessible, exciting, and affordable. Founded in 2024, our goal has been simple: help more people experience the beauty of India without the stress of planning or the burden of expensive packages.
          </p>

          <p>
            In a short time, we have successfully conducted 100+ trips and served over 1,000 travelers, bringing together people who share a love for adventure, culture, and new experiences.
          </p>

          <p>
            Our specialty is budget-friendly group tours across India. Traveling in groups not only reduces costs but also creates a vibrant community where strangers become friends and journeys turn into shared stories.
          </p>

          <p>
            For travelers who prefer a more personal experience, we also offer customized tours. Whether you want a relaxed getaway, a mountain adventure, or a carefully planned family trip, we can design an itinerary tailored to your preferences, timeline, and budget.
          </p>

          <p>
            At our core, we believe travel should be simple, affordable, and memorable. Every trip we organize is built around that idea-helping you explore more of India while making the journey just as enjoyable as the destination.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
