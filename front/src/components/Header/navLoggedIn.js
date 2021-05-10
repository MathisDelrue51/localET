// NPM import
import React from 'react';

import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedIn = ()=> (
<nav>
  <NavLink
    to="/profile"
    className="navLink"
    activeClassName="navLinkActive"
    exact>
      Profil
  </NavLink>

  <NavLink
    to="/logout"
    className="navLink"
    activeClassName="navLinkActive"
    exact >
      Déconnexion
  </NavLink>
</nav>
);

// == Export
export default NavLoggedIn;
