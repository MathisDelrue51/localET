import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import {updateAddressField, submitSearch} from 'src/actions/map';

const mapStateToProps = (state) => ({
  address: state.map.address
});

const mapDispatchToProps = (dispatch) => ({
  changeField:(newValue) => {
      const actionToDispatch =  updateAddressField(newValue);
      dispatch(actionToDispatch);
  },
  handleSearch:() => {
    console.log("submit du formulaire");
    const actionToDispatch = submitSearch();
    dispatch(actionToDispatch);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
