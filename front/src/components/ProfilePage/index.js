import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { MapPin } from 'react-feather';
import { Calendar } from 'react-feather';

const ProfilePage = ({ email, pseudo, profileList }) => (
  <div className="container">
    <h1 className="componentTitle">
      Mon Profil LocalET
    </h1>
    <div className="profileInformation">
      <h2 className="pseudo">
        Pseudo: {pseudo}
      </h2>
      <div className="logins">
        <h2>
          E-mail: {email}
        </h2>
        <h2>
          Mot de Passe: &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
        </h2>
      </div>
    </div>
    <div className="myCuriosets">
      <h1 className="componentTitle">
        Mes curiosETs
      </h1>
      {
      profileList.map((element) => (
        <div className="curioset" key={element.id}>
          <div className="row1">
            <h2 className="title">
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
            <div className="accessButton">
              <button className="theButton" type="button">Voir</button>
            </div>
          </div>
        </div>
      ))
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
