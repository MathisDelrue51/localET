// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Field from "src/components/Field";

const SearchBar = ({address, changeField, handleSearch}) => {
  const handleSubmit= (evt) => {
    evt.preventDefault();
    handleSearch();
  };
  return(
  <div className="searchBar">
      <form className="searchBar__form" onSubmit={handleSubmit}>
        <Field 
        name="address"
        placeholder="Cherchez une ville..."
        label=""
        manageChange={changeField}
        value={address}
        />
      </form>
  </div>
  )
};

export default SearchBar;
