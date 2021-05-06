<<<<<<< HEAD
// On est d'accord qu'on fait un seul reducer ? Histoire de s'economiser au moins une complication...
import data from "src/data.js";

export const initialState = {
  list : data
};
=======
import { combineReducers } from 'redux';

// on importe tous les reducers
import authReducer from 'src/reducers/authReducer';


// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,

});

export default rootReducer;
>>>>>>> 05b172fb5799eda5b95507e4ef6e72584bce9a3a
