 import { UPDATE_EVENT_FIELD } from '../actions/curioset';

const initialState = {
  // event name input content :
  name: '',

  // password input content :
  address: '',

  // placeName input content :
  placeName: '',

  // website input content
  website: '',

  // dateTime of event
  dateTime: '',

};

function curiosetReducer(state = initialState, action) {
  switch (action.type) {
    // This is what happens when the action UPDATE_FIELD is fired :
    case UPDATE_EVENT_FIELD:
      // It means : if fieldName is email, update the email property of the state with
      // the new value typed into the field
      if (action.fieldName === 'name') {
        return {
          ...state,
          name: action.newValue,
        };
      }

      if (action.fieldName === 'address') {
        return {
          ...state,
          address: action.newValue,
        };
      }

      if (action.fieldName === 'placeName') {
        return {
          ...state,
          placeName: action.newValue,
        };
      }

      if (action.fieldName === 'website') {
        return {
          ...state,
          website: action.newValue,
        };
      }

      if (action.fieldName === 'dateTime') {
        return {
          ...state,
          dateTime: action.newValue,
        };
      }
      break;

    default:
      return state;
  }
}

export default curiosetReducer;
