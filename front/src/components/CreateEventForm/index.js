import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';

import './styles.scss';

const CreateEventForm = ({
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

        {/* <div className="formColumn">
          <textarea
            name="description"
            placeholder=""
            rows="5"
            label="Description :"
            manageChange={changeField}
          >{description}
          </textarea>

          <h3>Catégorie : </h3>
          <Field
            name="categorie"
            placeholder=""
            type="radio"
            label="Art de rue"
            manageChange={changeField}
            value="art de rue"
          />
          <Field
            name="categorie"
            placeholder=""
            type="radio"
            label="Musique"
            manageChange={changeField}
            value="musique"
          />
          <Field
            name="categorie"
            placeholder=""
            type="radio"
            label="Expo"
            manageChange={changeField}
            value="expo"
          />
          <Field
            name="categorie"
            placeholder=""
            type="radio"
            label="Théâtre"
            manageChange={changeField}
            value="theatre"
          />

          <h3>Caractéristiques : </h3>
          <Field
            name="caracteristique"
            placeholder=""
            type="radio"
            label="Gratuit"
            manageChange={changeField}
            value="gratuit"
          />
          <Field
            name="caracteristique"
            placeholder=""
            type="radio"
            label="Payant"
            manageChange={changeField}
            value="payant"
          />

        </div> */}
        <SubmitButton
          buttonName="Ajouter"
          className="submitbutton"
        />

      </form>
      <div className="formSwitch">Pas encore inscrit ?<a href="/subscribe" className="navLink">S'inscrire</a></div>
    </div>
  );
};

CreateEventForm.propTypes = {
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
  // description: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  // handleCreateEvent: PropTypes.func.isRequired,
};

export default CreateEventForm;
