import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { NavLink } from 'react-router-dom';

import { MapPin, Calendar } from 'react-feather';

const ProfilePage = ({
  email, pseudo, profileList, displayEvent,
}) => (
  <div className="container">
    <NavLink to="/" className="link">
      Retourner à l'accueil
    </NavLink>
    <h1 className="componentTitle">
      Mon Profil LocalET
    </h1>
    <div className="profileInformation">
      <h2 className="profileElementTitle">
        Pseudo
      </h2>
      <p className="elementContent"> {pseudo}</p>
      <h2 className="profileElementTitle">
        E-mail
      </h2>
      <p className="elementContent"> {email} </p>
      <h2 className="profileElementTitle">
        Mot de Passe
      </h2>
      <p className="elementContent"> &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; </p>
    </div>
    <div className="myCuriosets">
      <h1 className="componentTitle">
        Mes curiosETs
      </h1>
      {
      profileList.map((element) => {
        console.log(element.id);
        return (
          <div className="curioset" key={element.id}>
            <div className="row1">
              <h2 className="curiosetTitle">
                {element.title}
              </h2>
              <p className="category">
                {element.type}
              </p>
            </div>
            <div className="row2">
              <div className="curiosetInformation">
                <div className="place">
                  <MapPin size={25} className="iconInfo" />
                  <p>{element.address}</p>
                </div>
                <div className="agenda">
                  <Calendar size={25} className="iconInfo" />
                  <p>{element.agenda}</p>
                </div>
              </div>

              <button
                className="theButton"
                type="button"
                value={element.id}
                onClick={(evt) => {
                  console.log(evt.target.value);
                  displayEvent(evt.target.value);
                }}
              >Voir
              </button>

            </div>
          </div>
        );
      })
    }
    </div>
  </div>
);

ProfilePage.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  profileList: PropTypes.array.isRequired,
};

export default ProfilePage;
