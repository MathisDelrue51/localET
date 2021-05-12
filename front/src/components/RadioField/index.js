// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Component
const RadioField = ({
  value,
  name,
  manageChecked,
  radioFormFor,
  label,
}) => {
  // manageChange will eventually be connected to actions
  const handleChecked = (evt) => {
    manageChecked(evt.target.value, name);
  };

  return (
    <div className="radioField">
      <label htmlFor={radioFormFor}>
        <input
        // React - state
          value={value}
          onChange={handleChecked}
          type="radio"
          className="fieldInput"
          name={name}
        />
        {label}
      </label>
    </div>
  );
};

RadioField.propTypes = {
  /** text used as value for the input */
  value: PropTypes.bool,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** text used as common identifier for all radio buttons belongin to the
   * same group
   */
  radioFormFor: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChecked: PropTypes.func.isRequired,
};

RadioField.defaultProps = {
  value: false,
};

// == Export
export default RadioField;
