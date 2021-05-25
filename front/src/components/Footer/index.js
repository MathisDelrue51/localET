// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './styles.scss';

// == Component
const Footer = () => (
  <div className="footer">
    <Link to="/contact" className="navLink">
      <h1>Contactez localETeam</h1>
    </Link>

    <h2 className="copyright">© 2021</h2>
  </div>
);

// == Export
export default Footer;


