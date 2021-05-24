import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

import { PlusCircle } from 'react-feather';

const CreateEventButton = ({emptyEventState}) => (
  <NavLink
    to="/createEvent"
    className="addCuriosLink"
    activeClassName="navLinkActive"
    exact
    onClick={emptyEventState}
  >
    <PlusCircle size={40} className="addCuriosLink__plus" />
    <div className="addCuriosLink__text">Créer une CuriosET</div>
  </NavLink>
);

CreateEventButton.propTypes = {
  emptyEventState: PropTypes.func.isRequired,
};
 
export default CreateEventButton;
