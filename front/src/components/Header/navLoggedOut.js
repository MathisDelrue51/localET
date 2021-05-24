// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedOut = ({ closeMenu }) => (
  <nav className="nav">
    <NavLink
      to="/subscribe"
      className="navLink"
      activeClassName="navLinkActive"
      exact
      onClick={() => {
        closeMenu();
      }}
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

NavLoggedOut.propTypes = {
  /** handle click on register - mobile */
  closeMenu: PropTypes.func.isRequired,
};

// == Export
export default NavLoggedOut;
