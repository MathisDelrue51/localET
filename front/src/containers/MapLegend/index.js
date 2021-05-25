import { connect } from 'react-redux';

// Import component
import MapLegend from 'src/components/MapLegend';

// Import action
import { openLegendMap } from 'src/actions/map';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  openLegend: state.map.openLegend,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({
  // to open map legend
  handleOpen: () => {
    dispatch(openLegendMap());
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(MapLegend);
