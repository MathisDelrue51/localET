export const UPDATE_EVENT_FIELD = 'UPDATE__EVENT_FIELD';

export const UPDATE_RADIO_OPTION = 'UPDATE_RADIO_OPTION';

// action to be connected to changeField prop
export const updateEventField = (newValue, fieldName) => ({
  type: UPDATE_EVENT_FIELD,
  newValue,
  fieldName,
});

// action to be connected to changeChecking prop
export const updateRadioOption = (newValue, catName) => ({
  type: UPDATE_RADIO_OPTION,
  newValue,
  catName,
});
