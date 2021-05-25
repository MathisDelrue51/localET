export const UPDATE_FIELD = 'UPDATE_FIELD';

export const LOG_IN = 'LOG_IN';

export const SAVE_USER = 'SAVE_USER';

export const REGISTER = 'REGISTER';

export const LOG_OUT = 'LOG_OUT';

export const FETCH_PROFILE = 'FETCH_PROFILE';

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';

export const TOGGLE_OPEN_MENU = 'TOGGLE_OPEN_MENU';

export const TOGGLE_CLOSE_MENU = 'TOGGLE_CLOSE_MENU';

export const SAVE_USER_BROWSER = 'SAVE_USER_BROWSER';

export const HANDLE_ERROR_REGISTER = 'HANDLE_ERROR_REGISTER';

export const REMOVE_ERROR_REGISTER = 'REMOVE_ERROR_REGISTER';

// action to remove unrelevant error messages after user correction
export const removeErrorRegister = () => ({
  type: REMOVE_ERROR_REGISTER,
});

// action to send back error messages to user in register
export const handleErrorRegister = (path, message) => ({
  type: HANDLE_ERROR_REGISTER,
  path,
  message,
});

// action to save token in state when refresh happens
export const saveUserBrowser = (token, pseudo, id, logged) => ({
  type: SAVE_USER_BROWSER,
  token,
  pseudo,
  id,
  logged,
});

// action when data is sent from DB
export const fetchProfileSuccess = (email, profileList, id) => ({
  type: FETCH_PROFILE_SUCCESS,
  email,
  profileList,
  id,
});

// action when user goes on their profile page
export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

// action when register form submit button is clicked
export const register = () => ({
  type: REGISTER,
});

// action to be connected to changeField prop
export const updateField = (newValue, fieldName) => ({
  type: UPDATE_FIELD,
  newValue,
  fieldName,
});

// action to be connected to handleLogin prop
export const logIn = () => ({
  type: LOG_IN,
});

// action to be connected to isLogged prop
export const saveUser = (isLogged, token, pseudo, id) => ({
  type: SAVE_USER,
  isLogged,
  token,
  pseudo,
  id,
});

// action to be connected to handleLogout prop
export const logOut = () => ({
  type: LOG_OUT,
});

// action to open menu on mobile
export const toggleOpenMenu = () => ({
  type: TOGGLE_OPEN_MENU,
});

// action to close menu on mobile
export const toggleCloseMenu = () => ({
  type: TOGGLE_CLOSE_MENU,
});
