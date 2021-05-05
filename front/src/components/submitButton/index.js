// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Component
const SubmitButton = ({buttonName}) => (
  <div className="submit">
    <button className="submit__button">{buttonName}</button>
  </div>
);

export default SubmitButton;
