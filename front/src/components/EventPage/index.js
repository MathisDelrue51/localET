// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MapPin, Calendar, DollarSign } from 'react-feather';

// == Import
import './styles.scss';
import SubmitButton from 'src/components/SubmitButton';

// == Component
const EventPage = ({
  name,
  type,
  description,
  website,
  address,
  dateTime,
  price,
  idEventAuthor,
  idUser,
  isLogged,
  handleDelete,
  fetchEvent,
}) => {
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <div className="event">
      <NavLink to="/" className="link">
        Retourner sur la carte
      </NavLink>
      <div className="eventTitle">
        <h1>{name}</h1>
        <h3>{type}</h3>
      </div>

      <div className="curiosetContainer">
        <div className="eventPart">
          <h2>Quoi ?</h2>
          <p className="description">{description}</p>
          <a href={website} id="website">{website}</a>
        </div>
        <div className="curiosetDetails">
          <div className="eventLocation">
            <h2>Où ?</h2>
            <div className="place">
              <MapPin size={25} className="iconInfo" />
              <p>{address}</p>
            </div>
          </div>
          <div className="eventDate">
            <h2>Quand ?</h2>
            <div className="date">
              <Calendar size={25} className="iconInfo" />
              <p>{dateTime}</p>
            </div>
          </div>
          <div className="price">
            <h2>Combien ?</h2>
            <div className="dollar">
              <DollarSign size={25} className="iconInfo" />
              <p>{price} </p>
            </div>
          </div>

        </div>

      </div>
      <div className="update_delete">
        <NavLink
          to="/updateEvent"
          className="navLink"
          activeClassName="navLinkActive"
          exact
        >
          { (isLogged && (idEventAuthor === idUser)) && <SubmitButton buttonName="Modifier" className="navButton" />}
        </NavLink>
        <NavLink
          to="/"
          className="navLink_delete navLink"
          activeClassName="navLinkActive"
          exact
          onClick={handleDelete}
        >
          { (isLogged && (idEventAuthor === idUser)) && <SubmitButton buttonName="Supprimer" className="navButton"/>}
        </NavLink>
      </div>
    </div>
  );
};

EventPage.propTypes = {
  /** value for the name */
  name: PropTypes.string.isRequired,
  /** value for the type */
  type: PropTypes.string.isRequired,
  /** value for the description */
  description: PropTypes.string.isRequired,
  /** value for the website */
  website: PropTypes.string,
  /** value for the address */
  address: PropTypes.string.isRequired,
  /** value for the date and time */
  dateTime: PropTypes.string.isRequired,
  /** value for the price */
  price: PropTypes.number.isRequired,
  /** Is user logged ? */
  isLogged: PropTypes.bool.isRequired,
  /** called when delete button is clicked */
  handleDelete: PropTypes.func.isRequired,
  /** id of the user that created the event */
  idEventAuthor: PropTypes.number.isRequired,
  /** id of the connected user */
  idUser: PropTypes.number.isRequired,
  /** called when page is loading to get infos of the event, one parameter :
   * -idEvent
   */
  fetchEvent: PropTypes.func.isRequired,
};

EventPage.defaultProps = {
  longitude: 0,
  latitude: 0,
  website: '',
};

// == Export
export default EventPage;
