import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Gallery from './views/gallery';


import './index.css';
import Home from './views/home';
// import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Optional: fallback route for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* If you want to redirect unmatched routes to home instead: */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
