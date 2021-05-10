import { connect } from 'react-redux';
import Map from 'src/components/Map';
import { fetchCuriosets } from '../../actions/map';


const mapStateToProps = (state) => ({
  list: state.map.list
});

const mapDispatchToProps = {} ;

export default connect(mapStateToProps, mapDispatchToProps)(Map);
