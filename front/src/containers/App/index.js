import { connect } from 'react-redux';
import App from 'src/components/App';
import {fetchCuriosets} from 'src/actions/map';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchCuriosets: () => {
    console.log('fetch curiosETs');
    const action = fetchCuriosets();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
