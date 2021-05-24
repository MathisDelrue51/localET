// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './styles.scss';

// const Footer = () => (
//   <div className="footer">
//     <a href="/contact">Contact</a><span>Nous - 2021</span>
//   </div>
// );

const Footer = () => (
  <Link to="/contact">
    Contactez Nous
  </Link>
)

// const Footer = () => {
//    <NavLink
//    to="/contact"
//    className="footer"
//    activeClassName="navLinkActive"
//    exact
//    >
//    <a>Contactez Nous - 2021</a>
//    </NavLink>
// }

export default Footer;


