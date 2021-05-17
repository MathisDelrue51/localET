import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProfilePage = ({ email, pseudo, profileList }) => (
  <div className="container">
    <div>
      Mon Profil LocalET
    </div>
    <div className="profileInformation">
      <div className="pseudo">
        Pseudo: {pseudo}
      </div>
      <div className="identifiants">
        <div>
          E-mail: {email}
        </div>
        <div>
          Mot de Passe: &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
        </div>
      </div>
    </div>
    {
      profileList.map((element) => (
        <div className="curioset">
          <div className="information">
            <div className="row-1">
              {element.title}
            </div>
            <div className="row-2">
              <div className="place">{element.address}</div>
              <div className="agenda">{element.agenda}</div>
            </div>
            <div className="row-3">
              {element.description}
            </div>
          </div>
          <div className="accessButton">
            <button className="access__button" type="button">Accéder à la page</button>
          </div>
        </div>
      ))
    }
  </div>
);

ProfilePage.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  profileList: PropTypes.array.isRequired,
};

export default ProfilePage;
