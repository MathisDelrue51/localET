import { connect } from 'react-redux';

import { logOut, fetchProfile } from 'src/actions/auth';

// Import component
import NavLoggedIn from 'src/components/Header/navLoggedIn';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  pseudo: state.auth.pseudo,
  id: state.auth.id
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
  handleClick: () => {
    dispatch(fetchProfile());
  }
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(NavLoggedIn);
