import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./planYourTour.css";

const AGENCY_PHONE = "918697524868";
const AGENCY_EMAIL = "info@viewfindertravel.com";

function PlanYourTour() {
  const [formData, setFormData] = useState({
    destination: "",
    preferredDates: "",
    experienceType: "group",
    numberOfPeople: "2",
    budget: "",
    comments: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      "Plan Your Own Tour inquiry",
      `Destination: ${formData.destination}`,
      `Preferred dates: ${formData.preferredDates || "Not specified"}`,
      `Tour style: ${formData.experienceType === "group" ? "Group tour" : "Personalized experience"}`,
      `Number of people: ${formData.numberOfPeople}`,
      `Budget: ${formData.budget || "Not specified"}`,
      `Additional comments: ${formData.comments || "None"}`,
    ];

    const message = lines.join("\n");
    const whatsappUrl = `https://wa.me/${AGENCY_PHONE}?text=${encodeURIComponent(message)}`;
    const emailUrl = `mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent("Custom Tour Inquiry")}&body=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = emailUrl;
  };

  return (
    <div className="plan-page">
      <Helmet>
        <title>Plan Your Own Tour | Viewfinder Travel Solutions</title>
      </Helmet>

      <Navigation />

      <main className="plan-main">
        <section className="plan-header">
          <h1>Plan Your Own Tour</h1>
          <p>Share your preferences and we will design your trip.</p>
          <Link to="/" className="plan-back-link">Back to Home</Link>
        </section>

        <section className="plan-form-card">
          <form className="plan-form" onSubmit={handleSubmit}>
            <label className="plan-field">
              Destination
              <input
                name="destination"
                type="text"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </label>

            <label className="plan-field">
              Preferred dates (optional)
              <input
                name="preferredDates"
                type="text"
                placeholder="e.g. 10 Apr - 15 Apr 2026"
                value={formData.preferredDates}
                onChange={handleChange}
              />
            </label>

            <fieldset className="plan-fieldset">
              <legend>Tour type</legend>
              <label className="plan-radio">
                <input
                  type="radio"
                  name="experienceType"
                  value="group"
                  checked={formData.experienceType === "group"}
                  onChange={handleChange}
                />
                Group tour
              </label>
              <label className="plan-radio">
                <input
                  type="radio"
                  name="experienceType"
                  value="personalized"
                  checked={formData.experienceType === "personalized"}
                  onChange={handleChange}
                />
                Personalized experience
              </label>
            </fieldset>

            <label className="plan-field">
              Number of people
              <input
                name="numberOfPeople"
                type="number"
                min="1"
                value={formData.numberOfPeople}
                onChange={handleChange}
                required
              />
            </label>

            <label className="plan-field">
              Budget (optional)
              <input
                name="budget"
                type="text"
                placeholder="e.g. INR 50,000 per person"
                value={formData.budget}
                onChange={handleChange}
              />
            </label>

            <label className="plan-field">
              Additional comments (optional)
              <textarea
                name="comments"
                rows="4"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Any hotel, transport, or special requests"
              />
            </label>

            <button className="plan-submit" type="submit">Send Custom Tour Inquiry</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PlanYourTour;
