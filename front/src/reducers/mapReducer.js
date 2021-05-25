// import
import {
  FETCH_CURIOSETS_SUCCESS, UPDATE_ADDRESS_FIELD, SUBMIT_SEARCH_SUCCESS, OPEN_LEGEND_MAP,
} from 'src/actions/map';

export const initialState = {
  // list of all curiosETs
  list: [],
  // address searched
  address: '',
  // longitude of the address searched
  longitude: 3.159,
  // latitude of the address searched
  latitude: 46.9896,
  // zoom level
  zoom: 6,
  // boolean legend option
  openLegend: false,
};

const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    // This is what happens when the action OPEN_LEGEND_MAP is launched :
    case OPEN_LEGEND_MAP:
      return {
        ...currentState,
        openLegend: !currentState.openLegend,
      };
    // This is what happens when the action UPDATE_ADDRESS_FIELD is launched :
    case UPDATE_ADDRESS_FIELD:
      return {
        ...currentState,
        address: action.newValue,
      };
    // This is what happens when the action FETCH_CURIOSETS_SUCCESS is launched :
    case FETCH_CURIOSETS_SUCCESS:
      return {
        ...currentState,
        list: action.list,
      };
    // This is what happens when the action SUBMIT_SEARCH_SUCCESS is launched :
    case SUBMIT_SEARCH_SUCCESS:
      return {
        ...currentState,
        longitude: action.longitude,
        latitude: action.latitude,
        zoom: 13,
      };
    default:
      return currentState;
  }
};

// export
export default reducer;
