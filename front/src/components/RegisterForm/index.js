// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';
import './styles.scss';

// == Component
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
        <div className="block">
          <Field
            name="email"
            placeholder="adresse e-mail"
            label=""
            manageChange={changeField}
            value={email}
            required
          />
          <p>{emailError}</p>
        </div>
        <div className="block">
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
        </div>
        <div className="block">
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
        </div>
        <div className="block">
          <Field
            name="pseudo"
            placeholder="pseudo"
            label=""
            manageChange={changeField}
            value={pseudo}
            required
          />
          <p>{pseudoError}</p>
        </div>
        <SubmitButton
          buttonName="S'inscrire"
        />
      </form>
      <div className="connexionRedirect">Déjà inscrit ?
        <div className="loginNavlink">
          <NavLink
            to="/login"
            className="navLink"
            activeClassName="navLinkActive"
            exact
            onClick={() => {
              openMenu();
            }}
          >
            Connexion
          </NavLink>
        </div>

      </div>

    </div>
  );
};

RegisterForm.propTypes = {
  /** value for the email */
  email: PropTypes.string,
  /** value for the password */
  password: PropTypes.string,
  /** value for the password2 */
  password2: PropTypes.string,
  /** value for the alias */
  pseudo: PropTypes.string,
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
  email: '',
  password: '',
  password2: '',
  pseudo: '',
  emailError: '',
  passwordError: '',
  password2Error: '',
  pseudoError: '',
};

// == Export
export default RegisterForm;
