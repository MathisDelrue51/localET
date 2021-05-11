import { connect } from 'react-redux';

// Import component
import Header from 'src/components/Header';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({

});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Header);
