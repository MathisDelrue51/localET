import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { NavLink } from 'react-router-dom';
import SubmitButton from 'src/components/SubmitButton'

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
  fetchEvent,
}) => {
  useEffect(() => {
    fetchEvent();
  }, []);
  return(
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
          <p>{description}</p>       
          <a href={website} id="website">{website}</a>
        </div>
        <div className="curiosetDetails">
          <div className="eventLocation">
            <h2>Où ?</h2>
            <p>{address}</p>
          </div>
          <div className="eventDate">
            <h2>Quand ?</h2>
            <p>{dateTime}</p>
          </div>
          <div className="eventDate">
            <h2>Combien ?</h2>
            <p>{price} €</p>
          </div>
      </div>

    
      <div className="update_delete">
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
     </div>
    </div>
  );
};

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
