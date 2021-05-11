import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';

import './styles.scss';

const LoginForm = ({
  name,
  address,
  placeName,
  website,
  dateTime,
  description,
  changeField,
  handleCreateEvent,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreateEvent();
  };

  return (
    <div className="createEvent">
      <form className="createEventForm" onSubmit={handleSubmit}>
        <div className="formColumn">
          <Field
            name="name"
            placeholder=""
            label="Nom de la curiosET :"
            manageChange={changeField}
            value={name}
          />

          <Field
            name="address"
            placeholder=""
            label="Adresse :"
            manageChange={changeField}
            value={address}
          />

          <Field
            name="placeName"
            placeholder=""
            label="Nom du lieu :"
            manageChange={changeField}
            value={placeName}
          />

          <Field
            name="website"
            placeholder=""
            label="Site web :"
            manageChange={changeField}
            value={website}
          />

          <Field
            name="dateTime"
            placeholder=""
            label="Date et heure :"
            manageChange={changeField}
            value={dateTime}
          />
        </div>

        <div className="formColumn">
          <Field
            name="description"
            placeholder=""
            label="Description :"
            manageChange={changeField}
            value={description}
          />
          <Field
            name="description"
            placeholder=""
            type="radio"
            label="Description :"
            manageChange={changeField}
            value={description}
          />
        </div>
        <SubmitButton
          buttonName="Ajouter"
          className="submitbutton"
        />

      </form>
      <div className="formSwitch">Pas encore inscrit ?<a href="/subscribe" className="navLink">S'inscrire</a></div>
    </div>
  );
};

LoginForm.propTypes = {
  /** value for the name */
  name: PropTypes.string.isRequired,
  /** value for the address */
  address: PropTypes.string.isRequired,
  /** value for the name of the place */
  placeName: PropTypes.string.isRequired,
  /** value for the website */
  website: PropTypes.string.isRequired,
  /** value for the dateTime */
  dateTime: PropTypes.string.isRequired,
  /** value for the description */
  description: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleCreateEvent: PropTypes.func.isRequired,
};

export default LoginForm;
