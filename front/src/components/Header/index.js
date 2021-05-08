// NPM import
import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

// import
import './styles.scss';
import logo from './localETlogo.png'
import LoginForm from 'src/containers/LoginForm';
import NavLoggedIn from 'src/components/Header/navLoggedIn';
import NavLoggedOut from 'src/components/Header/navLoggedOut';

// Component
const Header = ({isLogged})=> {
  return(
  <div className='header'>
    <a href="/" className="headerLogo">
      <img src={logo} alt="localET logo" className="headerLogoImage"/>
      <h2 className="headerLogoBaseline">Ici, la baseline de localET</h2>
    </a>

    <Switch>

      <Route path="/login">
        {!isLogged && (<LoginForm />)}
      </Route> 

      <Route path="/">
      {isLogged ? <NavLoggedIn /> : <NavLoggedOut />}
      </Route> 



    </Switch>

  </div>

)};

Header.propTypes = {
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
};

// Header.defaultProps = {
//   isLogged: true,
// };

// == Export
export default Header;
