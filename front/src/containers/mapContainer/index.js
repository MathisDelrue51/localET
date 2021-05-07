import { connect } from 'react-redux';
import Map from 'src/components/Map';
import { fetchCuriosets } from '../../actions/map';


const mapStateToProps = (state) => ({
  list: state.map.list,
  longitude: state.map.longitude,
  latitude: state.map.latitude
});

const mapDispatchToProps = {} ;

export default connect(mapStateToProps, mapDispatchToProps)(Map);
