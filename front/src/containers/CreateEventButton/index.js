import { connect } from 'react-redux';

// Import component
import CreateEventButton from 'src/components/CreateEventButton';

// Import action
import { emptyEventState } from 'src/actions/curioset';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = null;

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to empty all events info from curiosET state
  emptyEventState: () => {
    const action = emptyEventState();
    dispatch(action);
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(CreateEventButton);
