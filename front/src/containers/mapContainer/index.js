import { connect } from 'react-redux';
import Map from 'src/components/Map';
import { saveID, fetchEvent } from 'src/actions/curioset';

const mapStateToProps = (state) => ({
  list: state.map.list,
  longitude: state.map.longitude,
  latitude: state.map.latitude,
  zoom: state.map.zoom,
  isLogged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
  saveId: (idEvent) => {
    dispatch(saveID(idEvent));
  },
  handleClick: () => {
    dispatch(fetchEvent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
