import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchCuriosets } from 'src/actions/map';

const mapStateToProps = (state) => ({
  // element to get from the state
  pseudo: state.auth.pseudo,
  id: state.auth.id,
  idEvent: state.curioset.idEvent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCuriosets: () => {
    console.log('fetch curiosETs');
    const action = fetchCuriosets();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
