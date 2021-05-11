import { FETCH_CURIOSETS_SUCCESS, UPDATE_ADDRESS_FIELD, SUBMIT_SEARCH_SUCCESS} from 'src/actions/map';
import { SUBMIT_SEARCH_ERROR } from '../actions/map';

export const initialState = {
  list: [],
  address: "",
  longitude : 3.159,
  latitude: 46.9896,
  zoom: 6
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
        list: action.list,
      };
    case SUBMIT_SEARCH_SUCCESS:
      return {
        ...currentState,
        longitude: action.longitude,
        latitude: action.latitude,
        zoom: 13
      }
    default:
      return currentState;
  }
};

export default reducer;
