import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './upcomingTours.css';
import BookingInquiryModal from './bookingInquiryModal';
import { trackEvent } from '../lib/analytics';
import { tours } from '../data/tours';

const WHATSAPP_NUMBER = '918697524868';

export default function UpcomingTours() {
  const [bookingTour, setBookingTour] = useState(null);
  const navigate = useNavigate();

  const openBooking = (event, tour) => {
    event.stopPropagation();
    trackEvent('book_click', {
      tour_name: tour.title,
      source: 'upcoming_tour_card',
    });
    setBookingTour(tour);
  };

  const openEnquiry = (event, tour) => {
    event.stopPropagation();

    trackEvent('enquire_click', {
      tour_name: tour.title,
      source: 'upcoming_tour_card',
    });

    const text = `Hi, I wanted to get more details regarding the '${tour.title}' trip.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const openTourPage = (tour) => {
    trackEvent('tour_card_open', {
      tour_name: tour.title,
      source: 'upcoming_tour_card',
    });
    navigate(`/tours/${tour.slug}`);
  };

  return (
    <section id="upcoming-tours" className="upcoming-tours">
      <h2 className="ut-title">Upcoming Tours</h2>
      <div className="ut-grid">
        {tours.map((t) => (
          <article
            key={t.id}
            className="ut-card ut-card-clickable"
            role="button"
            tabIndex={0}
            onClick={() => openTourPage(t)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openTourPage(t);
              }
            }}
          >
            <div className="ut-image-wrap">
              <img className="ut-image" src={t.img} alt={t.title} />
            </div>
            <div className="ut-body">
              <h3 className="ut-card-title">{t.title}</h3>
              <p className="ut-desc">{t.shortDescription}</p>
              <div className="ut-actions">
                <button className="ut-btn ut-btn-primary" onClick={(event) => openBooking(event, t)}>Book</button>
                <button className="ut-btn" onClick={(event) => openEnquiry(event, t)}>Enquire</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {bookingTour && (
        <BookingInquiryModal
          tour={bookingTour}
          onClose={() => setBookingTour(null)}
        />
      )}
    </section>
  );
}
