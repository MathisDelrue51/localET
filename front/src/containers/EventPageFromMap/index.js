import { connect } from 'react-redux';
 
// Import component
import EventPageFromMap from 'src/components/EventPageFromMap';
 
// === mapStateToProps
// for information to be read
const mapStateToProps = (state) => ({
 // element to get from the state
 list: state.map.list,
});
 
// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = {};
 
// export
export default connect(mapStateToProps, mapDispatchToProps)(EventPageFromMap);
