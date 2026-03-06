import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { findTourBySlug } from "../data/tours";
import "./tourDetail.css";

const WHATSAPP_NUMBER = "918697524868";

function getWhatsappUrl(title) {
  const text = `Hi, I wanted to get more details regarding the '${title}' trip.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function TourDetail() {
  const { slug } = useParams();
  const tour = findTourBySlug(slug);

  if (!tour) {
    return (
      <div className="tour-page">
        <Navigation />
        <main className="tour-main">
          <section className="tour-card-wrapper">
            <h1>Tour Not Found</h1>
            <p>We could not find this tour. Please return to Upcoming Tours.</p>
            <Link to="/" className="tour-back-link">Go Back Home</Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappUrl = getWhatsappUrl(tour.title);

  return (
    <div className="tour-page">
      <Helmet>
        <title>{tour.seoTitle || `${tour.title} Tour | Viewfinder Travel Solutions`}</title>
        <meta
          name="description"
          content={
            tour.seoDescription ||
            `${tour.title} tour details, itinerary, inclusions, and WhatsApp enquiry by Viewfinder Travel Solutions.`
          }
        />
      </Helmet>

      <Navigation />

      <a className="tour-whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer noopener">
        WhatsApp
      </a>

      <main className="tour-main">
        <section className="tour-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{tour.title}</span>
        </section>

        <section className="tour-hero">
          <img src={tour.img} alt={tour.title} className="tour-hero-image" />
          <div className="tour-hero-content">
            <p className="tour-rating-chip">{tour.ratingText || "Guest favorite"}</p>
            <h1>{tour.title} Tour Plan</h1>
            <p>{tour.heroPitch || tour.shortDescription}</p>
            <div className="tour-mini-facts">
              <span>{tour.duration || "Custom duration"}</span>
              <span>{tour.startingPrice || "Custom pricing"}</span>
            </div>
            <a className="tour-primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer noopener">
              Enquire on WhatsApp
            </a>
          </div>
        </section>

        {tour.detailAvailable ? (
          <>
            <section className="tour-facts-grid">
              <article className="tour-fact-card">
                <h2>Starting Price</h2>
                <p>{tour.startingPrice}</p>
              </article>
              <article className="tour-fact-card">
                <h2>Duration</h2>
                <p>{tour.duration}</p>
              </article>
              <article className="tour-fact-card">
                <h2>Stay Plan</h2>
                <p>{tour.stayPlan}</p>
              </article>
              <article className="tour-fact-card">
                <h2>Travel Note</h2>
                <p>{tour.transportNote}</p>
              </article>
            </section>

            <section className="tour-two-col">
              <article className="tour-section tour-soft-card">
                <h2>Why This Trip Stands Out</h2>
                <ul>
                  {tour.whyThisTour.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="tour-section tour-soft-card">
                <h2>The Destination Difference</h2>
                <ul>
                  {tour.destinationDifference.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </section>

            <section className="tour-section">
              <h2>Trip Highlights</h2>
              <ul>
                {tour.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="tour-section">
              <h2>Day-wise Itinerary</h2>
              <div className="tour-itinerary-list">
                {tour.itinerary.map((item) => (
                  <article key={item.day} className="tour-itinerary-item">
                    <h3>{item.day}</h3>
                    <p>{item.plan}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="tour-two-col">
              <article className="tour-section">
                <h2>Inclusions</h2>
                <ul>
                  {tour.inclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="tour-section">
                <h2>Exclusions</h2>
                <ul>
                  {tour.exclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </section>

            <section className="tour-section">
              <h2>Frequently Asked Questions</h2>
              <div className="tour-faq-list">
                {tour.faqs.map((faq) => (
                  <article key={faq.q} className="tour-faq-item">
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="tour-card-wrapper">
            <h2>Detailed itinerary coming soon</h2>
            <p>
              We are currently preparing full itinerary, inclusions, and pricing details for this trip.
              Tap WhatsApp and we will share complete details instantly.
            </p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default TourDetail;
