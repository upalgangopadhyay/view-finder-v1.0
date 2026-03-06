import React, { useEffect, useState } from "react";
import "./upcomingTours.css";
import { trackEvent } from "../lib/analytics";

const AGENCY_PHONE = "918697524868";
const AGENCY_EMAIL = "info@viewfindertravel.com";

function BookingInquiryModal({ tour, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelers: "2",
    preferredDates: "",
    message: "",
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const launchLink = (href, target) => {
    const anchor = document.createElement("a");
    anchor.href = href;
    if (target) {
      anchor.target = target;
      anchor.rel = "noopener noreferrer";
    }
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inquiryLines = [
      `Tour inquiry for: ${tour.title}`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Travelers: ${formData.travelers}`,
      `Preferred dates: ${formData.preferredDates}`,
      `Message: ${formData.message || "N/A"}`,
    ];

    const inquiryText = inquiryLines.join("\n");
    const emailSubject = `Tour Inquiry - ${tour.title}`;

    const whatsappUrl = `https://wa.me/${AGENCY_PHONE}?text=${encodeURIComponent(
      `Hello Viewfinder Travel Solutions,\n\n${inquiryText}`
    )}`;
    const emailUrl = `mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(inquiryText)}`;

    trackEvent("booking_inquiry_submit", {
      tour_name: tour.title,
      travelers: formData.travelers,
    });
    trackEvent("booking_inquiry_whatsapp_open", { tour_name: tour.title });
    trackEvent("booking_inquiry_email_open", { tour_name: tour.title });

    launchLink(whatsappUrl, "_blank");
    launchLink(emailUrl);
    onClose();
  };

  return (
    <div className="bi-overlay" onClick={handleOverlayClick}>
      <div className="bi-modal" role="dialog" aria-modal="true" aria-label="Booking inquiry form">
        <button className="bi-close" type="button" onClick={onClose} aria-label="Close booking form">
          x
        </button>
        <h2 className="bi-title">Book: {tour.title}</h2>

        <form className="bi-form" onSubmit={handleSubmit}>
          <label className="bi-field">
            Name
            <input name="name" type="text" value={formData.name} onChange={handleChange} required />
          </label>

          <label className="bi-field">
            Phone
            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </label>

          <label className="bi-field">
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label className="bi-field">
            Travelers
            <input
              name="travelers"
              type="number"
              min="1"
              value={formData.travelers}
              onChange={handleChange}
              required
            />
          </label>

          <label className="bi-field">
            Preferred dates
            <input
              name="preferredDates"
              type="text"
              placeholder="e.g. 10 Apr - 15 Apr 2026"
              value={formData.preferredDates}
              onChange={handleChange}
              required
            />
          </label>

          <label className="bi-field">
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Any preferences, pickup city, hotel type, etc."
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="ut-btn ut-btn-primary bi-submit">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingInquiryModal;
