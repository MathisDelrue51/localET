import { UPDATE_EVENT_FIELD, UPDATE_RADIO_OPTION } from '../actions/curioset';

const initialState = {
  // event name input content :
  name: '',

  // password input content :
  address: '',

  // website input content
  website: '',

  // dateTime of event
  dateTime: '',

  // price of event
  price: '',

  // description
  description: '',

  // category type
  category: 0,

};

function curiosetReducer(state = initialState, action) {
  switch (action.type) {
    // This is what happens when the action UPDATE_FIELD is fired :
    case UPDATE_EVENT_FIELD:

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

      if (action.fieldName === 'price') {
        return {
          ...state,
          price: action.newValue,
        };
      }

      if (action.fieldName === 'description') {
        return {
          ...state,
          description: action.newValue,
        };
      }
      break;

    case UPDATE_RADIO_OPTION:
      if (action.radioGroupName === 'category') {
        return {
          ...state,
          category: action.newValue,
        };
      }
      break;

    default:
      return state;
  }
}

export default curiosetReducer;
