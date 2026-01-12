import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import initScrollReveal from './scrollReveal.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// initialize scroll reveal after a tick so DOM is ready
setTimeout(() => {
  try { initScrollReveal(); } catch (e) { /* ignore */ }
}, 120);