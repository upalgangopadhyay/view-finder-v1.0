import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./testimonials.css";

const GOOGLE_REVIEWS_URL = "https://share.google/0XNyYR9om42HH3M03";

const testimonials = [
  {
    name: "Anasua Dutta",
    meta: "3 reviews, 4 photos",
    time: "4 months ago",
    text: "I got a very good experience with Viewfinder during my Kashmir and North Bengal trip. I felt very safe during my solo travel and they always ensured safety and comfort first. They provided comfortable homestays and hotels, polite drivers, and food options as per choice. For me, it is a reliable choice.",
    likes: 1,
  },
  {
    name: "Moupia Haldar",
    meta: "1 review, 2 photos",
    time: "2 months ago",
    text: "My mother and relatives went on a Kerala-Kanyakumari trip in December 2025 with Viewfinder Travel Solutions. They enjoyed the trip very much with excellent hospitality, care, and cooperation. This review is on behalf of them and I strongly recommend Viewfinder Travel Solutions as a tour companion.",
    likes: 3,
  },
  {
    name: "Eshita Das",
    meta: "2 reviews",
    time: "5 months ago",
    text: "We booked a customized tour to Dooars. Thanks to Viewfinder Travel Solutions for arranging everything and conducting the tour smoothly. They are always available over call. Hotels, food, and car were provided as per demand. Their behavior is very good and friendly.",
    likes: 2,
  },
  {
    name: "amiyanimai das",
    meta: "Local Guide, 3 reviews, 9 photos",
    time: "11 months ago",
    text: "Last February we went to the Silk Route tour of Sikkim. It was a very nice experience. Car arrangement, each homestay, and food were all very good. Thank you Viewfinder Travel Solutions.",
    likes: 3,
  },
  {
    name: "Debrup Dey",
    meta: "Local Guide, 9 reviews",
    time: "2 months ago",
    text: "Awesome service, exceptional food, outstanding room standards, and excellent sightseeing support from one spot to another. Overall a marvelous experience to visit a new place with family and friends.",
    likes: 1,
  },
  {
    name: "AYAN GUPTA",
    meta: "4 reviews, 1 photo",
    time: "11 months ago",
    text: "Had an amazing experience to Silk Route, Lava, and Rishop with Viewfinder Travel Solutions. Their planning was seamless, making the trip smooth and stress-free. Special thanks to Urmidi and Saibal da for their well-organized itinerary and quick support.",
    likes: 3,
  },
  {
    name: "Jayanti Chakraborty",
    meta: "6 reviews",
    time: "3 months ago",
    text: "Wonderful travel experience with Viewfinder Travel Solutions. Special thanks to Urmi di and Saibal da for such a nicely planned tour.",
    likes: 2,
  },
  {
    name: "Nafisha Islam",
    meta: "4 reviews, 2 photos",
    time: "2 months ago",
    text: "Thank you didi. It was a beautiful trip.",
    likes: 1,
  },
  {
    name: "Lalita Samaddar",
    meta: "2 reviews",
    time: "11 months ago",
    text: "I had an amazing stay in Dooars. Both Urmi and Shaibal da are very caring. Thanks to Viewfinder for providing such a beautiful homestay in the lap of nature and delicious dishes.",
    likes: 3,
  },
  {
    name: "Debabrata Ghosh",
    meta: "1 review, 1 photo",
    time: "11 months ago",
    text: "Viewfinder are very caring to their customers. My wife and I have toured 4 times with them. Their arrangement for lodging and food are very good. Both Saibal and Urmi are very responsible for their customers.",
    likes: 2,
  },
  {
    name: "Bhaskar Roy Choudhury",
    meta: "1 review",
    time: "11 months ago",
    text: "Good experience traveling with Viewfinder Travel Solutions. They are very caring and arrangements of lodging and food are very good. Viewfinder feels like a complete family while traveling.",
    likes: 3,
  },
  {
    name: "ABHISHEK MANDAL",
    meta: "Local Guide, 29 reviews, 1 photo",
    time: "2 months ago",
    text: "Clear communication and well-organized tours arranged by them. Wish them all the best for the future.",
    likes: 1,
  },
  {
    name: "Sumana Ghosh",
    meta: "4 reviews",
    time: "10 months ago",
    text: "I am completely blown away by the effort put into making our trip magical. Every moment was pure joy and I am full of gratitude for the incredible experience. Thank you Urmi and Shaibal da.",
    likes: 1,
  },
  {
    name: "Nihar Pramanick",
    meta: "1 review",
    time: "11 months ago",
    text: "First time we went with Viewfinder for a Purulia tour by AC bus and enjoyed a lot. The organizers provided good hotel rooms, food, and caring support.",
    likes: 1,
  },
  {
    name: "Kajari Biswas",
    meta: "Local Guide, 13 reviews, 26 photos",
    time: "10 months ago",
    text: "Our Kashmir tour with Viewfinder Travel Solutions was mesmerizing. The itinerary was well organized and relaxing. Hotels were mostly 3 to 4 star and food was delicious and homely. They took personal care throughout the trip.",
    likes: 1,
  },
  {
    name: "Swapnashis Sengupta",
    meta: "Local Guide, 18 reviews, 12 photos",
    time: "11 months ago",
    text: "Very good behavior from the proprietors. They find great tourist spots and provide good hotel rooms and food. Co-travelers in their team are also very good.",
    likes: 2,
  },
  {
    name: "Anindita Roychoudhury Nandi",
    meta: "Local Guide, 8 reviews, 1 photo",
    time: "11 months ago",
    text: "Had a wonderful experience with Viewfinder because they professionally managed tours with a personal touch. Looking forward to more trips with them.",
    likes: 1,
  },
];

function Testimonials() {
  return (
    <div className="testimonials-page">
      <Helmet>
        <title>Testimonials | Viewfinder Travel Solutions</title>
      </Helmet>

      <Navigation />

      <main className="testimonials-main">
        <section className="testimonials-header-block">
          <h1>Customer Testimonials</h1>
          <p>Real feedback from travelers who explored with Viewfinder Travel Solutions.</p>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer noopener" className="google-link">
            View Google Reviews
          </a>
        </section>

        <section className="testimonials-grid-page">
          {testimonials.map((item) => (
            <article key={`${item.name}-${item.time}`} className="testimonial-card-page">
              <div className="testimonial-top-line">
                <h2>{item.name}</h2>
                <span>{item.time}</span>
              </div>
              <p className="testimonial-meta-page">{item.meta}</p>
              <p className="testimonial-text-page">{item.text}</p>
              <p className="testimonial-like-page">Helpful: {item.likes}</p>
            </article>
          ))}
        </section>

        <section className="testimonials-footer-cta">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer noopener" className="google-link">
            Read More Reviews on Google
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Testimonials;
