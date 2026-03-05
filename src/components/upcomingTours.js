import React, { useState } from 'react';
import './upcomingTours.css';
import BookingInquiryModal from './bookingInquiryModal';

const tours = [
  {
    id: 1,
    title: 'Kashmir',
    img: '/thumbnails/kashmir.jpg',
    long: 'Mountain and lake',
  },
  {
    id: 2,
    title: 'Shimla Manali',
    img: '/thumbnails/shimla-manali.jpg',
    long: 'Mountains',
  },
  {
    id: 3,
    title: 'Haridwar and Mussoorie',
    img: '/thumbnails/haridwar-mussorie.jpg',
    long: 'Ganga river',
  },
  {
    id: 4,
    title: 'Duars',
    img: '/thumbnails/duars.jpg',
    long: 'Jungle Safari',
  },
  {
    id: 5,
    title: 'Darjeeling and offbeat',
    img: '/thumbnails/darjeeling-and-offbeat.jpg',
    long: 'Tea gardens',
  },
  {
    id: 6,
    title: 'Gangtok',
    img: '/thumbnails/gangtok.jpg',
    long: 'Himalayan town views',
  },
  {
    id: 7,
    title: 'Silk route',
    img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    long: 'Mountain road of silk route (east sikkim)',
  },
  {
    id: 8,
    title: 'Goa',
    img: '/thumbnails/goa.jpg',
    long: 'Goa beach',
  },
];

const WHATSAPP_NUMBER = '918697524868';

export default function UpcomingTours() {
  const [bookingTour, setBookingTour] = useState(null);

  const openBooking = (tour) => {
    setBookingTour(tour);
  };

  const openEnquiry = (tour) => {
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
