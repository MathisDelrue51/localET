// NPM import
import React from 'react';

import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedOut = () => (
  <nav className="nav">
    <NavLink
      to="/subscribe"
      className="navLink"
      activeClassName="navLinkActive"
      exact
    >
      S'inscrire
    </NavLink>

    <NavLink
      to="/login"
      className="navLink"
      activeClassName="navLinkActive"
      exact
    >
      Connexion
    </NavLink>
  </nav>
);

// == Export
export default NavLoggedOut;
