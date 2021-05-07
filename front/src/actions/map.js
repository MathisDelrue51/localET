export const FETCH_CURIOSETS = "FETCH_CURIOSETS";
export const FETCH_CURIOSETS_SUCCESS = 'FETCH_CURIOSETS_SUCCESS';
export const FETCH_CURIOSETS_ERROR = 'FETCH_CURIOSETS_ERROR';

//action to fetch curiosETs
export const fetchCuriosets = () => ({
  type: FETCH_CURIOSETS,
});


//action in case fetch curiosETs is a success
export const fetchCuriosetsSuccess = (list) => ({
  type: FETCH_CURIOSETS_SUCCESS,
  list,
});

//action in case fetch curiosETs fails
export const fetchCuriosetsError = () => ({
  type: FETCH_CURIOSETS_ERROR
});
