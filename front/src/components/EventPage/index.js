import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { NavLink } from 'react-router-dom';
import SubmitButton from 'src/components/SubmitButton';

const EventPage = ({
  name,
  category,
  description,
  website,
  address,
  dateTime,
  price,
  longitude,
  latitude,
  isLogged,
}) => (
  <div className="event">
    <NavLink to="/" className="link">
      Retourner à l'accueil
    </NavLink>
    <div className="eventPart">
      <h1>{name}</h1>
      <h3>{category}</h3>
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
      to=""
      className="navLink"
      activeClassName="navLinkActive"
      exact
    >
      { isLogged && <SubmitButton buttonName="Modifier" className="h" />}
    </NavLink>
    <NavLink
      to=""
      className="navLink"
      activeClassName="navLinkActive"
      exact
    >
      { isLogged && <SubmitButton buttonName="Supprimer" />}
    </NavLink>
  </div>
);

EventPage.propTypes = {

};

export default EventPage;
