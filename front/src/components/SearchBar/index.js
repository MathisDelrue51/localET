// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Field from 'src/components/Field';

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
  address: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
