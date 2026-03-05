import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Gallery from './views/gallery';
import PlanYourTour from './views/planYourTour';
import Testimonials from './views/testimonials';
import AboutUs from './views/aboutUs';

import './index.css';
import Home from './views/home';

const App = () => {
  return (
    <Router>
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
