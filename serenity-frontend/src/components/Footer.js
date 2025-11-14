import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-links">
          <a href="#">À propos</a>
          <a href="#">Aide</a>
          <a href="#">Presse</a>
          <a href="#">API</a>
          <a href="#">Confidentialité</a>
          <a href="#">Conditions</a>
      </div>
      <div className="footer-copyright">
          &copy; {new Date().getFullYear()} SERENITY
      </div>
    </footer>
  );
};

export default Footer;