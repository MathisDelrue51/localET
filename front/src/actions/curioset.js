export const UPDATE_EVENT_FIELD = 'UPDATE__EVENT_FIELD';

// action to be connected to changeField prop
export const updateEventField = (newValue, fieldName) => ({
  type: UPDATE_EVENT_FIELD,
  newValue,
  fieldName,
});
