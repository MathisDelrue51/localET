import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';
import TextAreaField from 'src/components/TextAreaField';
import RadioField from 'src/components/RadioField';

import './styles.scss';

const CreateEventForm = ({
  name,
  address,
  website,
  dateTime,
  price,
  description,
  artDeRue,
  expo,
  changeField,
  handleCreateEvent,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreateEvent();
  };

  return (
    <div className="createEvent">
      <form onSubmit={handleSubmit}>
        <div className="createEventForm">
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
            <TextAreaField
              name="description"
              placeholder="Votre description de l'évènement..."
              rows="5"
              label="Description :"
              manageChange={changeField}
              value={description}
            />

            <RadioField
              name="artDeRue"
              onChange={changeField}
              value={artDeRue}
            />

            <RadioField
              name="expo"
              onChange={changeField}
              value={expo}
            />

            {/* <h3>Catégorie : </h3>
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
          /> */}

            <Field
              name="price"
              placeholder=""
              type="number"
              label="Prix :"
              manageChange={changeField}
              value={price}
            />

          </div>
        </div>
        <SubmitButton
          buttonName="Ajouter"
          className="submitbutton"
        />
      </form>
    </div>
  );
};

CreateEventForm.propTypes = {
  /** value for the name */
  name: PropTypes.string.isRequired,
  /** value for the address */
  address: PropTypes.string.isRequired,
  /** value for the website */
  website: PropTypes.string.isRequired,
  /** value for the dateTime */
  dateTime: PropTypes.string.isRequired,
  /** value for the dateTime */
  price: PropTypes.string.isRequired,
  /** value for the description */
  description: PropTypes.string.isRequired,
  /** value for the artDeRue */
  artDeRue: PropTypes.bool.isRequired,
  /** value for the artDeRue */
  expo: PropTypes.bool.isRequired,
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
