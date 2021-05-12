// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Component
const RadioField = ({
  value,
  name,
  placeholder,
  label,
  manageChange,
}) => {
  // manageChange will eventually be connected to actions
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field fieldHasContent' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type="radio"
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

RadioField.propTypes = {
  /** text used as value for the input */
  value: PropTypes.bool,
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

RadioField.defaultProps = {
  value: false,
};

// == Export
export default RadioField;
