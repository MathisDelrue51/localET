// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PlusCircle } from 'react-feather';

// == Import
import './styles.scss';

// == Component
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
  /** called when onClick is called on create event button */
  emptyEventState: PropTypes.func.isRequired,
};

// == Export
export default CreateEventButton;
