import { connect } from 'react-redux';

// Import action
import { updateField, register, toggleOpenMenu } from 'src/actions/auth';

// Import component
import RegisterForm from 'src/components/RegisterForm';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  password: state.auth.password,
  password2: state.auth.password2,
  pseudo: state.auth.pseudo,
  password2Error: state.auth.errors.password2,
  passwordError: state.auth.errors.password,
  emailError: state.auth.errors.email,
  pseudoError: state.auth.errors.pseudo,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to handle changes in form fields
  changeField: (newValue, name) => {
    const action = updateField(newValue, name);
    dispatch(action);
  },
  // to handle sending register infos to DB
  handleRegister: () => {
    console.log('submit du formulaire');
    dispatch(register());
  },
  // to open menu on mobile
  openMenu: () => {
    dispatch(toggleOpenMenu());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
