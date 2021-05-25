import { connect } from 'react-redux';

// Import action
import { updateField, logIn, toggleCloseMenu } from 'src/actions/auth';

// Import component
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to dispatch the action related to changes typed in the field
  changeField: (newValue, name) => {
    const action = updateField(newValue, name);
    dispatch(action);
  },

  // to dispatch the action related to login
  handleLogin: () => {
    dispatch(logIn());
    dispatch(toggleCloseMenu());
  },
  // to close menu on mobile
  closeMenu: () => {
    dispatch(toggleCloseMenu());
  },

});

// export
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
