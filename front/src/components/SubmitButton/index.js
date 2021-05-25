// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Component
const SubmitButton = ({ buttonName }) => (
  <div className="submit">
    <button className="submit__button" type="submit">{buttonName}</button>
  </div>
);

SubmitButton.propTypes = {
  /** name of this specific button */
  buttonName: PropTypes.string.isRequired,
};

// == Export
export default SubmitButton;
