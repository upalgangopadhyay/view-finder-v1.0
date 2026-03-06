import React, { useState } from 'react';
import './upcomingTours.css';
import BookingInquiryModal from './bookingInquiryModal';
import { trackEvent } from '../lib/analytics';

const tours = [
  {
    id: 1,
    title: 'Kashmir',
    img: '/thumbnails/kashmir.jpg',
    long: 'Dal Lake shikara rides, Mughal gardens, and Himalayan valleys make Kashmir unforgettable.',
  },
  {
    id: 2,
    title: 'Shimla Manali',
    img: '/thumbnails/shimla-manali.jpg',
    long: 'Pine-clad hills, Mall Road charm, Beas Valley views, and Solang adventures define this mountain escape.',
  },
  {
    id: 3,
    title: 'Haridwar and Mussoorie',
    img: '/thumbnails/haridwar-mussorie.jpg',
    long: 'Witness evening Ganga Aarti at Har Ki Pauri, then unwind in Mussoorie\'s cool Garhwal hill air.',
  },
  {
    id: 4,
    title: 'Duars',
    img: '/thumbnails/duars.jpg',
    long: 'Lush forests, tea gardens, and jeep safaris through Gorumara and Jaldapara make Duars a wildlife favorite.',
  },
  {
    id: 5,
    title: 'Darjeeling and offbeat',
    img: '/thumbnails/darjeeling-and-offbeat.jpg',
    long: 'Rolling tea estates, toy-train heritage, and Kanchenjunga viewpoints create Darjeeling\'s classic and offbeat hill magic.',
  },
  {
    id: 6,
    title: 'Gangtok',
    img: '/thumbnails/gangtok.jpg',
    long: 'Gangtok blends lively streets with Buddhist monasteries, mountain panoramas, and easy access to Tsomgo Lake.',
  },
  {
    id: 7,
    title: 'Silk route',
    img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    long: 'Drive historic zigzag mountain roads near Zuluk, with sunrise viewpoints and dramatic East Sikkim Himalayan landscapes.',
  },
  {
    id: 8,
    title: 'Goa',
    img: '/thumbnails/goa.jpg',
    long: 'Golden beaches, Arabian Sea sunsets, and Portuguese-era churches and forts make Goa both relaxed and culturally rich.',
  },
];

const WHATSAPP_NUMBER = '918697524868';

export default function UpcomingTours() {
  const [bookingTour, setBookingTour] = useState(null);

  const openBooking = (tour) => {
    trackEvent('book_click', {
      tour_name: tour.title,
      source: 'upcoming_tour_card',
    });
    setBookingTour(tour);
  };

  const openEnquiry = (tour) => {
    trackEvent('enquire_click', {
      tour_name: tour.title,
      source: 'upcoming_tour_card',
    });

    const text = `Hi, I wanted to get more details regarding the '${tour.title}' trip.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="upcoming-tours" className="upcoming-tours">
      <h2 className="ut-title">Upcoming Tours</h2>
      <div className="ut-grid">
        {tours.map((t) => (
          <article key={t.id} className="ut-card">
            <div className="ut-image-wrap">
              <img className="ut-image" src={t.img} alt={t.title} />
            </div>
            <div className="ut-body">
              <h3 className="ut-card-title">{t.title}</h3>
              <p className="ut-desc">{t.long}</p>
              <div className="ut-actions">
                <button className="ut-btn ut-btn-primary" onClick={() => openBooking(t)}>Book</button>
                <button className="ut-btn" onClick={() => openEnquiry(t)}>Enquire</button>
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
