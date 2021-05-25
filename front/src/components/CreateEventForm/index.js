// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';
import TextAreaField from 'src/components/TextAreaField';
import RadioField from 'src/components/RadioField';
import './styles.scss';

// == Component
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
      <h1 className="createTitle">Créer une CuriosET</h1>
      <form onSubmit={handleSubmit}>
        <div className="createEventForm">
          <div className="formColumn">
            <div className="createBlock">
              <Field
                name="name"
                placeholder=""
                label="Nom de la curiosET :"
                manageChange={changeField}
                value={name}
              />
              <p className="fieldError">{nameError}</p>
            </div>

            <div className="createBlock">
              <Field
                name="address"
                placeholder="N° , nom de la rue , code postal , ville"
                label="Adresse :"
                manageChange={changeField}
                value={address}
              />
              <p className="fieldError">{addressError}</p>
            </div>
            <div className="createBlock createBlockWebsite">
              <Field
                name="website"
                placeholder=""
                label="Site web :"
                manageChange={changeField}
                value={website}
              />
              <p className="additionnalFieldInfo">Optionnel</p>
              <p className="fieldError">{websiteError}</p>
            </div>

            <div className="createBlock">
              <Field
                name="dateTime"
                placeholder=""
                label="Date et heure :"
                manageChange={changeField}
                value={dateTime}
              />
              <p className="fieldError">{dateTimeError}</p>
            </div>
          </div>

          <div className="formColumn">
            <div className="createBlock">
              <TextAreaField
                name="description"
                placeholder="Votre description de l'évènement..."
                rows="5"
                label="Description :"
                manageChange={changeField}
                value={description}
              />
              <p className="fieldError">{descriptionError}</p>
            </div>
            <div className="createBlock categoryBlock">
              <h3 className="radioTitle">Catégorie :</h3>
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
              <p className="fieldError">{categoryError}</p>
            </div>

            <div className="createBlock">
              <Field
                name="price"
                placeholder=""
                type="number"
                label="Prix :"
                manageChange={changeField}
                value={price}
              />
              <p className="fieldError">{priceError}</p>
            </div>
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
  website: PropTypes.string,
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
  website: '',
  nameError: '',
  addressError: '',
  websiteError: '',
  dateTimeError: '',
  priceError: '',
  descriptionError: '',
  categoryError: '',
};

// == Export
export default CreateEventForm;
