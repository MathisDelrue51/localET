import { connect } from 'react-redux';
import MapLegend from 'src/components/MapLegend';

const mapStateToProps = (state) => ({
  list: state.map.list,
  longitude: state.map.longitude,
  latitude: state.map.latitude,
  zoom: state.map.zoom,
  isLogged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
