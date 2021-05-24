import { number } from 'prop-types';
import {
  UPDATE_FIELD,
  SAVE_USER,
  LOG_OUT,
  FETCH_PROFILE_SUCCESS,
  TOGGLE_OPEN_MENU,
  TOGGLE_CLOSE_MENU,
  SAVE_USER_BROWSER,
  HANDLE_ERROR_REGISTER,
  REMOVE_ERROR_REGISTER,
} from '../actions/auth';

const initialState = {
  // email input content :
  email: '',

  // password input content :
  password: '',

  password2: '',
  // alias input content :
  pseudo: '',
  // is user loggedin ?
  logged: false,

  token: null,

  profileList: [],

  errors: {
    email: '',
    password: '',
    password2: '',
    pseudo: '',
  },
  id: null,

  open: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_ERROR_REGISTER:
      return {
        ...state,
        email: '',
        password: '',
        password2: '',
        pseudo: '',
      };
    case HANDLE_ERROR_REGISTER:
      if (action.path === 'email') {
        return {
          ...state,
          errors: {
            ...state.errors,
            email: action.message,
          },
        };
      }
      if (action.path === 'password') {
        return {
          ...state,
          errors: {
            ...state.errors,
            password: action.message,
          },
        };
      }
      if (action.path === 'pseudo') {
        return {
          ...state,
          errors: {
            ...state.errors,
            pseudo: action.message,
          },
        };
      }
      if (action.path === 'password2') {
        return {
          ...state,
          errors: {
            ...state.errors,
            password2: 'Vos mots de passe ne correspondent pas',
          },
        };
      }
      break;
    case SAVE_USER_BROWSER:
      return {
        ...state,
        token: action.token,
        pseudo: action.pseudo,
        id: parseInt(action.id),
        logged: Boolean(action.logged),
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        email: action.email,
        profileList: action.profileList,
        id: parseInt(action.id, number),
      };
    case UPDATE_FIELD:
      // It means : if fieldName is email, update the email property of the state with
      // the new value typed into the field
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.newValue.toLowerCase(),
        };
      }

      if (action.fieldName === 'password') {
        return {
          ...state,
          password: action.newValue,
        };
      }

      if (action.fieldName === 'password2') {
        return {
          ...state,
          password2: action.newValue,
        };
      }

      if (action.fieldName === 'pseudo') {
        return {
          ...state,
          pseudo: action.newValue,
        };
      }
      break;

    // This is what happens when the action SAVE_USER is fired :
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
        token: action.token,
        pseudo: action.pseudo,
        id: action.id,
      };
    case LOG_OUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        password2: '',
        token: '',
        pseudo: '',
      };

    case TOGGLE_OPEN_MENU:
      return {
        ...state,
        open: true,
      };

    case TOGGLE_CLOSE_MENU:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export default authReducer;
