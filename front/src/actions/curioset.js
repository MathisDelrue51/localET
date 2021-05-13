export const UPDATE_EVENT_FIELD = 'UPDATE__EVENT_FIELD';

export const UPDATE_RADIO_OPTION = 'UPDATE_RADIO_OPTION';

export const SUBMIT_CREATE_EVENT = 'SUBMIT_CREATE_EVENT';

export const SUBMIT_ADDRESS_SEARCH = 'SUBMIT_ADDRESS_SEARCH';

export const SAVE_ADDRESS_DATA = 'SAVE_ADDRESS_DATA';

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

export const submitCreateEvent = () => ({
  type: SUBMIT_CREATE_EVENT,
});

export const submitAddressSearch = () => ({
  type: SUBMIT_ADDRESS_SEARCH,
});

export const saveAddressData = (longitude, latitude) => ({
  type: SAVE_ADDRESS_DATA,
  longitude,
  latitude,
});
