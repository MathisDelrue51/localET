// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedIn = ({ pseudo, handleLogout }) => {
  console.log(typeof pseudo);
  return (
    <nav className="nav">
      <p>
        Bonjour {pseudo} !
      </p>
      <NavLink
        to="/profile"
        className="navLink"
        activeClassName="navLinkActive"
        exact
      >
        Profil
      </NavLink>

      <NavLink
        to="/logout"
        className="navLink"
        activeClassName="navLinkActive"
        exact
        onClick={handleLogout}
      >
        Déconnexion
      </NavLink>
    </nav>
  );
};

NavLoggedIn.propTypes = {
  /** greets the user using his nickname */
  pseudo: PropTypes.string.isRequired,
  /** function that handles the logout of user */
  handleLogout: PropTypes.func.isRequired,
};

// == Export
export default NavLoggedIn;
