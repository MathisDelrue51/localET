// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedIn = ({
  pseudo, handleLogout, handleClick, id,
}) => {
  console.log(typeof pseudo);
  const path = `/profile/${id}`;
  return (
    <nav className="nav">
      <p className="welcomeMessage">
        Bonjour {pseudo} !
      </p>
      <NavLink
        to={path}
        className="navLink"
        activeClassName="navLinkActive"
        exact
        onClick={handleClick}
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
  /** id for profile path */
  id: PropTypes.string.isRequired,
  /** handle click on nav links */
  handleClick: PropTypes.func.isRequired,
};

// == Export
export default NavLoggedIn;
