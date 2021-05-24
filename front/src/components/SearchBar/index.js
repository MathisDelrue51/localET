// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Field from 'src/components/Field';

// == Component
const SearchBar = ({
  address, changeField, handleSearch, placeholder,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };
  return (
    <div className="searchBar">
      <form className="searchBar__form" onSubmit={handleSubmit}>
        <Field
          name="address"
          placeholder={placeholder}
          label=""
          manageChange={changeField}
          value={address}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  /** value for the address */
  address: PropTypes.string.isRequired,
  /** value for the field placeholder */
  placeholder: PropTypes.string.isRequired,
  /** called when field content is modified, two parameters:
   * - newValue
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when search is submitted */
  handleSearch: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
