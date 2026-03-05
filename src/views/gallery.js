import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { galleryPhotos } from "../data/galleryPhotos";
import "./gallery.css";

function GalleryCard({ item }) {
  return (
    <article className="gallery-card-page">
      <img
        src={item.src}
        alt="Travel gallery"
        className="gallery-image-page"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = item.fallback;
        }}
      />
    </article>
  );
}

export default function Gallery() {
  return (
    <div className="gallery-page">
      <Helmet>
        <title>Gallery | Viewfinder Travel Solutions</title>
      </Helmet>

      <Navigation />

      <main className="gallery-main-page">
        <section className="gallery-header-page">
          <h1>Travel Gallery</h1>
        </section>

        {galleryPhotos.length === 0 ? (
          <section className="gallery-empty-state">
            <p>No photos added yet.</p>
          </section>
        ) : (
          <section className="gallery-grid-page">
            {galleryPhotos.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
