import { connect } from 'react-redux';

import { updateField, register } from 'src/actions/auth'

// Import component
import RegisterForm from 'src/components/RegisterForm';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  password: state.auth.password,
  pseudo: state.auth.pseudo
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // function dispatching the action
  changeField : (newValue, name)=>{
    const action = updateField(newValue, name);
    dispatch(action);
  },
  handleRegister: () => {
    console.log("submit du formulaire");
    dispatch(register());
  }
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
