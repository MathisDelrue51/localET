import { connect } from 'react-redux';

import { updateField, logIn, toggleCloseMenu } from 'src/actions/auth';

// Import component
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // function dispatching the action related to changes typed in the field
  changeField: (newValue, name) => {
    const action = updateField(newValue, name);
    dispatch(action);
  },

  // function dispatching the action related to login
  handleLogin: () => {
    dispatch(logIn());
    dispatch(toggleCloseMenu());
  },

  closeMenu: () => {
    dispatch(toggleCloseMenu());
  },

});

// export
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
