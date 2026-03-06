import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { exploreIndia } from '../data/requestedDestinations';
import { trackEvent } from '../lib/analytics';
import './quickGetaways.css';

export default function ExploreIndiaPage() {
  const navigate = useNavigate();

  const openDestination = (destination) => {
    trackEvent('requested_destination_open', {
      destination_name: destination.title,
      source: 'explore_india_all',
    });
    navigate(`/destinations/${destination.slug}`);
  };

  return (
    <div className="qg-page">
      <Helmet>
        <title>Explore India | Viewfinder Travel Solutions</title>
        <meta
          name="description"
          content="Explore frequently requested India destination ideas including mountains, heritage routes, coastlines, and spiritual circuits."
        />
      </Helmet>
      <Navigation />

      <main className="qg-main">
        <section className="qg-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Frequently Requested Destinations</span>
          <span>/</span>
          <span>Explore India</span>
        </section>

        <section className="qg-head">
          <h1>Explore India</h1>
          <p>Most requested all-India destination ideas from our travelers</p>
        </section>

        <section className="qg-grid">
          {exploreIndia.map((destination) => (
            <article
              key={destination.id}
              className="qg-card"
              role="button"
              tabIndex={0}
              onClick={() => openDestination(destination)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openDestination(destination);
                }
              }}
            >
              <div className="qg-image-wrap">
                <img src={destination.image} alt={destination.title} className="qg-image" />
              </div>
              <div className="qg-card-body">
                <h3>{destination.title}</h3>
                <p>{destination.shortDescription}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
