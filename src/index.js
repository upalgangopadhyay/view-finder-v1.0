import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Gallery from './views/gallery';
import PlanYourTour from './views/planYourTour';
import Testimonials from './views/testimonials';
import AboutUs from './views/aboutUs';

import './index.css';
import Home from './views/home';
import { initAnalytics, trackPageView } from './lib/analytics';

function AnalyticsListener() {
  const location = useLocation();
  const hasTrackedInitial = useRef(false);

  useEffect(() => {
    if (!hasTrackedInitial.current) {
      hasTrackedInitial.current = true;
      return;
    }

    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
}

const App = () => {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <Router>
      <AnalyticsListener />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plan-your-tour" element={<PlanYourTour />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
