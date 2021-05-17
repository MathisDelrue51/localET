import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProfilePage = ({ email, pseudo, list }) => (
  <div>
    <div className="profile">
      <h1>Votre profil</h1>
      <h2>Pseudo</h2>
      <p>{pseudo}</p>
      <h2>E-mail</h2>
      <p>{email}</p>
      <h2>Mot de Passe</h2>
      <p>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</p>
    </div>
    {
      list.map((myCuriosets) => (
        <div className="curioset">
          <div className="information">
            <div className="row-1">
              <h2>{myCuriosets.title}</h2>
            </div>
            <div className="row-2">
              <h2 className="place">Lieu</h2>
              <h2 className="agenda">Agenda</h2>
            </div>
            <div className="row-3">
              <h2>Description</h2>
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
  list: PropTypes.array.isRequired,
};

export default ProfilePage;
