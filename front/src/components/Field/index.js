// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Component
const Field = ({
  value,
  type,
  name,
  placeholder,
  label,
  manageChange,
}) => {
  // manageChange will eventually be connected to actions
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
    // console.log(`Dans handleChange ${evt}`);
  };

  const inputId = `field-${name}`;

  return (
    <div className="field">
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="fieldInput"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="fieldLabel"
      >
        {label}
      </label>
    </div>
  );
};

Field.propTypes = {
  /** text used as value for the input */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** type of the input */
  type: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.string.isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
