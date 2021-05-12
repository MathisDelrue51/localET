import { UPDATE_FIELD, SAVE_USER, LOG_OUT, REGISTER} from '../actions/auth';

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

  errors: {
    email:"",
    password:"",
    password2:"",
    pseudo: ""
  }

};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      if(!state.email) {
        return {
          ...state,
          errors: {
            ...state.errors,
            email: "Veuillez renseigner un email"
          }
        }
      }
      if(state.email && !state.password) {
        return {
          ...state,
          errors: {
            ...state.errors,
            email: "",
            password: "Veuillez renseigner un mot de passe"
          }
        }
      }
      if(state.email && !state.password2) {
        return {
          ...state,
          errors: {
            ...state.errors,
            password: "",
            password2: "Veuillez effectuer la vérification de mot de passe"
          }
        }
      }
      if(state.password && state.password2 && state.password2 !== state.password){
        return {
          ...state,
          errors: {
            ...state.errors,
            password2:'Vos mots de passe ne correspondent pas'
        }
      }}
      if(state.password && state.password2 && state.password2 === state.password && !state.pseudo) {
        return {
          ...state,
          errors: {
            ...state.errors,
            password2: "",
            pseudo: "Veuillez renseigner un pseudo"
          }
        }
      }
      if(state.pseudo){
        return {
          ...state,
          errors: {
            ...state.errors,
            pseudo: ""
          }
        }
      }
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
        password2: '',
        token: action.token,
        pseudo: action.pseudo,
        error: ''
      };

    // This is what happens when the action SAVE_USER is fired :
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
