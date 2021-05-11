import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';

import './styles.scss';

const RegisterForm = ({
  email,
  password,
  pseudo,
  changeField,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };

  return (
    <div className="register">
      <h1 className="register__title">Inscription</h1>
      <h2 className="register__subtitle">Binevenue chez localET !</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <Field
          name="email"
          placeholder="adresse e-mail"
          label=""
          manageChange={changeField}
          value={email}
        />
        <Field
          name="password"
          placeholder="mot de passe"
          label=""
          manageChange={changeField}
          value={password}
        />
        <Field
          name="pseudo"
          placeholder="pseudo"
          label=""
          manageChange={changeField}
          value={pseudo}
        />
        <SubmitButton
          buttonName="S'inscrire"
        />
      </form>
      <p>Déjà inscrit ? <span><a href="/login">Connexion</a></span></p>
    </div>
  );
};

RegisterForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** value for the alias */
  pseudo: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired
};

export default RegisterForm;
