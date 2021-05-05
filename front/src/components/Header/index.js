// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// import { NavLink } from 'react-router-dom';

// import
import './styles.scss';
import logo from './localETlogo.png'

// Component
const Header = ()=> (
  <div className='header'>
    <div className='headerLogo'>
      <img src={logo} alt="localET logo" className='headerLogoImage'/>
      <h2 className='headerLogoBaseline'>Ici, la baseline de localET</h2>
    </div>
    <div>
      Ici bientot, la nav ! le monde ! l'infini !
    </div>

  </div>

);

// == Export
export default Header;
