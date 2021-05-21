import { connect } from 'react-redux';

import {
  updateEventField, updateRadioOption, submitAddressSearchUpdate,
} from 'src/actions/curioset';

// Import component
import UpdateEventForm from 'src/components/UpdateEventForm';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  name: state.curioset.name,
  address: state.curioset.address,
  website: state.curioset.website,
  dateTime: state.curioset.dateTime,
  price: state.curioset.price,
  description: state.curioset.description,
  category: state.curioset.category,
  idEvent: state.curioset.idEvent,
  nameError: state.curioset.errors.name,
  addressError: state.curioset.errors.address,
  websiteError: state.curioset.errors.website,
  dateTimeError: state.curioset.errors.dateTime,
  priceError: state.curioset.errors.price,
  descriptionError: state.curioset.errors.description,
  categoryError: state.curioset.errors.category,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue: ${newValue}, name: ${name}`);
    const action = updateEventField(newValue, name);
    dispatch(action);
  },

  changeChecking: (newValue, radioGroupName) => {
    console.log(`newValue: ${newValue}`);
    dispatch(updateRadioOption(newValue, radioGroupName));
  },

  handleUpdateEvent: () => {
    dispatch(submitAddressSearchUpdate());
  },

});

// export
export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm);
