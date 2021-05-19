import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { NavLink } from 'react-router-dom';
import SubmitButton from 'src/components/SubmitButton';

const EventPage = ({
  name,
  type,
  description,
  website,
  address,
  dateTime,
  price,
  longitude,
  latitude,
  isLogged,
  handleDelete,
}) => (
  <div className="event">
    <NavLink to="/" className="link">
      Retourner à l'accueil
    </NavLink>
    <div className="eventPart">
      <h1>{name}</h1>
      <h3>{type}</h3>
    </div>

    <div className="eventPart">
      <h2>Quoi ?</h2>
      <p>{description}</p>
      <a href={website}>Voir le site web</a>
    </div>
    <div className="eventPart eventLocation">
      <h2>Où ?</h2>
      <img src="#" alt="#" />
      <p>{address}</p>
    </div>

    <div className="eventPart eventDatePrice">
      <div className="eventDate">
        <h2>Quand ?</h2>
        <p>{dateTime}</p>
      </div>
      <div className="eventDate">
        <h2>Comment ?</h2>
        <p>{price}</p>
      </div>
    </div>
    <NavLink
      to="/updateEvent"
      className="navLink"
      activeClassName="navLinkActive"
      exact
    >
      { isLogged && <SubmitButton buttonName="Modifier" className="h" />}
    </NavLink>
    <NavLink
      to="/"
      className="navLink"
      activeClassName="navLinkActive"
      exact
      onClick={handleDelete}
    >
      { isLogged && <SubmitButton buttonName="Supprimer" />}
    </NavLink>
  </div>
);

EventPage.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  isLogged: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

EventPage.defaultProps = {
  longitude: 0,
  latitude: 0,
};

export default EventPage;
