import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './upcomingTours.css';

function TourDetails({ tour, onClose, onBook }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') handleClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  function handleClose() {
    setClosing(true);
    setTimeout(() => onClose(), 250);
  }

  function onOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  const content = (
    <div className={`td-overlay ${closing ? 'td-closing' : ''}`} onClick={onOverlayClick}>
      <div className={`td-content ${closing ? 'td-content-closing' : ''}`} role="dialog" aria-modal="true">
        <button className="td-close" aria-label="Close details" onClick={handleClose}>x</button>
        <div className="td-media">
          <img src={tour.img} alt={tour.title} />
        </div>
        <div className="td-body">
          <h2>{tour.title}</h2>
          <p className="td-long">{tour.long || 'Full tour details will appear here.'}</p>
          <div className="td-actions">
            <button className="ut-btn ut-btn-primary" onClick={() => onBook(tour)}>Book now</button>
            <button className="ut-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

export default TourDetails;
