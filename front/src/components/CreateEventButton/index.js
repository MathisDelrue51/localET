import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
 
const CreateEventButton = () => (
  <NavLink
    to="/createEvent"
    className="addCuriosLink"
    activeClassName="navLinkActive"
    exact
  >
    <span className="addCuriosLink__span">+</span> Créer une CuriosETs
  </NavLink>
);
 
export default CreateEventButton;
