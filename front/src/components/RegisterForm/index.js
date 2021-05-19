import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';

import './styles.scss';

const RegisterForm = ({
  email,
  password,
  password2,
  pseudo,
  passwordError,
  password2Error,
  emailError,
  pseudoError,
  changeField,
  handleRegister,
  openMenu,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };

  return (
    <div className="register">
      <h1 className="register__title">Inscription</h1>
      <h2 className="register__subtitle">Bienvenue chez localET !</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <Field
          name="email"
          placeholder="adresse e-mail"
          label=""
          manageChange={changeField}
          value={email}
          required
        />
        <p>{emailError}</p>
        <Field
          name="password"
          type="password"
          placeholder="mot de passe"
          label=""
          manageChange={changeField}
          value={password}
          required
        />
        <p>{passwordError}</p>
        <Field
          name="password2"
          type="password"
          placeholder="confirmez le mot de passe"
          label=""
          manageChange={changeField}
          value={password2}
          required
        />
        <p>{password2Error}</p>
        <Field
          name="pseudo"
          placeholder="pseudo"
          label=""
          manageChange={changeField}
          value={pseudo}
          required
        />
        <p>{pseudoError}</p>
        <SubmitButton
          buttonName="S'inscrire"
        />
      </form>
      <p>Déjà inscrit ?
        <NavLink
          to="/login"
          className="navLink"
          activeClassName="navLinkActive"
          exact
          onClick={() => {
            openMenu();
          }}
        >Connexion
        </NavLink>

      </p>

    </div>
  );
};

RegisterForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** value for the password2 */
  password2: PropTypes.string.isRequired,
  /** value for the alias */
  pseudo: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  /** value for the errors */
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  password2Error: PropTypes.string,
  pseudoError: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  emailError: '',
  passwordError: '',
  password2Error: '',
  pseudoError: '',
};

export default RegisterForm;
