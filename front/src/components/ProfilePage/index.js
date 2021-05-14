import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProfilePage = ({ email, pseudo }) => (
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
    <div className="myCuriosets">
      <h1>Vos Curiosets</h1>
      <div className="curioset">
        <h2>Titre:</h2><p>mon titre</p>
        <h2>Lieu</h2>
        <p>Chemoi</p>
        <h2>Agenda</h2>
        <p>toujours</p>
        <h2>Description</h2>
        <p>c'est la fête</p>
      </div>
    </div>
  </div>
);

ProfilePage.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default ProfilePage;
