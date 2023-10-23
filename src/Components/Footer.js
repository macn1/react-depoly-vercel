import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/refund-policy">Refund Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Sanathana  Dharma Trust</p>
    </footer>
  );
};

export default Footer;
