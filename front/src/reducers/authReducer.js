const initialState = {
  // email input content : 
  email : 'yo',

  // password input content : 
  password : 'yoyo',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
