import { connect } from 'react-redux';

// Import component
import CreateEventButton from 'src/components/CreateEventButton';

import {
  emptyEventState,
} from 'src/actions/curioset';

// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  emptyEventState: () => {
    console.log('empty event state');
    const action = emptyEventState();
    dispatch(action);
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(CreateEventButton);
