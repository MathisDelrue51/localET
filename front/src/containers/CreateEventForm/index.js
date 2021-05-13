import { connect } from 'react-redux';

import { updateEventField, updateRadioOption, submitCreateEvent, submitAddressSearch, saveAddressData } from 'src/actions/curioset';

// Import component
import CreateEventForm from 'src/components/CreateEventForm';

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

  handleCreateEvent: () => {
    dispatch(submitAddressSearch());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);
