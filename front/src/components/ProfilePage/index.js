import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProfilePage = ({email, pseudo}) => (
  <div className="profile">
    <h1>Votre profil</h1>
    <h2>Pseudo</h2>
    <p>{pseudo}</p>
    <h2>E-mail</h2>
    <p>{email}</p>
    <h2>Mot de Passe</h2>
    <p>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</p>
  </div>
);

ProfilePage.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired
}

export default ProfilePage;
