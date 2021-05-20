import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

import { PlusCircle } from 'react-feather';

const CreateEventButton = () => (
  <NavLink
    to="/createEvent"
    className="addCuriosLink"
    activeClassName="navLinkActive"
    exact
  >
    <PlusCircle size={40} className="addCuriosLink__plus" />
    <div className="addCuriosLink__text">Créer une CuriosET</div>
  </NavLink>
);
 
export default CreateEventButton;
