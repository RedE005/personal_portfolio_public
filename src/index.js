import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Home from './Home.js';
import Footer from './Footer.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("header_sec"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const content = ReactDOM.createRoot(document.getElementById("content"));
content.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer_section"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)

reportWebVitals();
