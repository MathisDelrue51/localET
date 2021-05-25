import { connect } from 'react-redux';

// Import component
import SearchBar from 'src/components/SearchBar';

// Import action
import { updateAddressField, submitSearch } from 'src/actions/map';

// === mapStateToProps
// for information to be passed from state to component
const mapStateToProps = (state) => ({
  address: state.map.address,
});

// === mapDispatchToProps
// for information to be dispatched to the store (state modification)
const mapDispatchToProps = (dispatch) => ({

  // to handle changes in form field
  changeField: (newValue) => {
    const actionToDispatch = updateAddressField(newValue);
    dispatch(actionToDispatch);
  },
  // to send search content to .gouv API
  handleSearch: () => {
    console.log('submit du formulaire');
    const actionToDispatch = submitSearch();
    dispatch(actionToDispatch);
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
