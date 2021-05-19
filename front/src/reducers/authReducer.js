import {
  UPDATE_FIELD,
  SAVE_USER,
  LOG_OUT,
  REGISTER,
  FETCH_PROFILE_SUCCESS,
  TOGGLE_OPEN_MENU,
  TOGGLE_CLOSE_MENU,
  SAVE_USER_BROWSER,
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
    case SAVE_USER_BROWSER:
      return {
        ...state,
        token: action.token,
        pseudo: action.pseudo,
        id: action.id,
        logged: action.logged,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        email: action.email,
        profileList: action.profileList,
      };
    // This is what happens when the action REGISTER is fired :
    case REGISTER:
      if (!state.email) {
        return {
          ...state,
          errors: {
            ...state.errors,
            email: 'Veuillez renseigner un email',
          },
        };
      }
      if (state.email && !state.password) {
        return {
          ...state,
          errors: {
            ...state.errors,
            email: '',
            password: 'Veuillez renseigner un mot de passe',
          },
        };
      }
      if (state.email && !state.password2) {
        return {
          ...state,
          errors: {
            ...state.errors,
            password: '',
            password2: 'Veuillez effectuer la vérification de mot de passe',
          },
        };
      }
      if (state.password && state.password2 && state.password2 !== state.password) {
        return {
          ...state,
          errors: {
            ...state.errors,
            password2: 'Vos mots de passe ne correspondent pas',
          },
        };
      }
      if (state.password && state.password2
      && state.password2 === state.password
      && !state.pseudo) {
        return {
          ...state,
          errors: {
            ...state.errors,
            password2: '',
            pseudo: 'Veuillez renseigner un pseudo',
          },
        };
      }
      if (state.pseudo) {
        return {
          ...state,
          errors: {
            ...state.errors,
            pseudo: '',
          },
        };
      }
      break;
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
        logged: action.isLogged,
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
        token: '',
        pseudo: '',
      };

    case TOGGLE_OPEN_MENU:
      return {
        ...state,
        open: !state.open,
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
