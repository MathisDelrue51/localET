export const FETCH_CURIOSETS = 'FETCH_CURIOSETS';
export const FETCH_CURIOSETS_SUCCESS = 'FETCH_CURIOSETS_SUCCESS';
export const FETCH_CURIOSETS_ERROR = 'FETCH_CURIOSETS_ERROR';
export const UPDATE_ADDRESS_FIELD = 'UPDATE_ADDRESS_FIELD';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export const SUBMIT_SEARCH_SUCCESS = 'SUBMIT_SEARCH_SUCCESS';
export const SUBMIT_SEARCH_ERROR = 'SUBMIT_SEARCH_ERROR';
export const OPEN_LEGEND_MAP = 'OPEN_LEGEND_MAP';

// action to open map legend
export const openLegendMap = () => ({
  type: OPEN_LEGEND_MAP,
});

// action in case search fails
export const submitSearchError = () => ({
  type: SUBMIT_SEARCH_ERROR,
});

// action in case search is a success
export const submitSearchSuccess = (longitude, latitude) => ({
  type: SUBMIT_SEARCH_SUCCESS,
  longitude,
  latitude,
});

// action to submit address in the search bar
export const submitSearch = () => ({
  type: SUBMIT_SEARCH,
});

// action to put address field value in state
export const updateAddressField = (newValue) => ({
  type: UPDATE_ADDRESS_FIELD,
  newValue,
});

// action to fetch curiosETs
export const fetchCuriosets = () => ({
  type: FETCH_CURIOSETS,
});

// action in case fetch curiosETs is a success
export const fetchCuriosetsSuccess = (list) => ({
  type: FETCH_CURIOSETS_SUCCESS,
  list,
});

// action in case fetch curiosETs fails
export const fetchCuriosetsError = () => ({
  type: FETCH_CURIOSETS_ERROR,
});
