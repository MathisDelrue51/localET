import { connect } from 'react-redux';

// Import component
import Map from 'src/components/Map';

// Import action
import { saveID, fetchEvent } from 'src/actions/curioset';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  list: state.map.list,
  longitude: state.map.longitude,
  latitude: state.map.latitude,
  zoom: state.map.zoom,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to save event id in state
  saveId: (idEvent) => {
    dispatch(saveID(idEvent));
  },
  // to fetch individual event
  handleClick: () => {
    dispatch(fetchEvent());
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Map);
