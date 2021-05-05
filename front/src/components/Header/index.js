// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// import { NavLink } from 'react-router-dom';

// import
import './styles.scss';
import logo from './localETlogo.png'
import LoginForm from 'src/containers/LoginForm';

// Component
const Header = ()=> (
  <div className='header'>
    <div className='headerLogo'>
      <img src={logo} alt="localET logo" className='headerLogoImage'/>
      <h2 className='headerLogoBaseline'>Ici, la baseline de localET</h2>
    </div>
    <LoginForm />

  </div>

);

// == Export
export default Header;
