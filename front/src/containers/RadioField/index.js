import { connect } from 'react-redux';

// Import component
import RadioField from 'src/components/RadioField';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  // element to get from the state
  category: state.curioset.category,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(RadioField);
