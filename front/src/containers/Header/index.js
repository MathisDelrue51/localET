import { connect } from 'react-redux';

// Import action
import { toggleOpenMenu, toggleCloseMenu } from 'src/actions/auth';

// Import component
import Header from 'src/components/Header';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  // element to get from the state
  isLogged: state.auth.logged,
  open: state.auth.open,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({

  // to open menu on mobile
  openMenu: () => {
    dispatch(toggleOpenMenu());
  },
  // to close menu on mobile
  closeMenu: () => {
    dispatch(toggleCloseMenu());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Header);
