import { connect } from 'react-redux';

// Import component
import App from 'src/components/App';
import { fetchCuriosets } from 'src/actions/map';
import { saveUserBrowser } from '../../actions/auth';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  pseudo: state.auth.pseudo,
  token: state.auth.token,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to fetch all curiosETs at page loading
  fetchCuriosets: () => {
    const action = fetchCuriosets();
    dispatch(action);
  },
  // to save user info in localStorage
  saveUser: (token, pseudo, id, logged) => {
    const action = saveUserBrowser(token, pseudo, id, logged);
    dispatch(action);
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
