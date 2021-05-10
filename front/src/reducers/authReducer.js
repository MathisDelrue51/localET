import { UPDATE_FIELD, SAVE_USER} from "../actions/auth";

const initialState = {
  // email input content : 
  email : '',

  // password input content : 
  password : '',

  //alias input content :
  pseudo : '',
  // is user loggedin ? 
  logged: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {

    // This is what happens when the action UPDATE_FIELD is fired :
    case UPDATE_FIELD:

      // It means : if fieldName is email, update the email property of the state with the new value typed into the field
      if(action.fieldName ==='email'){
        return {
          ...state,
          email: action.newValue,
        }
      };

      if(action.fieldName ==='password'){
        return {
          ...state,
          password: action.newValue,
        }
      };

      if(action.fieldName ==='pseudo'){
        return {
          ...state,
          pseudo: action.newValue,
        }
      };
    
    // This is what happens when the action SAVE_USER is fired :
    case SAVE_USER :
    return {
      ...state,
      logged: action.isLogged,
      email: '',
      password: '',
    }

    default:
      return state;
  }
}

export default authReducer;
