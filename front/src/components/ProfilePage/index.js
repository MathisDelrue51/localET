import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { MapPin } from 'react-feather';
import { Calendar } from 'react-feather';

const ProfilePage = ({ email, pseudo, profileList }) => (
  <div className="container">
    <div className="componentTitle">
      Mon Profil LocalET
    </div>
    <div className="profileInformation">
      <div className="pseudo">
        Pseudo: {pseudo}
      </div>
      <div className="logins">
        <div>
          E-mail: {email}
        </div>
        <div>
          Mot de Passe: &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
        </div>
      </div>
    </div>
    <div className="myCuriosets">
      <div className="componentTitle">
        Mes curiosETs
      </div>
      {
      profileList.map((element) => (
        <div className="curioset" key={element.id}>
          <div className="row1">
            <div className="title">
              {element.title}
            </div>
            <div className="category">
              {element.type}
            </div>
          </div>
          <div className="row2">
            <div className="curiosetInformation">
              <div className="place"><MapPin size={25} className="iconInfo" />{element.address}</div>
              <div className="agenda"><Calendar size={25} className="iconInfo" />{element.agenda}</div>
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
