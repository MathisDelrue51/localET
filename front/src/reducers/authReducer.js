import { UPDATE_FIELD, SAVE_USER, LOG_OUT } from '../actions/auth';

const initialState = {
  // email input content :
  email: '',

  // password input content :
  password: '',

  // alias input content :
  pseudo: '',
  // is user loggedin ?
  logged: false,

  token: null,

  id: null

};

function authReducer(state = initialState, action) {
  switch (action.type) {
    // This is what happens when the action UPDATE_FIELD is fired :
    case UPDATE_FIELD:
      // It means : if fieldName is email, update the email property of the state with
      // the new value typed into the field
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }

      if (action.fieldName === 'password') {
        return {
          ...state,
          password: action.newValue,
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
    case SAVE_USER :
    return {
      ...state,
      logged: action.isLogged,
      email: "",
      password: '',
      token : action.token,
      pseudo : action.pseudo,
      id: action.id
    }
    case LOG_OUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        token: '',
        pseudo: '',
      };

    default:
      return state;
  }
}

export default authReducer;
