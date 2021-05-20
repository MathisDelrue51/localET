// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Component
const RadioField = ({
  value,
  name,
  category,
  manageChecked,
  id,
  label,
}) => {
  // manageChecked will eventually be connected to actions
  const handleChecked = (evt) => {
    manageChecked(evt.target.value, name);
    console.log(`Dans handleChecked ${evt}`);
    console.log(evt);
    console.log('ma catégorie :', category);
  };

  return (
    <div className="radioField">
      <label htmlFor={id}>
        <input
          id={id}
          value={value}
          onChange={handleChecked}
          type="radio"
          className="fieldInput"
          name={name}
          defaultChecked={category === value}
        />
        {label}
      </label>
    </div>
  );
};

RadioField.propTypes = {
  /** text used as value for the input */
  value: PropTypes.number.isRequired,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** category_id */
  category: PropTypes.number.isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** text used as common identifier for all radio buttons belongin to the
   * same group
   */
  id: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChecked: PropTypes.func.isRequired,
};

// == Export
export default RadioField;
