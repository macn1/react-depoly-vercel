import React from 'react';
import './Footer.css'
// import Privacy from './Privacy';
// import {
//   BrowserRouter,
  
//   Route,
//   Routes,
// } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'> 
    <footer >
      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/refund">Refund Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Sanathana  Dharma Trust</p>
    </footer>
    </div>
  );
};

export default Footer;
