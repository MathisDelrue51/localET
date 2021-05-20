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
    <div className="addCuriosLink__plus">+</div>
    <div className="addCuriosLink__text">Créer une CuriosET</div>
  </NavLink>
);
 
export default CreateEventButton;
