import { connect } from 'react-redux';

import { toggleCloseMenu } from 'src/actions/auth';

// Import component
import navLoggedOut from 'src/components/Header/navLoggedOut';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state

});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({

  closeMenu: () => {
    dispatch(toggleCloseMenu());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(navLoggedOut);
