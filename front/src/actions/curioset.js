export const UPDATE_EVENT_FIELD = 'UPDATE__EVENT_FIELD';

export const UPDATE_RADIO_OPTION = 'UPDATE_RADIO_OPTION';

export const SUBMIT_CREATE_EVENT = 'SUBMIT_CREATE_EVENT';

export const SUBMIT_ADDRESS_SEARCH = 'SUBMIT_ADDRESS_SEARCH';

export const SAVE_ADDRESS_DATA = 'SAVE_ADDRESS_DATA';

export const FETCH_EVENT = 'FETCH_EVENT';

export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';

export const FETCH_EVENT_ERROR = 'FETCH_EVENT_ERROR';

export const SAVE_ID = 'SAVE_ID';

export const UPDATE_EVENT = 'UPDATE_EVENT';

export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';

export const UPDATE_EVENT_ERROR = 'UPDATE_EVENT_ERROR';

export const SUBMIT_ADDRESS_SEARCH_UPDATE = 'SUBMIT_ADDRESS_SEARCH_UPDATE';

export const DELETE_EVENT = 'DELETE_EVENT';

// action to delete event
export const deleteEvent = () => ({
  type: DELETE_EVENT,
});

// action to submit address when updating event
export const submitAddressSearchUpdate = () => ({
  type: SUBMIT_ADDRESS_SEARCH_UPDATE,
});

// action if updates got safely to the DB
export const updateEventSuccess = (data) => ({
  type: UPDATE_EVENT_SUCCESS,
  data,
});

// action to post event updates
export const updateEvent = () => ({
  type: UPDATE_EVENT,
});

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
