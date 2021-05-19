import {
  connect,
} from 'react-redux';
import App from 'src/components/App';
import {
  fetchCuriosets,
} from 'src/actions/map';
import { saveUserBrowser } from '../../actions/auth';

const mapStateToProps = (state) => ({
  // element to get from the state
  pseudo: state.auth.pseudo,
  id: state.auth.id,
  idEvent: state.curioset.idEvent,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCuriosets: () => {
    console.log('fetch curiosETs');
    const action = fetchCuriosets();
    dispatch(action);
  },
  saveUser: (token, pseudo, id, logged) => {
    console.log('save token');
    const action = saveUserBrowser(token, pseudo, id, logged);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
