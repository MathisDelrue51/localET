import { connect } from 'react-redux';

import ProfilePage from 'src/components/ProfilePage';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  pseudo: state.auth.pseudo
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
