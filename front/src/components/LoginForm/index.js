import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';

import './styles.scss';

const LoginForm = () => (
    <div >
      <form className="loginForm" action="">
        <Field 
        name="email"
        placeholder="adresse e-mail"
        label=""
        />
        <Field 
        name="password"
        placeholder="mot de passe"
        label=""
        />
        <SubmitButton 
        buttonName="Ok !"/>
      </form>
    </div>
        
);



export default LoginForm;
