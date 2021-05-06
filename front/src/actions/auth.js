export const UPDATE_FIELD = 'UPDATE_FIELD';

// action to be connected to changeField prop
export const updateField = (newValue, fieldName) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  fieldName: fieldName,
});
