import React from 'react';
import './home.css'; // reuse existing styles or create gallery-specific css if needed

export default function Gallery() {
  return (
    <main className="view-container">
      <h1>Gallery</h1>
      <p>Placeholder gallery page. Add images or a gallery component here.</p>
      <div className="gallery-grid">
        {/* add offline/public images or components here */}
      </div>
    </main>
  );
}