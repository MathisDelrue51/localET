export const FETCH_CURIOSETS = "FETCH_CURIOSETS";
export const FETCH_CURIOSETS_SUCCESS = 'FETCH_CURIOSETS_SUCCESS';
export const FETCH_CURIOSETS_ERROR = 'FETCH_CURIOSETS_ERROR';

export const fetchCuriosetsSuccess = (list) => ({
  type: FETCH_CURIOSETS_SUCCESS,
  list,
});

export const fetchCuriosetsError = () => ({
  type: FETCH_CURIOSETS_SUCCESS,
});

export const fetchCuriosets = () => ({
  type: FETCH_CURIOSETS_ERROR,
});