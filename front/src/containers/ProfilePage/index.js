import { connect } from 'react-redux';

// import component
import ProfilePage from 'src/components/ProfilePage';

// import action
import { saveID, fetchEvent } from 'src/actions/curioset';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  // element to get from the state
  email: state.auth.email,
  pseudo: state.auth.pseudo,
  profileList: state.auth.profileList,
  id: state.auth.id,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({

  // to save id and fetch event from profile page
  displayEvent: (id) => {
    Promise.resolve(dispatch(saveID(id))).then(() => dispatch(fetchEvent()));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
