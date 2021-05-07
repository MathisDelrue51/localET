// NPM import
import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, NavLink } from 'react-router-dom';

// import
import './styles.scss';
import logo from './localETlogo.png'
import LoginForm from 'src/containers/LoginForm';

// Component
const Header = ({isLogged})=> (
  <div className='header'>
    <a href="/" className="headerLogo">
      <img src={logo} alt="localET logo" className='headerLogoImage'/>
      <h2 className='headerLogoBaseline'>Ici, la baseline de localET</h2>
    </a>

    <Switch>
      <Route path="/login" exact>
        <LoginForm />
      </Route>

      <Route path="/">
        <nav>
          <NavLink
          >

          </NavLink>
        </nav>
      </Route>

    </Switch>

  </div>

);

Header.propTypes = {
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
};

// == Export
export default Header;
