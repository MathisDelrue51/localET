export const UPDATE_EVENT_FIELD = 'UPDATE__EVENT_FIELD';

export const UPDATE_RADIO_OPTION = 'UPDATE_RADIO_OPTION';

export const SUBMIT_CREATE_EVENT = 'SUBMIT_CREATE_EVENT';

export const SUBMIT_ADDRESS_SEARCH = 'SUBMIT_ADDRESS_SEARCH';

export const SAVE_ADDRESS_DATA = 'SAVE_ADDRESS_DATA';

export const FETCH_EVENT = 'FETCH_EVENT';

export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';

export const FETCH_EVENT_ERROR = 'FETCH_EVENT_ERROR';

export const SAVE_ID = 'SAVE_ID';

// action to be connected to changeField prop
export const updateEventField = (newValue, fieldName) => ({
  type: UPDATE_EVENT_FIELD,
  newValue,
  fieldName,
});

// action to be connected to changeChecking prop
export const updateRadioOption = (newValue, radioGroupName) => ({
  type: UPDATE_RADIO_OPTION,
  newValue,
  radioGroupName,
});

// action to be fired after coordinates of address are received and stored in the state
export const submitCreateEvent = () => ({
  type: SUBMIT_CREATE_EVENT,
});

// action to be connected to handleCreateEvent
export const submitAddressSearch = () => ({
  type: SUBMIT_ADDRESS_SEARCH,
});

// action to be connected to response of submitAddressSearch
export const saveAddressData = (longitude, latitude) => ({
  type: SAVE_ADDRESS_DATA,
  longitude,
  latitude,
});

// action when data is sent from DB
export const fetchEventSuccess = (data) => ({
  type: FETCH_EVENT_SUCCESS,
  data,
});

// action when user goes to event page
export const fetchEvent = (idEvent) => ({
  type: FETCH_EVENT,
  idEvent,
});

export const saveID = (idEvent) => ({
  type: SAVE_ID,
  idEvent,
});
