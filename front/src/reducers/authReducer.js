// import npm
import { number } from 'prop-types';

// import
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
  // token content
  token: null,
  // list of curiosETs user created
  profileList: [],
  // field errors
  errors: {
    email: '',
    password: '',
    password2: '',
    pseudo: '',
  },
  // user id
  id: null,
  // boolean mobile menu option
  open: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    // This is what happens when the action REMOVE_ERROR_REGISTER is launched :
    case REMOVE_ERROR_REGISTER:
      return {
        ...state,
        errors: {
          ...state.errors,
          email: '',
          password: '',
          password2: '',
          pseudo: '',
        },
      };
    // This is what happens when the action HANDLE_ERROR_REGISTER is launched :
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
    // This is what happens when the action SAVE_USER_BROWSER is launched :
    case SAVE_USER_BROWSER:
      return {
        ...state,
        token: action.token,
        pseudo: action.pseudo,
        id: parseInt(action.id, number),
        logged: Boolean(action.logged),
      };
    // This is what happens when the action FETCH_PROFILE_SUCCESS is launched :
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        email: action.email,
        profileList: action.profileList,
        id: parseInt(action.id, number),
      };
    // This is what happens when the action UPDATE_FIELD is launched :
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

    // This is what happens when the action SAVE_USER is launched :
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
        token: action.token,
        pseudo: action.pseudo,
        id: parseInt(action.id, number),
      };
      // This is what happens when the action LOG_OUT is launched :
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
    // This is what happens when the action TOGGLE_OPEN_MENU is launched :
    case TOGGLE_OPEN_MENU:
      return {
        ...state,
        open: true,
      };
    // This is what happens when the action TOGGLE_CLOSE_MENU is launched :
    case TOGGLE_CLOSE_MENU:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

// Export
export default authReducer;
