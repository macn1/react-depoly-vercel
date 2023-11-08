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
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontal centering
    alignItems: 'center',  
    marginBottom:'10px'   // Vertical centering
    // height: '100vh',         // Adjust to your needs
  };
  
  return (
    <div className='footer'> 
    <footer >
      <div className="footer-links">
        
        <Link to="/privacy">Privacy Policy</Link>
        <br />
        <Link to="/refund">Refund policy</Link>
        <br />
        <Link to="/terms">Terms of Service</Link>
      
      </div>
      <div className='text' style={centerStyle}>
      <p>&copy; {new Date().getFullYear()} Sanathana  Dharma Trust .All Rights Reserved</p>

      </div>
    </footer>
    </div>
  );
};

export default Footer;
