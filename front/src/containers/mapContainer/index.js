import { connect } from 'react-redux';
import Map from 'src/components/Map';


const mapStateToProps = (state) => ({
  list: state.map.list,
  longitude: state.map.longitude,
  latitude: state.map.latitude, 
  zoom: state.map.zoom
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
