import {
  UPDATE_EVENT_FIELD,
  UPDATE_RADIO_OPTION,
  SAVE_ADDRESS_DATA,
  FETCH_EVENT_SUCCESS,
  UPDATE_EVENT_SUCCESS,
  SAVE_ID,
  HANDLE_ERROR,
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

  // category number
  category: 0,

  // category type
  type: '',

  // infos fetched from address API
  longitude: null,
  latitude: null,

  // id received from DB
  idEvent: null,

  errors: {
    name: '',
    address: '',
    website: '',
    dateTime: '',
    price: '',
    description: '',
    category: '',
  },

};

function curiosetReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_ERROR:
      if (action.path === 'title') {
        return {
          ...state,
          errors: {
            ...state.errors,
            name: action.message,
            address: '',
            website: '',
            dateTime: '',
            price: '',
            description: '',
            category: '',
          },
        };
      }
      if (action.path === 'description') {
        return {
          ...state,
          errors: {
            ...state.errors,
            description: action.message,
            name: '',
            address: '',
            website: '',
            dateTime: '',
            price: '',
            category: '',
          },
        };
      }
      if (action.path === 'address') {
        return {
          ...state,
          errors: {
            ...state.errors,
            address: action.message,
            name: '',
            website: '',
            dateTime: '',
            price: '',
            description: '',
            category: '',
          },
        };
      }
      if (action.path === 'website') {
        return {
          ...state,
          errors: {
            ...state.errors,
            website: action.message,
            name: '',
            address: '',
            dateTime: '',
            price: '',
            description: '',
            category: '',
          },
        };
      }
      if (action.path === 'agenda') {
        return {
          ...state,
          errors: {
            ...state.errors,
            dateTime: action.message,
            name: '',
            address: '',
            website: '',
            price: '',
            description: '',
            category: '',
          },
        };
      }
      if (action.path === 'price') {
        return {
          ...state,
          errors: {
            ...state.errors,
            price: action.message,
            name: '',
            address: '',
            website: '',
            dateTime: '',
            description: '',
            category: '',
          },
        };
      }
      if (action.path === 'category_id') {
        return {
          ...state,
          errors: {
            ...state.errors,
            category: action.message,
            name: '',
            address: '',
            website: '',
            dateTime: '',
            price: '',
            description: '',
          },
        };
      }
      break;
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        name: action.data.title,
        address: action.data.address,
        website: action.data.website,
        dateTime: action.data.agenda,
        description: action.data.description,
        price: action.data.price,
        category: action.data.category_id,
        longitude: action.data.longitude,
        latitude: action.data.latitude,
        idEvent: action.data.id,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        name: action.data.title,
        address: action.data.address,
        website: action.data.website,
        dateTime: action.data.agenda,
        description: action.data.description,
        price: action.data.price,
        category: action.data.category_id,
        type: action.data.type,
        longitude: action.data.longitude,
        latitude: action.data.latitude,
        idEvent: action.data.id,
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

    // This is what happens when the action SAVE_ID is fired :
    case SAVE_ID:
      return {
        ...state,
        idEvent: action.idEvent,
      };

    default:
      return state;
  }
}

export default curiosetReducer;
