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
  nameError,
  addressError,
  websiteError,
  dateTimeError,
  priceError,
  descriptionError,
  categoryError,
  changeField,
  changeChecking,
  handleCreateEvent,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreateEvent();
  };

  const radioGroup = 'category';

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
            <p>{nameError}</p>
            <Field
              name="address"
              placeholder=""
              label="Adresse :"
              manageChange={changeField}
              value={address}
            />
            <p>{addressError}</p>
            <Field
              name="website"
              placeholder=""
              label="(Optionel) Site web :"
              manageChange={changeField}
              value={website}
            />
            <p>{websiteError}</p>
            <Field
              name="dateTime"
              placeholder=""
              label="Date et heure :"
              manageChange={changeField}
              value={dateTime}
            />
            <p>{dateTimeError}</p>
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
            <p>{descriptionError}</p>
            <h3>Catégories :</h3>
            <RadioField
              id="artDeRue"
              name={radioGroup}
              manageChecked={changeChecking}
              label="Art de rue"
              value={1}
            />

            <RadioField
              id="musique"
              name={radioGroup}
              manageChecked={changeChecking}
              label="Musique"
              value={2}
            />

            <RadioField
              id="expo"
              name={radioGroup}
              manageChecked={changeChecking}
              label="Expo"
              value={3}
            />

            <RadioField
              id="theatre"
              name={radioGroup}
              manageChecked={changeChecking}
              label="Théâtre"
              value={4}
            />
            <p>{categoryError}</p>

            <Field
              name="price"
              placeholder=""
              type="number"
              label="Prix :"
              manageChange={changeField}
              value={price}
            />
            <p>{priceError}</p>

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
  /** value for the errors */
  nameError: PropTypes.string,
  addressError: PropTypes.string,
  websiteError: PropTypes.string,
  dateTimeError: PropTypes.string,
  priceError: PropTypes.string,
  descriptionError: PropTypes.string,
  categoryError: PropTypes.string,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when onChange event is received by a radio input, one parameter :
   * - new value
   */
  changeChecking: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleCreateEvent: PropTypes.func.isRequired,
};

CreateEventForm.defaultProps = {
  nameError: '',
  addressError: '',
  websiteError: '',
  dateTimeError: '',
  priceError: '',
  descriptionError: '',
  categoryError: '',
};

export default CreateEventForm;
