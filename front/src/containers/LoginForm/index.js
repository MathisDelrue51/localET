import { connect } from 'react-redux';

// Import component
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // function dispatching the action
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
