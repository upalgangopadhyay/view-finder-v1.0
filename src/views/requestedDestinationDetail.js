import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { findRequestedDestinationBySlug } from "../data/requestedDestinations";
import "./requestedDestinationDetail.css";

const WHATSAPP_NUMBER = "918697524868";

function getWhatsappUrl(title) {
  const text = `Hi, I wanted to get more details regarding the '${title}' trip.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function RequestedDestinationDetail() {
  const { slug } = useParams();
  const destination = findRequestedDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="tour-page">
        <Navigation />
        <main className="tour-main">
          <section className="tour-card-wrapper">
            <h1>Destination Not Found</h1>
            <p>We could not find this destination right now.</p>
            <Link to="/" className="tour-back-link">Go Back Home</Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappUrl = getWhatsappUrl(destination.title);
  const seoTitle =
    destination.seoTitle || `${destination.title} Tour Itinerary | Viewfinder Travel Solutions`;
  const seoDescription =
    destination.seoDescription ||
    `${destination.title} itinerary with day-wise plan, things to do, travel tips, and WhatsApp enquiry by Viewfinder Travel Solutions.`;

  return (
    <div className="tour-page">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      <Navigation />

      <a className="tour-whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer noopener">
        WhatsApp
      </a>

      <main className="tour-main">
        <section className="tour-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Frequently Requested Destinations</span>
          <span>/</span>
          <span>{destination.title}</span>
        </section>

        <section className="tour-hero">
          <img src={destination.image} alt={destination.title} className="tour-hero-image" />
          <div className="tour-hero-content">
            <p className="tour-rating-chip">Frequently requested</p>
            <h1>{destination.title}</h1>
            <p>{destination.heroPitch}</p>
            <div className="tour-mini-facts">
              <span>{destination.duration || "Custom duration"}</span>
              <span>{destination.bestTime || "Season on request"}</span>
            </div>
            <a className="tour-primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer noopener">
              Enquire on WhatsApp
            </a>
          </div>
        </section>

        <section className="tour-section">
          <h2>Overview</h2>
          <p>{destination.overview || destination.shortDescription}</p>
        </section>

        <section className="tour-two-col">
          <article className="tour-section tour-soft-card">
            <h2>Why This Destination Stands Out</h2>
            <ul>
              {(destination.destinationDifference || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="tour-section tour-soft-card">
            <h2>Things To Do</h2>
            <ul>
              {(destination.thingsToDo || destination.highlights || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="tour-section">
          <h2>Day-by-Day Itinerary</h2>
          <div className="tour-itinerary-list">
            {(destination.itinerary || []).map((item) => (
              <article key={item.day} className="tour-itinerary-item">
                <h3>{item.day}</h3>
                <p>{item.plan}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tour-two-col">
          <article className="tour-section">
            <h2>Fun Facts</h2>
            <ul>
              {(destination.funFacts || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="tour-section">
            <h2>Safety Cautions</h2>
            <ul>
              {(destination.safetyCautions || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        {destination.faqs && destination.faqs.length ? (
          <section className="tour-section">
            <h2>Frequently Asked Questions</h2>
            <div className="tour-faq-list">
              {destination.faqs.map((faq) => (
                <article key={faq.q} className="tour-faq-item">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
