// NPM import
import React from 'react';

import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedOut = ()=> (
<nav>
          <NavLink
          to="/login"
          className="navLink"
          activeClassName="navLinkActive"
          exact>
            Connexion
          </NavLink>

          <NavLink
          to="/subscribe"
          className="navLink"
          activeClassName="navLinkActive"
          exact>
            S'inscrire
          </NavLink>
        </nav>
);

// == Export
export default NavLoggedOut;
