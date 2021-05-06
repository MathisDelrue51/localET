import { UPDATE_FIELD } from "../actions/auth";

const initialState = {
  // email input content : 
  email : '',

  // password input content : 
  password : '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      // It means : if fieldName is email, update the email property of the state with the new value typed into the field
      if(action.fieldName ==='email'){
        return {
          ...state,
          email: action.newValue,
        }
      }

      if(action.fieldName ==='password'){
        return {
          ...state,
          password: action.newValue,
        }
      }

    default:
      return state;
  }
}

export default authReducer;
