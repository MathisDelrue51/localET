import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import SubmitButton from 'src/components/SubmitButton';
import TextAreaField from 'src/components/TextAreaField';
import RadioField from 'src/containers/RadioField';

import './styles.scss';

const UpdateEventForm = ({
  name,
  address,
  website,
  dateTime,
  price,
  description,
  changeField,
  changeChecking,
  handleUpdateEvent,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateEvent();
  };

  const radioGroup = 'category';

  return (
    <div className="updateEvent">
      <h1 className="updateTitle">Modifier votre CuriosET</h1>
      <form onSubmit={handleSubmit}>
        <div className="updateEventForm">
          <div className="formColumn">
            <div className="updateBlock">
              <Field
                name="name"
                placeholder=""
                label="Nom de la curiosET :"
                manageChange={changeField}
                value={name}
              />
              <p></p>
            </div>

            <div className="updateBlock">
              <Field
                name="address"
                placeholder=""
                label="Adresse :"
                manageChange={changeField}
                value={address}
              />
              <p></p>
            </div>

            <div className="updateBlock">
              <Field
                name="website"
                placeholder=""
                label="Site web :"
                manageChange={changeField}
                value={website}
              />
              <p></p>
            </div>

            <div className="updateBlock">
              <Field
                name="dateTime"
                placeholder=""
                label="Date et heure :"
                manageChange={changeField}
                value={dateTime}
              />
              <p></p>
            </div>
          </div>

          <div className="formColumn">
            <div className="updateBlock">
              <TextAreaField
                name="description"
                placeholder="Votre description de l'évènement..."
                rows="5"
                label="Description :"
                manageChange={changeField}
                value={description}
              />
              <p></p>
            </div>

            <div className="updateBlock">
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
              <p></p>
            </div>

            <div className="updateBlock">
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
        </div>
        <SubmitButton
          buttonName="Envoyer"
          className="submitbutton"
        />
      </form>
    </div>
  );
};

UpdateEventForm.propTypes = {
  /** value for the name */
  name: PropTypes.string.isRequired,
  /** value for the address */
  address: PropTypes.string.isRequired,
  /** value for the website */
  website: PropTypes.string,
  /** value for the dateTime */
  dateTime: PropTypes.string.isRequired,
  /** value for the dateTime */
  price: PropTypes.number.isRequired,
  /** value for the description */
  description: PropTypes.string.isRequired,
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
  handleUpdateEvent: PropTypes.func.isRequired,
};

UpdateEventForm.defaultProps = {
  website: '',
};

export default UpdateEventForm;
