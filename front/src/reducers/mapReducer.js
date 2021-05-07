import { FETCH_CURIOSETS_SUCCESS, UPDATE_ADDRESS_FIELD, SUBMIT_SEARCH_SUCCESS} from 'src/actions/map';
import { SUBMIT_SEARCH_ERROR } from '../actions/map';

export const initialState = {
  list: [],
  address: "",
  longitude : 2.333333,
  latitude: 48.866667
};

const reducer = (currentState = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_ADDRESS_FIELD:
      return {
        ...currentState,
        address: action.newValue
      }
    case FETCH_CURIOSETS_SUCCESS:
      return {
        ...currentState,
        list: action.list
      };
    case SUBMIT_SEARCH_SUCCESS:
      return {
        ...currentState,
        longitude: action.longitude,
        latitude: action.latitude
      }
    default:
      return currentState;
  }
};

export default reducer;
