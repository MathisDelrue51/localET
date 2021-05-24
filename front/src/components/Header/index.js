// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink, Route, Switch } from 'react-router-dom';

import { Menu } from 'react-feather';
import { X } from 'react-feather';

// import
import './styles.scss';
import LoginForm from 'src/containers/LoginForm';
import NavLoggedIn from 'src/containers/NavLoggedIn';
import NavLoggedOut from 'src/containers/NavLoggedOut';
import logo from 'src/assets/localETlogo.png';

// Component
const Header = ({ isLogged, openMenu, open, closeMenu }) => {
  const cssClassMenu = classNames({'menuOptions': !open }, { 'menuOptionsMobile': open });
  const cssClassMenuIcon = classNames({'burgerMenu': !open}, { 'burgerMenuOff': open });
  const closeButton = classNames({'closeButtonOff': !open}, {'closeButtonOn': open});
  console.log(open);
  return (

    <div className="header">

      <NavLink to="/" className="headerLogo">
        <img src={logo} alt="localET logo" className="headerLogoImage" />
        <h2 className="headerLogoBaseline">Guide culturel par les locaux, pour les ET</h2>
      </NavLink>

      <div className="menu">

        <Menu
          className={cssClassMenuIcon}
          size={48}
          onClick={() => {
            openMenu();
          }}
        />
        <div className={cssClassMenu}>
          <X
            className={closeButton}
            size={48}
            onClick={() => {
              closeMenu();
            }}
          />

          <Switch>

            <Route path="/login">
              {!isLogged ? <LoginForm /> : <NavLoggedIn />}
            </Route>

            <Route path="/">
              {isLogged ? <NavLoggedIn /> : <NavLoggedOut />}
            </Route>

          </Switch>
        </div>
      </div>
    </div>

  );
};
Header.propTypes = {
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
};

// == Export
export default Header;
