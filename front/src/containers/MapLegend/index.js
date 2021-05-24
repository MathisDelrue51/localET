import { connect } from 'react-redux';
import MapLegend from 'src/components/MapLegend';
import { openLegendMap } from 'src/actions/map';

const mapStateToProps = (state) => ({
  openLegend: state.map.openLegend,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpen: () => {
    console.log("J'ai cliqué sur le bouton");
    dispatch(openLegendMap());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapLegend);
