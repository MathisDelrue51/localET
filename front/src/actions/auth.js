export const UPDATE_FIELD = 'UPDATE_FIELD';

export const LOG_IN = 'LOG_IN';

export const SAVE_USER = 'SAVE_USER';

export const REGISTER = 'REGISTER';

//action when register form submit button is clicked
export const register = () => ({
  type: REGISTER
})

// action to be connected to changeField prop
export const updateField = (newValue, fieldName) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  fieldName: fieldName,
});

// action to be connected to handleLogin prop
export const logIn = () => ({
  type: LOG_IN,
})

// action to be connected to isLogged prop
export const saveUser = (isLogged) => ({
  type: SAVE_USER,
  isLogged,
});
