import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";
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
        
        <Link to="/privacy">privcy</Link>
        <br />
        <Link to="/refund">refund policy</Link>
        <br />
        <Link to="/terms">Terms of Service</Link>
      
      </div>
      <p>&copy; {new Date().getFullYear()} Sanathana  Dharma Trust</p>
    </footer>
    </div>
  );
};

export default Footer;
