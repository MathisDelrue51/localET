import {
  UPDATE_EVENT_FIELD,
  UPDATE_RADIO_OPTION,
  SAVE_ADDRESS_DATA,
  FETCH_EVENT_SUCCESS,
} from '../actions/curioset';

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

  // infos fetched from API
  longitude: null,
  latitude: null,

};

function curiosetReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        name: action.data.title,
        address: action.data.address,
        website: action.data.website,
        dateTime: action.data.agenda,
        price: action.data.price,
        category: action.data.category_id,
        longitude: action.data.longitude,
        latitude: action.data.latitude,
      };
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

    case SAVE_ADDRESS_DATA:
      return {
        ...state,
        longitude: action.longitude,
        latitude: action.latitude,
      };
    default:
      return state;
  }
}

export default curiosetReducer;
