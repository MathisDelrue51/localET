import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';

import './styles.scss';

const LoginForm = ({
  email, 
  password, 
  changeField,
  handleLogin,
  isLogged
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
    return (
    <div >
      <form className="loginForm" onSubmit={handleSubmit}>
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
        <SubmitButton 
        buttonName="Ok !"/>
        {isLogged && (<div>Connecté !</div>)}
        {!isLogged && (<div>Pas connecté...</div>)}
      </form>
    </div>)
        
  };

LoginForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,

};

// LoginForm.defaultProps = {
//   isLogged: false,
// };

export default LoginForm;
