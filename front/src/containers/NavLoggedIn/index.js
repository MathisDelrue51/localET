import { connect } from 'react-redux';

// Import component
import NavLoggedIn from 'src/components/Header/navLoggedIn';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
  // element to get from the state
  pseudo: state.auth.pseudo,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({


});


// export
export default connect(mapStateToProps, mapDispatchToProps)(NavLoggedIn);
