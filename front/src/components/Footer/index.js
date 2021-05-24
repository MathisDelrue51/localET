// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './styles.scss';

// == Component
const Footer = () => (
  <div className="footer">
    <div className="contact">
      <Link to="/contact">
        <h1>Contactez localETeam</h1>
      </Link>
    </div>
    <h2>© 2021</h2>
  </div>
);

// == Export
export default Footer;
