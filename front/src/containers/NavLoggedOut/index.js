import { connect } from 'react-redux';

// import action
import { toggleCloseMenu } from 'src/actions/auth';

// Import component
import navLoggedOut from 'src/components/Header/navLoggedOut';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = null;

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to close menu on mobile
  closeMenu: () => {
    dispatch(toggleCloseMenu());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(navLoggedOut);
