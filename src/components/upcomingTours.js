import React, { useState } from 'react';
import './upcomingTours.css';
import TourDetails from './tourDetails';
import kashmirImg from '../assets/images/kashmir.jpg';

const tours = [
  {
    id: 1,
    title: 'Kashmir Snow Trip',
    date: 'TBD',
    price: 'TBD',
    img: kashmirImg,
    long: 'Nighttime stargazing with ',
  },
  {
    id: 2,
    title: 'Historic City Walk',
    date: '2025-12-12',
    price: '$49',
    img: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 3,
    title: 'Mountain Lake Kayak',
    date: '2026-01-08',
    price: '$99',
    img: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 4,
    title: 'Countryside Cycling',
    date: '2026-01-20',
    price: '$69',
    img: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 5,
    title: 'Desert Stargazing',
    date: '2026-02-03',
    price: '$129',
    img: 'https://picsum.photos/400/300?random=5'
  }
];

export default function UpcomingTours() {
  const [selected, setSelected] = useState(null);

    return (
    <section id="upcoming-tours" className="upcoming-tours">
      <h2 className="ut-title">Upcoming Tours</h2>
      <div className="ut-grid">
        {tours.map(t => (
          <article key={t.id} className="ut-card">
            <div className="ut-image-wrap">
              <img className="ut-image" src={t.img} alt={t.title} />
            </div>
            <div className="ut-body">
              <h3 className="ut-card-title">{t.title}</h3>
              <p className="ut-meta">
                <span className="ut-date">{t.date}</span>
                <span className="ut-price">{t.price}</span>
              </p>
              <p className="ut-desc">A memorable small-group experience — limited seats available.</p>
              <div className="ut-actions">
                <button className="ut-btn ut-btn-primary">Book</button>
                <button className="ut-btn" onClick={() => setSelected(t)}>Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <TourDetails
          tour={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}