import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { exploreIndia, quickGetaways } from '../data/requestedDestinations';
import { trackEvent } from '../lib/analytics';
import './frequentlyRequestedDestinations.css';

function DestinationCard({ destination, source }) {
  const navigate = useNavigate();

  const openCard = () => {
    trackEvent('requested_destination_open', {
      destination_name: destination.title,
      source,
    });
    navigate(`/destinations/${destination.slug}`);
  };

  return (
    <article
      className="frd-card"
      role="button"
      tabIndex={0}
      onClick={openCard}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openCard();
        }
      }}
    >
      <div className="frd-image-wrap">
        <img src={destination.image} alt={destination.title} className="frd-image" />
      </div>
      <div className="frd-card-body">
        <h4>{destination.title}</h4>
        <p>{destination.shortDescription}</p>
      </div>
    </article>
  );
}

export default function FrequentlyRequestedDestinations() {
  const quickPreview = quickGetaways.slice(0, 4);
  const explorePreview = exploreIndia.slice(0, 4);

  return (
    <section className="frd-section" id="frequently-requested-destinations">
      <h2 className="frd-title">Frequently Requested Destinations</h2>

      <div className="frd-group">
        <div className="frd-group-head">
          <h3>Quick Getaways around Kolkata</h3>
          <p>Within West Bengal (Quick Getaways)</p>
        </div>
        <div className="frd-grid">
          {quickPreview.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              source="frequent_quick_getaways_preview"
            />
          ))}
          <Link to="/destinations/quick-getaways" className="frd-see-all">
            See All
          </Link>
        </div>
      </div>

      <div className="frd-group">
        <div className="frd-group-head">
          <h3>Explore India</h3>
          <p>Popular all-India requests from our travelers</p>
        </div>
        <div className="frd-grid">
          {explorePreview.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              source="frequent_explore_india"
            />
          ))}
          <Link to="/destinations/explore-india" className="frd-see-all">
            See All
          </Link>
        </div>
      </div>
    </section>
  );
}
