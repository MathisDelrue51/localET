import { FETCH_CURIOSETS_SUCCESS} from 'src/actions/map';

export const initialState = {
  list: []
};

const reducer = (currentState = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_CURIOSETS_SUCCESS:
      return {
        ...currentState,
        list: action.list
      };
    default:
      return currentState;
  }
};

export default reducer;